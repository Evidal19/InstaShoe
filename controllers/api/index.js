const router = require('express').Router();
const purchaseRoutes = require('./purchase-routes');
const soldRoutes = require('./sold-routes');
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');


router.use('/users', userRoutes);
router.use('/purchases', purchaseRoutes);
router.use('/sold', soldRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);


module.exports = router;