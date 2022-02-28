const router = require('express').Router();
const { Post, Comment } = require('../../models');

// /api/posts
router.get('/', (req, res) => {
    // gets all posts and their comments
    Post.findAll({
        include: [{
            model: Comment,
        }]
    }).then(posts => {
        res.json({ message: 'success', posts});
    }).catch(err => res.status(500).json(err));
});

router.get('/:post_id', (req, res) => {
    const postId = req.params.post_id;

    Post.findOne({
        where: {
            id: postId
        },
        include: [{
            model: Comment
        }]
    }).then(post => {
        if (!post) {
            res.status(404).json({message: 'No post found with that id'});
            return;
        }
        res.json({ message: 'success', post });
    }).catch(err => res.status(500).json(err));
});

router.post('/', (req, res) => {
    Post.create({
        post_title: req.body.post_title,
        post_description: req.body.post_description,
        user_id: req.body.user_id
    }).then(newUser => {
        if (!newUser) {
            res.status(404).json({message: 'Post needs post_title, post_description, and user_id'});
            return;
        }
        res.json({ message: 'success', newUser});
    }).catch(err => res.status(500).json(err));
});

router.put('/:post_id', (req, res) => {
    const postId = req.params.post_id;

    Post.update({
        post_title: req.body.post_title,
        post_description: req.body.post_description,
        user_id: req.body.user_id
    },
    {
        where: {
            id: postId
        }
    }).then(updatedPost => {
        if (!updatedPost) {
            res.status(404).json({message: 'No post found with that id'});
            return;
        }
        res.json({ message: 'success', updatedPost });
    }).catch(err => res.status(500).json(err));
});

router.delete('/:post_id', (req, res) => {
    const postId = req.params.post_id;

    Post.destroy({
        where: {
            id: postId
        }
    }).then(deletedPost => {
        if(!deletedPost) {
            res.status(404).json({message: 'No post found with that id'});
            return;
         }
        res.json({ message: 'success', deletedPost });
    }).catch(err => res.status(500).json(err));
})
module.exports = router;