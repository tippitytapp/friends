
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, first_name: 'Marc', last_name: 'Tapp', birthday: "Dec 31, 1988"},
        {id: 2, first_name: 'Laci', last_name: 'Circe', birhday: 'Feb 3, 1988'},
        {id: 3, first_name: 'Nikki', last_name: 'Diaz', birthday: 'Sep 29, 1986'}
      ]);
    });
};
