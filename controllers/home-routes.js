const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Post, Purchase, Sold, Comment } = require("../models");

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
      const post_data = dbPostData.map((post) => post.get({ plain: true }));
      post_data.current_user_id = userId;
      console.log(post_data);
      res.render("homepage", {
        post_data
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
        attributes: ["username"],
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

      res.render("single-post", {
        post_data: post_data
        // loggedIn: req.session.loggedIn
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
  res.render("post");
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

module.exports = router;
