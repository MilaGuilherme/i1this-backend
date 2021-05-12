exports.seed = function (knex) {
  return knex('category_parents_category').del()
    .then(function () {
      return knex('category_parents_category').insert([
        {
          id: 1,
          parent_id: 1,
          child_id: 2
        }])
    })
};