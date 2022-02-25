const router = require('express').Router();
const purchaseRoutes = require('./purchase-routes');

router.use('/purchases', purchaseRoutes);