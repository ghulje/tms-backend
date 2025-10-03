<div align="center">

![GitHub top language](https://img.shields.io/github/languages/top/ghulje/tms-backend)
![GitHub all releases](https://img.shields.io/github/downloads/ghulje/tms-backend/total)
![GitHub issues](https://img.shields.io/github/issues/ghulje/tms-backend)
![GitHub](https://img.shields.io/github/license/ghulje/tms-backend)
![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/ghulje/tms-backend?display_name=tag&include_prereleases)

</div>

# Framework for Bun
A javascript framework using Bun runtime.
Designed for backend purposes, using [Knex](https://knexjs.org) for Migrations and Seeders.
[Objection](https://vincit.github.io/objection.js) for Query Builder, Relation, & Validation.

## Tech Stacks
- [Bun](https://bun.com)
- [Knex](https://knexjs.org)
- [Objection](https://vincit.github.io/objection.js)
- [React](https://react.dev) (For home page only)

## Features

### Controllers
Logical processes

Example :

```ts
import {BunRequest} from "bun";
import BaseController from "@/app/controllers/BaseController";

export default class HelloController extends BaseController {
    public async hello(request: BunRequest): Promise<Response> {
        return super.response().setData({
            message: "Hello, world!",
            method: request.method
        }).send();
    }
}
```

### Exception Handler
Handle any incoming errors

Example :

```ts
import {ErrorLike} from "bun";
import Response from "@/utils/Response";
import {defineValue} from "@/utils/utils";

export default class ExceptionHandler {
    public handle(error: ErrorLike): globalThis.Response {
        if (error instanceof ModelNotFoundException) return new Response()
            .setMessage(error.message)
            .setStatus(404)
            .send();

        return new Response()
            .setMessage(defineValue(error.message, "Internal server error."))
            .setStatus(500)
            .send();
    }
}
```

### Models
Database table model

Example :

```ts
import {JSONSchema} from "objection";
import BaseModel, {BaseColumns} from "@/app/models/BaseModel";

export interface TestColumns extends BaseColumns {
    name: string;
}

export default class TestModel extends BaseModel implements TestColumns {
    public static tableName: string = "tests";
    public static idColumn: string = "id";

    declare id: bigint;
    declare name: string;
    declare created_at: Date | string;
    declare updated_at: Date | string;
    declare deleted_at: Date | string | null;

    public static jsonSchema: JSONSchema = {
        type: "object",
        required: [
            "name"
        ],
        properties: {
            name: {
                type: "string",
                minLength: 5
            }
        }
    };
}
```

#### Fetch All
Example :

```ts
import {BunRequest} from "bun";
import BaseController from "@/app/controllers/BaseController";
import TestModel from "@/app/models/TestModel";

export default class TestController extends BaseController {
    public async get(request: BunRequest): Promise<Response> {
        const tests = await TestModel.all();

        return super.response().setData(tests).send();
    }
}
```

#### Find or Fail
Example :

```ts
import {BunRequest} from "bun";
import BaseController from "@/app/controllers/BaseController";
import TestModel from "@/app/models/TestModel";

export default class TestController extends BaseController {
    public async detail(request: BunRequest): Promise<Response> {
        const body = await super.parse(request);

        const test = await TestModel.findOrFail(body.get("id") as number | string);

        return super.response().setData(test).send();
    }
}
```

#### Create
Example :

```ts
import {BunRequest} from "bun";
import BaseController from "@/app/controllers/BaseController";
import TestModel from "@/app/models/TestModel";

export default class TestController extends BaseController {
    public async add(request: BunRequest): Promise<Response> {
        const body = await super.parse(request);

        const tests = await TestModel.create({
            name: body.get("name") as string
        });

        return super.response().setData(tests).send();
    }
}
```

#### Update
Example :

```ts
import {BunRequest} from "bun";
import BaseController from "@/app/controllers/BaseController";
import TestModel from "@/app/models/TestModel";

export default class TestController extends BaseController {
    public async edit(request: BunRequest): Promise<Response> {
        const body = await super.parse(request);

        const tests = await TestModel.find(body.get("id") as number | string)
            .update({
                name: body.get("name") as string
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
import TestModel from "@/app/models/TestModel";

export async function seed(knex: Knex): Promise<void> {
    for (const name of ["Name 1", "Name 2", "Name 3"]) {
        await TestModel.query(knex).insert({
            name: name
        });
    }
}
```

### Public
For public assets

### Resources
- Views

### Bootstrap
Any startup loads

At this time used for :
- Init model connection
- Declare custom exception

Example :

```ts
import knex from "knex";
import {Model} from "objection";
import ModelNotFoundException from "@/app/exceptions/ModelNotFoundException";
import KnexConfig from "@/knexfile";

// @ts-ignore
global.ModelNotFoundException = ModelNotFoundException;

Model.knex(knex(KnexConfig));
```

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
  migrate:status    List migrations status
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
To fresh or drop all table and re-run the migrations, run :

```bash
bun ace migrate:fresh
```

Example :

```bash
✔ Rolled back all migrations
✔ Batch 1 finished
✔ 20250929_000001_tests.ts
```

To migrate the migrations, run :

```bash
bun ace migrate:latest
```

Example :

```bash
✔ Batch 1 finished
✔ 20250929_000001_tests.ts
```

To rollback the migrations, run :

```bash
bun ace migrate:rollback
```

Example :

```bash
✔ Batch 1 finished
✔ 20250929_000001_tests.ts
```

To see migrations status, run :

```bash
bun ace migrate:status
```

Example :

```bash
✔ Completed Migrations :
✔ No migrations were completed.


✔ Pending Migrations :
✔ 20250929_000001_tests.ts
```

#### Seeders
To execute seeder, run :

```bash
bun ace db:seed
```

Example :

```bash
✔ Seeding finished
✔ 20250929_000001_seeder_test.ts
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
- [ ] Soft Deletes
- [ ] Middleware
  
## Backlog
- [ ] Job Dispatch / Background Tasks
- [ ] Unit Tests
- [ ] Mail Service
- [ ] Import Excel
- [ ] Export Excel
- [ ] Export PDF

## Contributors
- [Hafiizh Ghulam](mailto:ghulam@jejeharapan.com)