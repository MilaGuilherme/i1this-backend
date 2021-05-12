exports.seed = function (knex) {
  return knex('user_watches_category').del()
    .then(function () {
      return knex('user_watches_category').insert([
        {
          id: 1,
          user_id: 1,
          category_id: 1,
          watched_at: new Date()
        }])
    })
};