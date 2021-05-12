
exports.up = function (knex) {
    return knex.schema.createTable('user_oned_product', function (table) {
        table.increments('id').primary();
        table.integer('product_id').notNullable();
        table.integer('user_id').notNullable();
        table.boolean('notification').defaultTo(false);
        table.timestamp('oned_at');
        table.foreign('product_id').references('products.id');
        table.foreign('user_id').references('users.id');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('user_oned_product');
};