const router = require('express').Router();
const sequelize = require('../config/connection')
const { User, Post, Purchase } = require('../models');

// get homepage to render
router.get('/home', (req, res) => {
    // res.render('../public/img-upload.html')
    console.log('---- GETTING PURCHASES ----');
    Post.findAll({
      attributes: [
        'id',
        'post_title',
        'post_description',
        'created_at',
        [sequelize.literal('(SELECT COUNT(*) FROM purchase WHERE post.id = purchase.post.id)'), 'purchased_posts']
      ],
      include: [
        {
          model: Purchase,
          include: {
            model: User
          }
        },
        {
          include: {
            model: User
          }
        }
      ]
    })
    .then(dbPurchaseData => {
        
        const purchase_data = dbPurchaseData.map(purchase => 
          purchase.get({ plain: true })
        );
  
        console.log(purchase_data);
  
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
    res.render('login');
});
  
module.exports = router;