const router = require('express').Router();
const { User, Post } = require('../../models');
// expects /api/users/

// expects /api/users/
router.get('/', (req, res) => {
    // gets a list of all users
    User.findAll().then(users => {
        res.json({ message: 'Success', users });
    });
    
});

// expects /api/users/2
router.get('/:id', (req, res) => {
    let userId = req.params.id;
    
    // gets data for a single user
    // probably just their username/email and hashed password
    // will probably connect to posts table or purchase history table(s)
    // and display the posts the user has.
    // We could also keep it separate and have this request only get user information for authentication

    User.findOne({
        where: {
            id: userId
        },
        include: [
            {
                model: Post,
                attributes: ['post_title', 'post_description']
            }
        ]
    }).then(user => {
        res.json({ message: 'success', user})
    });
});

// expects /api/users/
router.post('/', (req, res) => {
    // create a new user, will take a username/email and hashed password
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }).then(user => {
        res.json({message: 'success', user});
    });
});

// expects /api/users/2
router.put('/:id', (req, res) => {
    let userId = req.params.id;
    // update user info like changning username/email or password 
    User.update({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    },{
        where: {
            id: userId
        }
    }).then(updatedUser => {
        res.json({message: 'success', updatedUser});
    });
});

// expects /api/users/2
router.delete('/:id', (req, res) => {
    let userId = req.params.id;
    // delete user based on id
    User.destroy({
        where: {
            id: userId
        }
    }).then(deletedUser => {
        res.json({ message: 'success', deletedUser});
    });
});

module.exports = router;