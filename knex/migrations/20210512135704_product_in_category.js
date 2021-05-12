exports.up = function (knex) {
    return knex.schema.createTable('product_in_category', function (table) {
        table.increments('id').primary()
        table.integer('product_id').notNullable();
        table.integer('category_id').notNullable();
        table.foreign('product_id').references('products.id')
        table.foreign('category_id').references('categories.id')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('product_in_category');
};