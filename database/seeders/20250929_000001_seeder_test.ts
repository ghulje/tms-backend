import type {Knex} from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("migration_tests").insert([
        {name: "Name 1", created_at: new Date(), updated_at: new Date()},
        {name: "Name 2", created_at: new Date(), updated_at: new Date()},
        {name: "Name 3", created_at: new Date(), updated_at: new Date()}
    ]);
}