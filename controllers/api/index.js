const router = require('express').Router();
const purchaseRoutes = require('./purchase-routes');
const userRoutes = require('./user-routes');

router.use('/users', userRoutes);
router.use('/purchases', purchaseRoutes);

module.exports = router;