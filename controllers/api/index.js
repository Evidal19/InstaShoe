const router = require('express').Router();
const purchaseRoutes = require('./purchase-routes');
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const imageRoutes = require('./image-routes');

router.use('/users', userRoutes);
router.use('/purchases', purchaseRoutes);
router.use('/posts', postRoutes);
router.use('/images', imageRoutes);


module.exports = router;