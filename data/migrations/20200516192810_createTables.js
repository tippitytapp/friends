
exports.up = function(knex) {
  return knex.schema.createTable('users', users => {
      // create Users Table - {id: id, first_name: "", last_name: "", birthday: date}
        users.increments();
        users
            .text('first_name')
            .notNullable()
        users
            .text('last_name')
        users
            .date('birthday')
  })
    .createTable('posts', posts => {
        // create table - {id: id, user_id: users.id, post_title:"", post_text:"", img:""}
        posts.increments();
        posts
            .integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT')
        posts
            .text('post_title')
            .notNullable()
        posts
            .text('post_text')
            .notNullable()
        posts
            .string('img')

  })
  .createTable('comments', comments => {
      // create table - {id: id, comment:"", img:"", post_id:posts.id, user_id:users.id}
        comments.increments();
        comments
            .text('comment')
            .notNullable()
        comments
            .string('img')
        comments
            .integer('post_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('posts')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT')
        comments
            .integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('comments')
  .dropTableIfExists('posts')
  .dropTableIfExists('users')
};
