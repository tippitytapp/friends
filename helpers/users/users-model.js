const Users = require('../../data/dbConfig.js')

module.exports={
    getUsers,
    getUserById
}

function getUsers(){
    return Users('users as u')
}

function getUserById(id){
    return Users('users as u')
            .where({id})
}