
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comments').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        // user_id is the id of the user that posted the comment
        {id: 1, comment: 'Marcs comment on lacis post',img: "", post_id: 2, user_id: 1},
        {id: 2, comment: 'Marcs comment on nikkis post', img: "", post_id: 3, user_id: 1},
        {id: 3, comment: 'lacis comment on marcs post', img: "", post_id: 1, user_id: 2},
        {id: 4, comment: 'lacis comment on nikkis post',img: "", post_id: 3, user_id: 2},
        {id: 5, comment: 'nikkis comment on marcs post', img: "", post_id: 1, user_id: 3},
        {id: 6, comment: 'nikkis comment on lacis post', img: "", post_id: 2, user_id: 3},
      ]);
    });
};
