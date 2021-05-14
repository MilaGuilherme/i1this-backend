
exports.up = function (knex) {
    return knex.schema.createTable('logs', function (table) {
        table.increments('id').primary();
        table.string('modified_table').notNullable();
        table.string('modification').notNullable();
        table.integer('modified_id');
        table.integer('modified_by').notNullable();
        table.timestamp('modified_at').notNullable();
        table.string('old_value');
        table.string('new_value').notNullable();
        table.foreign('modified_by').references('users.id');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('logs');
};