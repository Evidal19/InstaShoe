const sequelize = require('../config/connection');
const { Comment } = require('../models');

// seed comment table
const commentdata = [
    {
        comment_text: 'Hmm. Only $5 you say. I could use a pair of flip flops.',
        user_id: 3,
        post_id: 2
    },
    {
        comment_text: 'omg those shoes look so cute lol',
        user_id: 2,
        post_id: 3
    },
    {
        comment_text: 'BROOOO! Air Jordans. You making me hussle with that starting price',
        user_id: 4,
        post_id: 4
    },
    {
        comment_text: 'U gotta tell us ur price my man!',
        user_id: 4,
        post_id: 1
    },
    {
        comment_text: 'Wow! Those uggs look so fabulous!',
        user_id: 5,
        post_id: 3
    },
    {
        comment_text: 'Those are definately a professional looking pair of shoes. Your website looks elegant as well. Good luck with your business.',
        user_id: 10,
        post_id: 5
    },
    {
        comment_text: 'Bro only $5? For realz? What a steal',
        user_id: 9,
        post_id: 2
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;