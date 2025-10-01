import type {Knex} from "knex";
import TestModel from "@/app/models/TestModel";

export async function seed(knex: Knex): Promise<void> {
    await knex(TestModel.table).insert([
        {name: "Name 1", created_at: new Date(), updated_at: new Date()},
        {name: "Name 2", created_at: new Date(), updated_at: new Date()},
        {name: "Name 3", created_at: new Date(), updated_at: new Date()}
    ]);
}