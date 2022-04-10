const sequelize = require('../config/connection');
const { Sold } = require('../models');

// seed sold table
const soldData = [
    {
        sold_amount: 100,
        post_id: 1,
        user_id: 1
    },
    {
        sold_amount: 5,
        post_id: 2,
        user_id: 1
    },
    {
        sold_amount: 30,
        post_id: 3,
        user_id: 2
    },
    {
        sold_amount: 200,
        post_id: 4,
        user_id: 3
    },

];

const seedSolds = () => Sold.bulkCreate(soldData);

module.exports = seedSolds;