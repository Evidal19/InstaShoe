const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Post, Purchase, Comment} = require('../models');

// get homepage to render
router.get('/home', (req, res) => {
    console.log(req.session);
    // res.render('../public/img-upload.html')
    console.log('---- GETTING PURCHASES ----');
    Purchase.findAll({
      include: [{
        model: User
      },
      {
        model: Post
      }]
    })
    .then(dbPurchaseData => {
        
        const purchase_data = dbPurchaseData.map(purchase => 
          purchase.get({ plain: true })
        );
  
        res.render('homepage', {
          purchase_data,
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// get single post
router.get('/post/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'post_title',
      'post_description',
      'file_src',
      // 'created_at',
      // [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
    ],
    include: [
      {
        model: Comment,
      attributes: ['id', 'comment_text', 'post_id', 'user_id', /*'created_at'*/],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      const post = dbPostData.get({ plain: true });

      console.log(post);

      res.render('single-post', {
        post,
        // loggedIn: req.session.loggedIn 
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get login page to render
router.get('/login', (req, res) => {
  console.log(req.session.loggedIn);
  if (req.session.loggedIn) {
    res.redirect('/home');
    return;
  }
  res.render('login');
});

// get sign-up page to render
router.get('/register', (req, res) => {
  res.render('register');
});

router.get('/post-upload', (req, res) => {
  res.render('post');
});

router.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

module.exports = router;