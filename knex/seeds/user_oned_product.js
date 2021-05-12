exports.seed = function (knex) {
  return knex('user_oned_product').del()
    .then(function () {
      return knex('user_oned_product').insert([
        {
          id: 1,
          product_id: 1,
          user_id: 3,
          notification: true,
          oned_at: new Date()
        }])
    })
};