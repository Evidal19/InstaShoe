const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Post, Purchase } = require('../models');

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