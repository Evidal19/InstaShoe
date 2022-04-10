const router = require("express").Router();
const { Comment } = require("../../models");

router.post('/', (req, res) => {

    Comment.create({
        comment_text: req.body.comment_text,
        user_id: req.body.user_id,
        post_id: req.body.post_id,
        date: req.body.date
    }).then(comment => {
        res.json({message: 'success', comment});
    }).catch(err => res.json(err));
});

module.exports = router;