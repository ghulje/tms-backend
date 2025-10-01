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
- [ ] Export PDF

## Contributors
- [Hafiizh Ghulam](mailto:ghulam@jejeharapan.com)