const router = require('express').Router();
const { User, Post, Purchase } = require('../models');

// get homepage to render
router.get('/', (req, res) => {
    // res.render('../public/img-upload.html')
    Purchase.findAll({
        attributes: { exclude: ['password'] },
        include: {
            model: Post,
            attributes: ['username']
          },
        include: {
          model: User,
          attributes: ['username']
        }
      })
      .then(dbPurchaseData => {
        
        const purchase_data = dbPurchaseData.map(blog => 
          blog.get({ plain: true })
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