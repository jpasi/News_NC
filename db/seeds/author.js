
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('author').del()
    .then(function () {
      // Inserts seed entries
      return knex('author').insert([
        {article_id: 1, author: {name: 'Jose Julian', picture: 'link of photo'}},
        {article_id: 2, author: {name: 'Julian', picture: 'links of photos'}},
      ]);
    });
};
