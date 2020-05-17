const express = require('express');
const multer = require('multer');
const upload = multer({dest: __dirname + '/uploads/images'});
const helmet = require('helmet');
const FriendsRouter = require('../helpers/friends/friends-router.js');
const UsersRouter = require('../helpers/users/users-router.js');
const PostsRouter = require('../helpers/posts/posts-router.js');
const CommentsRouter = require('../helpers/comments/comments-router.js');
const server = express();
server.use(helmet());
server.use(express.json());
server.use('/api/users', UsersRouter);
server.use('/api/friends', FriendsRouter);
server.use('/api/posts', PostsRouter);
server.use('/api/posts', CommentsRouter)



server.get('/', (req, res) => {
    res.status(200).json({
        api: "API connected successfully"
    })
})

module.exports=server;