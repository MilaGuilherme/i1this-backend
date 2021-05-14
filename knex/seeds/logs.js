exports.seed = function (knex) {
  return knex('logs').del()
    .then(function () {
      return knex('logs').insert([
        {
          id: 1,
          modified_table: "users",
          modification : "update",
          modified_id: 1,
          modified_by: 1,
          modified_at: new Date(),
          old_value:"Admin",
          new_value:"Administrator",
        }])
    })
};