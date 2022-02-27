const sequelize = require('../config/connection');
const { Post } = require('../models');

// seed post table
const postdata = [
    {
        post_title: "Nike Tennis Shoes",
        post_description: 'Here is an old pair of Nike tennis shoes. They are are still good. They are a size 11.5.',
        user_id: 1
    },
    {
        post_title: "Adidas Flip Flops",
        post_description: 'WASSUUUUP! Imma give these old pair of Adidas flip flops fo $5. DM me ur address. LETS GOOOOOOOOOOO!',
        user_id: 4
    },
    {
        post_title: "Nice Uggs",
        post_description: 'Hey gals! Want to look CUTE for the upcoming fall season? Here are a nice pair of uggs for $30.',
        user_id: 7
    },
    {
        post_title: "Air Jordans",
        post_description: 'I got these Air Jordans as a prize for winning a game show. The bid will start at $200.',
        user_id: 1
    },
    {
        post_title: "Valencia Wholecut Dress Shoes",
        post_description: 'Get these Valencia Wholecut dress shoes and walk in your next business meeting with style. Go to my website for more infomation: jamesbusinessappearl.com.',
        user_id: 8
    },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
