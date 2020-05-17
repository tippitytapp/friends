const Comments = require('../../data/dbConfig.js')

module.exports={
    getCommentsForPost,
    getCommentsByCommenter
}

function getCommentsForPost(id){
    return Comments('comments as c')
            .where('post_id', id)
            .join('users as u', 'c.user_id', '=', 'u.id')
            .select('c.id', 'c.comment', 'c.img', 'u.first_name', 'u.last_name')
}

function getCommentsByCommenter(id){
    return Comments('comments')
            .where('user_id', id)
            

}