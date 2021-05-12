
exports.up = function (knex) {
    return knex.schema.createTable('products', function (table) {
        table.increments('id').primary()
        table.string('name').notNullable();
        table.integer('created_by').notNullable();
        table.timestamp('created_at');
        table.timestamp('updated_at');
        table.decimal('price').notNullable();
        table.text('description').notNullable();
        table.text('photos').notNullable();
        table.integer('ones').notNullable();
        table.boolean('active');
        table.foreign('created_by').references('users.id')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('products');
};