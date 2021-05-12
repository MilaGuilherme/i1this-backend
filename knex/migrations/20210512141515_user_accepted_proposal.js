
exports.up = function (knex) {
    return knex.schema.createTable('user_accepted_proposal', function (table) {
        table.increments('id').primary();
        table.integer('proposal_id').notNullable();
        table.integer('user_id').notNullable();
        table.boolean('buying_intent').defaultTo(false);
        table.timestamp('accepted_at');
        table.foreign('proposal_id').references('proposals.id');
        table.foreign('user_id').references('users.id');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('user_accepted_proposal');
};