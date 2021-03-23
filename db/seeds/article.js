
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('article').del()
    .then(function () {
      // Inserts seed entries
      return knex('article').insert([
        {
          id: 1,
          category: "Animal",
          title: "Elephant",
          summary: "This is a elephant's birth",
          firstParagraph: "This is a elephant's birth",
          body: "This is a elephant's birth",
          is_logged: 0
        },{
            id: 2,
            category: "Tech",
            title: "Excel as tech",
            summary: "Microsoft wants excel as tech",
            firstParagraph: "Microsoft wants excel as tech",
            body: "Microsoft wants excel as tech",
            is_logged: 0
        },
      ]);
    });
};
