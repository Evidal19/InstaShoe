const router = require('express').Router();
const { Post, Comment } = require('../../models');
const { uploadFile, getFileStream } = require('../../s3');

// file system
const fs = require('fs');
const util = require('util');
// used for geleting image from local storage after its uploaded to the aws server
const unlinkFile = util.promisify(fs.unlink);

// multer
const multer = require('multer');
const upload = multer({ dest: '../../public/assets/images'});

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

//display image
router.get('/images/:key', (req, res) => {
    const key = req.params.key;
    const readStream = getFileStream(key);

    readStream.pipe(res);
});


router.post('/', upload.single('image'), async (req, res) => {
    const file = req.file;

    if (!file) {
        res.send("No file uploaded");
    // if file was sent, upload it to the AWS server
    } else { 
        const result = await uploadFile(file);
        await unlinkFile(file.path);

        console.log('user-id ' + req.session.user_id);
        Post.create({
            post_title: req.body.post_title,
            post_description: req.body.post_description,
            file_src: result.Key,
            user_id: req.session.user_id
        }).then(newPost => {
            if (!newPost) {
                res.status(404).json({message: 'Post needs post_title, post_description, file_src and user_id'});
                return;
            }
            res.json({ message: 'success', newPost});
        }).catch(err => res.status(500).json(err));
     }
    
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