const express = require('express');
const Posts = require('./posts-model.js')
const router = express.Router();
const {validatePostId} = require("../../api/middlware.js")


// get all posts from all users
router.get('/', (req, res) => {
    Posts.getPosts()
        .then(posts => {
            res.status(200).json({
                data: posts
            })
        })
        .catch(error => {
            res.status(500).json({
                errorMessage: "Error retrieving posts",
                error
            })
        })
})

router.get('/:id', validatePostId, (req, res) => {
const id = req.params.id
    Posts.getFullPost(id)
        .then(fullpost => {
            res.status(200).json(fullpost)
        })
        .catch(error => {
            res.status(500).json({
                errorMessage: "Failed to retrieve post",
                error
            })
        })
}) 





module.exports=router;