
exports.up = function (knex) {
    return knex.schema.createTable('user_types', function (table) {
        table.increments('id').primary()
        table.string('name').notNullable();
        table.text('permissions');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('user_types');
};