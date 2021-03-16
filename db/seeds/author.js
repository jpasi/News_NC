
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('author').del()
    .then(function () {
      // Inserts seed entries
      return knex('author').insert([
        {article_id: 1, name: 'Jose Julian', picture: 'link of photo'},
        {article_id: 2, name: 'Julian', picture: 'links of photos'},
      ]);
    });
};
