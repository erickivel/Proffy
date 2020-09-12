import Knex from 'knex';


// Create table or change field
export async function up(knex: Knex) {
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();
        
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

            table.timestamp('created_at')
                .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
                .notNullable();
    });
}

// undo an action
export async function down(knex: Knex) {
    return knex.schema.dropTable('connections');
}