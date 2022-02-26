const router = require('express').Router();
// import models here

// uses /api/purchases

// expects: http://localhost:3001/api/purchases/
router.get('/', (req, res) => {
    // Get the purchase history and sell history for all users
    res.json({ purchases: 'Success'});
});

// expects: http://localhost:3001/api/purchases/2
router.get('/:id', (req, res) => {
    let id = req.params.id;
    // Get the purchase and sell history for the user specified
});

// expects: http://localhost:3001/api/purchases/2
// expects JSON
// ex. { title: "Jordan's", price: 150, description: "These shoes are good" }
// change based on table layout
router.post('/:id', (req, res) => {
    let id = req.params.id;

    // Create a new post for the user specified by id
})

// expects: http://localhost:3001/api/purchases/2/10
// expects similar json to post request
router.put('/:userId/:postId', (req, res) => {
    let userId = req.params.userId;
    let postId = req.params.postId;

    // update post based on user and post id
});

router.delete('/:userId/:postId', (req, res) => {
    let userId = req.params.userId;
    let postId = req.params.postId;

    // delete post based on user and post id

});

module.exports = router;