import Knex from 'knex';


// Create table or change field
export async function up(knex: Knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name'). notNullable();
        table.string('avatar'). notNullable();
        table.string('whatsapp'). notNullable();
        table.string('bio'). notNullable();
    })
}

// undo an action
export async function down(knex: Knex) {
    return knex.schema.dropTable('users');
}