import {program} from "commander";
import Knex from "knex";
import ora from "ora";
import os from "os";
import path from "path";
import KnexConfig from "@/knexfile";
import {version} from "@/package.json";
import Chalk from "@/utils/Chalk";
import Str from "@/utils/Str";

const commandExec = "ace";
const knex = Knex(KnexConfig);

program
    .name(commandExec)
    .version(version, "-v, --version", "Show the current version")
    .description(`${new Str().setValue(commandExec).toPascalCase()} for your commander${os.EOL}Author: Hafiizh Ghulam <ghulam@jejeharapan.com>`)
    .addHelpText("after", [
        `${os.EOL}Examples:`,
        `$ bun ${commandExec} --version`,
        `$ bun ${commandExec} migrate:latest`
    ].join(`${os.EOL}  `));

program
    .command("migrate:latest")
    .description("Run latest migration")
    .action(async () => {
        const spinner = ora(new Chalk().setValue("Migrating...").info().show()).start();
        try {
            const [batchNo, logs] = await knex.migrate.latest();
            spinner.succeed(`Batch ${batchNo} finished`);

            if (logs.length > 0) logs.forEach((migration: string) => spinner.succeed(migration));
            else spinner.succeed("No migrations were run.");
        } catch (e) {
            spinner.fail(`Migration failed : ${e.message}`);
        } finally {
            await knex.destroy();
            spinner.stop();
        }
    });

program
    .command("migrate:rollback")
    .description("Rollback the latest migrations")
    .action(async () => {
        const spinner = ora(new Chalk().setValue("Rollback...").info().show()).start();
        try {
            const [batchNo, logs] = await knex.migrate.rollback();
            spinner.succeed(`Batch ${batchNo} finished`);

            if (logs.length > 0) logs.forEach((migration: string) => spinner.succeed(migration));
            else spinner.succeed("No migrations were rolled back.");
        } catch (e) {
            spinner.fail(`Rollback failed : ${e.message}`);
        } finally {
            await knex.destroy();
            spinner.stop();
        }
    });

program
    .command("db:seed")
    .description("Run database seeders")
    .action(async () => {
        const spinner = ora(new Chalk().setValue("Seeding...").info().show()).start();
        try {
            const logs = (await knex.seed.run()).flat();

            if (logs.length > 0) logs.forEach((seeder: string) => spinner.succeed(path.basename(seeder)));
            else spinner.succeed("No seeders were run.");
        } catch (e) {
            spinner.fail(`Seeding failed : ${e.message}`);
        } finally {
            await knex.destroy();
            spinner.stop();
        }
    });

program.parse();