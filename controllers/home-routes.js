const router = require('express').Router();
const { User, Post, Purchase } = require('../models');

// get homepage to render
router.get('/', (req, res) => {
    // res.render('../public/img-upload.html')
    console.log('---- GETTING PURCHASES ----');
    User.findAll({
        attributes: { exclude: ['password'] },
        include: {
            model: Post,
            attributes: ['post_title', 'post_description']
          },
        include: {
          model: Purchase,
          attributes: ['purchase_amount']
        }
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
  console.log("Hello login");
  res.render('login');
});
  
module.exports = router;