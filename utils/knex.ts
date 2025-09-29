import {spawn} from "child_process";

const child = spawn("knex", process.argv.slice(2), {
    stdio: "inherit",
    env: process.env
});

child.on("close", (code) => {
    process.exit(code ?? 0);
});