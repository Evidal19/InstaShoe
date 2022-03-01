const router = require('express').Router();
const apiRoutes = require('./api/index');
const imagesRoutes = require('./api/image-routes')
const homeRoutes = require('./home-routes');

router.use(homeRoutes);
router.use('/api', apiRoutes);
router.use('/api', imagesRoutes)

router.use((req, res) => {
    res.send("<h1>Wrong Route!</h1>");
})

module.exports = router;