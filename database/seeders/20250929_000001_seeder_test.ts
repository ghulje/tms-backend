import type {Knex} from "knex";
import TestModel, {TestColumns} from "@/app/models/TestModel";

export async function seed(knex: Knex): Promise<void> {
    for (const name of ["Name 1", "Name 2", "Name 3"]) {
        await TestModel.query<TestColumns>(knex).insert({
            name: name
        });
    }
}