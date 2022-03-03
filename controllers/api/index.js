const router = require('express').Router();
const purchaseRoutes = require('./purchase-routes');
const soldRoutes = require('./sold-routes');
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');


router.use('/users', userRoutes);
router.use('/purchases', purchaseRoutes);
router.use('/sold', soldRoutes);
router.use('/posts', postRoutes);


module.exports = router;