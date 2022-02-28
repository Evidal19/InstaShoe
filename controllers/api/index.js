const router = require('express').Router();
const purchaseRoutes = require('./purchase-routes');
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');

router.use('/users', userRoutes);
router.use('/purchases', purchaseRoutes);
router.use('/posts', postRoutes)

module.exports = router;