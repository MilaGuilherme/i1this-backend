
exports.up = function (knex) {
    return knex.schema.createTable('users', function (table) {
        table.increments('id').primary()
        table.string('name').notNullable();
        table.string('password').notNullable();
        table.string('email').notNullable();
        table.integer('type_id').defaultTo(1);
        table.timestamp('created_at');
        table.timestamp('updated_at');
        table.boolean('active');
        table.unique('email');
        table.foreign('type_id').references('user_types.id')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('users');
};