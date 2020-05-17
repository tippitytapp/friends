const express = require('express');
const Users = require('./users-model.js')
const router = express.Router();
const Comments = require('../comments/comments-model.js')
const Posts = require('../posts/posts-model.js')
const {validateUserId, validatePostId} = require("../../api/middlware.js")

// get all users
router.get('/', (req, res) => {
    Users.getUsers()
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

router.get('/:id', validateUserId, (req, res) => {
    const id = req.params.id
    Users.getUserById(id)        
        .then(user => {
            res.status(200).json({
                data:user
        })
    })
        .catch(error => {
            res.status(500).json({
                errorMessage: "Error retreiving user",
                error
        })
    })

})

router.get('/:id/comments', validateUserId, (req, res) => {
    const id = req.params.id
    Users.getUserById(id)
        .then(user => {
            Comments.getCommentsByCommenter(id)
                .then(comments => {
                    res.status(200).json({
                        data: comments
                    })
                })
        })
})

// get all posts for user
router.get('/:id/posts', validateUserId, (req, res) => {
    Posts.getPostsByUserId(req.params.id)
    .then(posts => {
        res.status(200).json({
            data: posts
        })
    })
})

router.get('/:id/posts/:postid', validateUserId, validatePostId, (req, res) => {
    Posts.getPostById(req.params.postid)
            .then(post => {
                res.status(200).json({
                    data: post
                })
            })
})
    
module.exports=router;