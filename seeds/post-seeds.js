const sequelize = require('../config/connection');
const { Post } = require('../models');

// seed post table
const postdata = [
    {
        post_title: "Nike Tennis Shoes",
        post_description: 'Here is an old pair of Nike tennis shoes. They are are still good. They are a size 11.5.',
        user_id: 1,
        file_src: "323aaafb626fd6f72a350883545c8538"
    },
    {
        post_title: "Adidas Flip Flops",
        post_description: 'WASSUUUUP! Imma give these old pair of Adidas flip flops fo $5. DM me ur address. LETS GOOOOOOOOOOO!',
        user_id: 4,
        file_src: "6044c5fbb738d4aaabd1d5cdaeb0b12b"
    },
    {
        post_title: "Nice Uggs",
        post_description: 'Hey gals! Want to look CUTE for the upcoming fall season? Here are a nice pair of uggs for $30.',
        user_id: 7,
        file_src: "7b2a7615c25af8315505c785d827d9a2"
    },
    {
        post_title: "Air Jordans",
        post_description: 'I got these Air Jordans as a prize for winning a game show. The bid will start at $200.',
        user_id: 1,
        file_src: "7c95b1489556bcaa4415c814fd7e256c"
    },
    {
        post_title: "Valencia Wholecut Dress Shoes",
        post_description: 'Get these Valencia Wholecut dress shoes and walk in your next business meeting with style. Go to my website for more infomation: jamesbusinessappearl.com.',
        user_id: 8,
        file_src: "9c7e6e3e0fb5d8d48fcd095d92adafbd"
    },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
