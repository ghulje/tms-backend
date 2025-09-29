import type {Knex} from "knex";

export function up(knex: Knex): void {
    return knex.schema.createTable("migration_tests", (table: Knex.CreateTableBuilder) => {
        table.bigIncrements("id");
        table.string("name");
        table.timestamps();
    });
}

export function down(knex: Knex): void {
    return knex.schema.dropTable("migration_tests");
}