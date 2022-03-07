const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Post, Purchase, Sold, Comment } = require("../models");
const withAuth = require('../utils/auth');

// get homepage to render
router.get("/home", (req, res) => {
  console.log(req.session);
  const userId = req.session.user_id;
  // res.render('../public/img-upload.html')
  console.log("---- GETTING POSTS ----");
  Post.findAll({
    include: [
      {
        model: User,
      },
      {
        model: Purchase,
      },
    ],
  })
    .then((dbPostData) => {
     // console.log("DBPOSTDATA" + JSON.stringify(dbPostData));
      const post_data = dbPostData.map((post) => post.get({ plain: true }));
      for (let i = 0; i < post_data.length; i++) {
        const element = post_data[i];
        element.current_user_id = userId;
      }
      console.log(post_data);
      console.log(req.session.loggedIn);

      var onlyName;
      var userName;

      if (req.session.username) {
        userName = JSON.stringify(req.session.username);
        onlyName = userName.replace(/["]+/g, '');
      }
      else {
        onlyName = '';
      }
      
      res.render("homepage", {
        post_data,
        loggedIn: req.session.loggedIn,
        instaUserName: onlyName
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single post
router.get("/post/:id", (req, res) => {
  const postId = req.params.id;
  Post.findOne({
    where: {
      id: postId,
    },
    include: [
      {
        model: Comment,
      },
      {
        model: User,
        attributes: ["username", "id"],
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      const post_data = dbPostData.get({ plain: true });

      console.log(post_data);

      var onlyName;
      var userName;

      if (req.session.username) {
        userName = JSON.stringify(req.session.username);
        onlyName = userName.replace(/["]+/g, '');
      }
      else {
        onlyName = '';
      }

      res.render("single-post", {
        post_data: post_data,
        loggedIn: req.session.loggedIn,
        instaUserName: onlyName
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get login page to render
router.get("/login", (req, res) => {
  console.log(req.session.loggedIn);
  if (req.session.loggedIn) {
    res.redirect("/home");
    return;
  }
  res.render("login");
});

// get sign-up page to render
router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/post-upload", (req, res) => {
  var onlyName;
  var userName;

  if (req.session.username) {
    userName = JSON.stringify(req.session.username);
    onlyName = userName.replace(/["]+/g, '');
  }
  else {
    onlyName = '';
  }
  res.render("post", { 
    loggedIn: req.session.loggedIn,
    instaUserName: onlyName
  });
});

router.get("/dashboard", withAuth, (req, res) => {
  var onlyName;
  var userName;
  console.log(req.session.loggedIn)

  if (req.session.username) {
    userName = JSON.stringify(req.session.username);
    onlyName = userName.replace(/["]+/g, '');
  }
  else {
    onlyName = '';
  }
  res.render("dashboard", { 
    loggedIn: req.session.loggedIn,
    instaUserName: onlyName
  });
});

module.exports = router;
