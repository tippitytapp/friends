db = require('../data/dbConfig.js')

module.exports={
    validateUserId,
    validatePostId
}

function validateUserId(req, res, next){
    return db('users') 
            .where('id', req.params.id)
            .then(user => {
                if(user[0].id != req.params.id){
                    res.status(404).json({
                        errorMessage: "No user post with that id"
                    })
                } else {
                next()
                }
            })
}

function validatePostId(req, res, next){
    return db('posts')
            .where('id', req.params.postid)
            .then(post => {
                if(post[0].id != req.params.postid){
                res.status(404).json({
                    errorMessage: "No user post with that id"
                })
            } else {
                next()
            }
            })
}