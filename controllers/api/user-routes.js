const router = require('express').Router();

// expects /api/users/

// expects /api/users/
router.get('/', (req, res) => {
    // gets a list of all users
});

// expects /api/users/2
router.get('/:id', (req, res) => {
    let id = req.params.id;
    
    // gets data for a single user
    // probably just their username/email and hashed password
    // will probably connect to posts table or purchase history table(s)
    // and display the posts the user has.
    // We could also keep it separate and have this request only get user information for authentication

});

// expects /api/users/
router.post('/', (req, res) => {
    // create a new user, will take a username/email and hashed password
});

// expects /api/users/2
router.put('/:id', (req, res) => {
    let id = req.params.id;
    // update user info like changning username/email or password 
});

// expects /api/users/2
router.delete('/:id', (req, res) => {
    let id = req.params.id;
    // delete user based on id
})