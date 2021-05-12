exports.seed = function (knex) {
  return knex('proposals').del()
    .then(function () {
      return knex('proposals').insert([
        {
          id: 1,
          product_id: 1,
          created_by: 2,
          created_at: new Date(),
          updated_at: new Date(),
          price: 5.55,
          links: `"https://#","https://#]`,
          photos: `"https://via.placeholder.com/150","https://via.placeholder.com/250"]`,
          minimun_quantity: 0,
          requires_intent: false,
          active: true
        },
      ])
  })
};