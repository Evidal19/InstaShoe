const router = require("express").Router();
const { User, Post } = require("../../models");
const { uploadFile} = require("../../s3");
// expects /api/users/

// file system
const fs = require("fs");
const util = require("util");

const unlinkFile = util.promisify(fs.unlink);

// multer
const multer = require("multer");
const upload = multer({ dest: "./upload" });

// expects /api/users/
router.get("/", (req, res) => {
  // gets a list of all users
  User.findAll()
    .then((users) => {
      res.json({ message: "Success", users });
    })
    .catch((err) => res.status(500).json(err));
});

// expects /api/users/2
router.get("/:id", (req, res) => {
  let userId = req.params.id;

  // gets data for a single user
  // probably just their username/email and hashed password
  // will probably connect to posts table or purchase history table(s)
  // and display the posts the user has.
  // We could also keep it separate and have this request only get user information for authentication

  User.findOne({
    where: {
      id: userId,
    },
    include: [
      {
        model: Post,
        // attributes: ["post_title", "post_description"],
      },
    ],
  })
    .then((user) => {
      if (!user) {
        res.status(404).json({ message: "No user found with that id" });
        return;
      }
      // res.json({ message: "success", user });
      console.log(user);

      res.render('user', {
        user,
      });
    })
    .catch((err) => res.status(500).json(err));
});

// expects /api/users/
router.post("/", upload.single("image"), async (req, res) => {
  // create a new user, will take a username/email and hashed password
  const file = req.file;
  
  console.log("PROFILE-PICTURE-FILE: " + file)
  if (!file) {
    User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    })
      .then((user) => {
        res.json({ message: "success", user });
      })
      .catch((err) => res.status(500).json(err));
  } else {
    const result = await uploadFile(file);
    await unlinkFile(file.path);

    User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      file_src: result.Key
    })
      .then((user) => {
        if (user) {
          res.redirect('/login')
        }
      })
      .catch((err) => res.status(500).json(err));
  }

});

router.post("/login", (req, res) => {
  console.log("getting login...");
  User.findOne({
    where: {
      username: req.body.username,
    },
  }).then((dbUserData) => {
    if (!dbUserData) {
      res.status(400).json({ message: "No user with that username!" });
      console.log('no user w/ username');
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    // var validPassword;
    // console.log(dbUserData);
    // console.log(dbUserData.dataValues.password);

    // if(req.body.password === dbUserData.dataValues.password) {
    //   validPassword = true;
    // }
    // else {
    //   validPassword = false;
    // }

    // console.log(validPassword);

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password!" });
      console.log('wrong password');
      return;
    }

    req.session.save(() => {
      // declare session variables
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;

      res.json({ user: dbUserData, message: "You are now logged in!" });
    });
  });
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// expects /api/users/2
router.put("/:id", (req, res) => {
  let userId = req.params.id;
  // update user info like changning username/email or password
  User.update(
    {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    },
    {
      where: {
        id: userId,
      },
    }
  )
    .then((updatedUser) => {
      if (!updatedUser) {
        res.status(404).json({ message: "No user found with that id" });
        return;
      }
      res.json({ message: "success", updatedUser });
    })
    .catch((err) => res.status(500).json(err));
});

// expects /api/users/2
router.delete("/:id", (req, res) => {
  let userId = req.params.id;
  // delete user based on id
  User.destroy({
    where: {
      id: userId,
    },
  })
    .then((deletedUser) => {
      if (!deletedUser) {
        res.status(404).json({ message: "No user found with that id" });
        return;
      }
      res.json({ message: "success", deletedUser });
    })
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
