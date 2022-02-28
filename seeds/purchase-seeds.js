const sequelize = require('../config/connection');
const { Purchase } = require('../models');

// seed Purchase table
const purchaseData = [
    {
        purchase_amount: 100,
        post_id: 1,
        user_id: 1
    },
    {
        purchase_amount: 5,
        post_id: 2,
        user_id: 1
    },
    {
        purchase_amount: 30,
        post_id: 3,
        user_id: 2
    },
    {
        purchase_amount: 200,
        post_id: 4,
        user_id: 3
    },

];

const seedPurchases = () => Purchase.bulkCreate(purchaseData);

module.exports = seedPurchases;
