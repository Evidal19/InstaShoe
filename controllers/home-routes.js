const router = require('express').Router();

// get homepage to render
router.get('/', (req, res) => {
    res.render('../public/img-upload.html')
});

// get login page to render
router.get('/login', (req, res) => {
    res.render('login');
});
  
module.exports = router;