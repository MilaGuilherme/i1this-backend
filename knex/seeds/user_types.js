exports.seed = function(knex) {
  return knex('user_types').del()
    .then(function () {
      return knex('user_types').insert([
        {
          id:1,
          name: "Admin",
          permissions:
          `{
            users: ["view","edit","create","delete"],
            products : ["view","edit","create","delete"],
            categories: ["view","edit","create","delete"],
            proposals: ["view","edit","create","delete"],
            user_types: ["view","edit","create","delete"],
            permissions: ["view","edit","create","delete"]
          }`
        },
        {
          id:2,
          name: "Seller",
            permissions: 
          `{
            users: ["view","editSelf"],
            products : ["view"],
            categories: ["view"],
            proposals: ["view","editSelf","create"],
          }`
        },
        {
          id:3,
          name: "Buyer",
            permissions:
          `{
            users: ["view","editSelf"],
            products : ["view","editSelf","create"],
            categories: ["view"],
            proposals: ["view"],
          }`
        },
      ]);
    });
};