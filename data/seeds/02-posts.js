
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {id: 1, user_id: 1, post_title: "Marc's First Post", post_text: "Marc's first post testing this out", img:""},
        {id: 2, user_id: 2, post_title: "Laci's First Post", post_text: "Laci's first post testing this out", img:""},
        {id: 3, user_id: 3, post_title: "Nikki's First Post", post_text: "Nikki's first post testing this out", img: ""}
      ]);
    });
};
