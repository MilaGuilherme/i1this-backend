exports.seed = function(knex) {
  return knex('categories').del()
    .then(function () {
      return knex('categories').insert([
        {
          id:1,
          name: "All"
        },
      ]);
    });
};