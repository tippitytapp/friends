const express = require('express');
const multer = require('multer');
const upload = multer({dest: __dirname + '/uploads/images'});
const helmet = require('helmet');
const FriendsRouter = require('../friends/friends-router.js');
const server = express();
server.use(helmet());
server.use(express.json());
server.use('/api/friends', FriendsRouter);



server.get('/', (req, res) => {
    res.status(200).json({
        api: "API connected successfully"
    })
})

module.exports=server;