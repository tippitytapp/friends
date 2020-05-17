const Posts = require('../../data/dbConfig.js')

module.exports={
    getPosts,
    getPostsByUserId,
    getPostById,
    getFullPost
}

function getPosts(){
    return Posts('posts as p')
}

function getPostsByUserId(id){
    return Posts('posts as p')
            .where('user_id', id)

}

function getPostById(id){
    return Posts('posts')
            .where('id',id)
}

function getFullPost (id){
           return Posts('posts as p')
                        .where({id})
                        .first()
                        .join('users as u', 'u.id', '=', 'p.user_id')
                        .select('u.first_name as poster_fname', 'u.last_name as poster_lname', 'p.id', 'p.post_title as title', 'p.post_text as text', 'p.img as img')
                        .then(post => {
                            const postwithuser = post
                            return Posts('comments as c')
                            .where('post_id', id)
                            .join('users as u', 'u.id', '=', 'c.user_id')
                            .select('c.comment as comment', 'c.img as img', 'u.first_name as commenter_fname', 'u.last_name as commenter_lname' )
                            .then( possst => {
                                const fullpost = {...postwithuser, possst}
                                return fullpost
                            })
                        })
    // const comments = await 
    // const fullPost = {
    //     post: post,
    //     comments: comments
    // }
    // return fullPost
}