
exports.up = function (knex) {
    return knex.schema.createTable('proposals', function (table) {
        table.increments('id').primary()
        table.integer('product_id').notNullable();
        table.integer('created_by').notNullable();
        table.timestamp('created_at');
        table.timestamp('updated_at');
        table.decimal('price').notNullable();
        table.text('links');
        table.text('photos').notNullable();
        table.integer('minimun_quantity');
        table.boolean('requires_intent');
        table.boolean('active');
        table.foreign('product_id').references('products.id')
        table.foreign('created_by').references('users.id')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('proposals');
};