<div align="center">

![GitHub top language](https://img.shields.io/github/languages/top/ghulje/tms-backend)
![GitHub all releases](https://img.shields.io/github/downloads/ghulje/tms-backend/total)
![GitHub issues](https://img.shields.io/github/issues/ghulje/tms-backend)
![GitHub](https://img.shields.io/github/license/ghulje/tms-backend)
![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/ghulje/tms-backend?display_name=tag&include_prereleases)

</div>

# Framework for Bun
A javascript framework using Bun runtime.
Designed for backend purposes, using [Knex](https://knexjs.org) for Model and Migrations.

## Tech Stacks
- [Bun](https://bun.com)
- [Knex](https://knexjs.org)
- [React](https://react.dev) (For home page only)

## Features

### Controllers
Logical processes

Example :

```ts
import {BunRequest} from "bun";
import BaseController from "@/app/controllers/BaseController";

export default class HelloController extends BaseController {
    public async hello(request: BunRequest): Response {
        return super.response().setData({
            message: "Hello, world!",
            method: request.method
        }).send();
    }
}
```

### Models
Database table model

#### Fetch All
Example :

```ts
import {BunRequest} from "bun";
import BaseController from "@/app/controllers/BaseController";
import TestModel, {TestColumns} from "@/app/models/TestModel";

export default class TestController extends BaseController {
    public async get(request: BunRequest): Response {
        const tests = await TestModel.all<TestColumns>();

        return super.response().setData(tests).send();
    }
}
```

#### Create
Example :

```ts
import {BunRequest} from "bun";
import BaseController from "@/app/controllers/BaseController";
import TestModel, {TestColumns} from "@/app/models/TestModel";

export default class TestController extends BaseController {
    public async add(request: BunRequest): Response {
        const body = await super.parse(request);

        const tests = await TestModel.create<TestColumns>({
            name: body.get("name")
        });

        return super.response().setData(tests).send();
    }
}
```

### Database

#### Migrations
Example :

```ts
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
```

#### Seeders
Example :

```ts
import type {Knex} from "knex";
import TestModel, {TestColumns} from "@/app/models/TestModel";

export async function seed(knex: Knex): Promise<void> {
    for (const name of ["Name 1", "Name 2", "Name 3"]) {
        await TestModel.query<TestColumns>(knex).insert({
            name: name
        });
    }
}
```

### Public
For public assets

### Resources
- Views

### Ace
Any commands for development

```bash
Usage: ace [options] [command]

Ace for your commander
Author: Hafiizh Ghulam <ghulam@jejeharapan.com>

Options:
  -v, --version     Show the current version
  -h, --help        display help for command

Commands:
  db:seed           Run database seeders
  migrate:fresh     Rollback all migrations and re-run migrations
  migrate:latest    Run latest migration
  migrate:rollback  Rollback the latest migrations
  help [command]    display help for command

Examples:
  $ bun ace --help
  $ bun ace --version
  $ bun ace migrate:latest
```

## Usage

### Installation
Install project dependencies.

```bash
bun install
```

### Available Commands
To see list of available commands, run.

```bash
bun ace
bun ace help
bun ace --h
bun ace --help
```

To see help of specific command, run :

```bash
bun ace help migrate:latest
bun ace migrate:latest --h
bun ace migrate:latest --help
```

### Database

#### Migrations
To migrate the migrations, run :

```bash
bun ace migrate:latest
```

To rollback the migrations, run :

```bash
bun ace migrate:rollback
```

#### Seeders
To execute seeder, run :

```bash
bun ace db:seed
```

### Run the Project

#### Run on Development
To run the project, run :

```bash
bun dev
```

#### Run on Production
To run on production mode, run :

```bash
bun start
```

## Upcoming Features
- [ ] Validate Request
- [ ] Soft Deletes
- [ ] Exception Handler
- [ ] Job Dispatch / Background Tasks
- [ ] Middleware
- [ ] Unit Tests
- [ ] Mail Service
- [ ] Import Excel
- [ ] Export Excel
- [ ] Export PDF

## Contributors
- [Hafiizh Ghulam](mailto:ghulam@jejeharapan.com)