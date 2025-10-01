import type {Knex} from "knex";
import TestModel from "@/app/models/TestModel";

export function up(knex: Knex): void {
    return knex.schema.createTable(TestModel.table, (table: Knex.TableBuilder) => {
        table.bigIncrements("id");
        table.string("name");
        table.timestamps(true, true);
    });
}

export function down(knex: Knex): void {
    return knex.schema.dropTable(TestModel.table);
}