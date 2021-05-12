
exports.up = function (knex) {
    return knex.schema.createTable('user_watches_category', function (table) {
        table.increments('id').primary();
        table.integer('user_id').notNullable();
        table.integer('category_id').notNullable();
        table.timestamp('watched_at');
        table.foreign('user_id').references('users.id');
        table.foreign('category_id').references('categories.id');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('user_watches_category');
};