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

### Controller
Logical processes

### Database
- Migrations
- Seeders

### Public
For public assets

### Resources
- Views

## Usage

### Installation
Install project dependencies.

```bash
bun install
```

### Database

#### Migrations
To migrate the migrations, run :

```bash
bun run knex migrate:latest
```

To rollback the migrations, run :

```bash
bun run knex migrate:rollback
```

#### Seeders
To execute seeder, run :

```bash
bun run knex seed:run
```

### Run the Project
To run the project, run :

```bash
bun dev
```

### Run on Production
To run on production mode, run :

```bash
bun start
```

## Upcoming Features
- [ ] Model
- [ ] Soft Deletes
- [ ] Mail Service
- [ ] Export PDF

## Contributors
- [Hafiizh Ghulam](mailto:ghulam@jejeharapan.com)