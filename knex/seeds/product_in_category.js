exports.seed = function (knex) {
  return knex('product_in_category').del()
    .then(function () {
      return knex('product_in_category').insert([
        {
          id: 1,
          product_id: 1,
          category_id: 1
        }])
    })
};
