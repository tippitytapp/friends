const express = require('express');
const Comments = require('./comments-model.js')
const router = express.Router();

// get all comments for a post
router.get('/:id/comments', (req, res) => {
    const id = req.params.id
    Comments.getCommentsForPost(id)
        .then(users => {
            res.status(200).json({
                data:users
            })
        })
        .catch(error => {
            res.status(500).json({
                errorMessage: "Error retreiving users",
                error
        })
    })
})
module.exports=router;