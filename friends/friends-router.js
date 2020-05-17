const express = require('express');
const Friends = require('./friends-model.js')
const Cloudinary = require('../api/uploads/images/cloudinary.js')
const router = express.Router();


router.get('/users', (req, res) => {
    Friends.getUsers()
    .then(users => {
    res.status(200).json({
        data:users
    })
})
})


module.exports=router;