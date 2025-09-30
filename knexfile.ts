import type {Knex} from "knex";

const config: Knex.Config = {
    client: "pg",
    connection: {
        host: "127.0.0.1",
        port: 5432,
        user: "postgres",
        password: "jeje",
        database: "bun"
    },
    migrations: {
        extension: "ts",
        directory: "./database/migrations"
    },
    seeds: {
        extension: "ts",
        directory: "./database/seeders"
    }
};

export default config;