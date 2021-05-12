
exports.up = function (knex) {
    return knex.schema.createTable('category_parents_category', function (table) {
        table.increments('id').primary();
        table.integer('parent_id').notNullable();
        table.integer('child_id').notNullable();
        table.foreign('parent_id').references('categories.id');
        table.foreign('child_id').references('categories.id');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('category_parents_category');
};