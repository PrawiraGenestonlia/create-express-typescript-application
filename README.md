<img alt='express typescript' src='https://github.com/PrawiraGenestonlia/create-express-typescript-application/raw/master/ExpressTS.png' border='0'>

create-[express](https://www.npmjs.com/package/express)-[typescript](https://www.npmjs.com/package/typescript)-application.

<a href="https://www.npmjs.com/package/create-express-typescript-application" target="_blank"><img src="https://img.shields.io/npm/v/create-express-typescript-application.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/package/create-express-typescript-application" target="_blank"><img src="https://img.shields.io/npm/l/create-express-typescript-application.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/package/create-express-typescript-application" target="_blank"><img src="https://img.shields.io/npm/dm/create-express-typescript-application.svg" alt="NPM Downloads" /></a>
[![Wallaby.js](https://img.shields.io/badge/wallaby.js-powered-blue.svg?style=badge&logo=github)](https://wallabyjs.com/oss/)
## Why _create-express-typescript-application_?

_create-express-typescript-application_ creates a new lightweight express application which is fully customizable for your use case. With the support of TypeScript, it allows a robust NodeJS express app to serve as an RESTful backend server.

There are three modes of _create-express-typescript-application_, mainly:
1. **plain** mode - lightweight express typescript app (--type plain)
2. **typeorm** mode - lightweight express typescript app with typeorm (sqlite included) and swagger (OpenAPI documentation) integrated
3. **prisma** mode - fullweight express typescript app with prisma (relational database ORM) and swagger (OpenAPI documentation) integrated

You are highly recommended to use typeorm template if database is required in this project, otherwise, plain mode.

## Application Details

When you run _create-express-typescript-application_, it sets up a very simple application without junk packages. 
The src/app/sample folder shows how easy it is to create new routes.

## Installation

Pre-requisite: Node, npm and git are locally installed.

Install this package globally in your environment:

```sh
$ npm install -g create-express-typescript-application
```

Or use `npx` to execute this package without installing it globally:

```sh
$ npx create-express-typescript-application
```

## List of Generator Options

```
Options:
  -V, --version              output the version number
  -d, --debug                output extra debugging
  -t, --template <template>  specify only prisma, plain or typeorm
  -p, --prisma               define template prisma
  -y, --typeorm              define template typeorm
  -h, --help                 display help for command
```

The `--prisma` option integrates Prisma ORM into any of the lightweight app templates.

## Quick Start

The quickest way to get started is use npx and pass in the name of the project you want to create.

Create a new Express app with the default `plain` template:

```bash
$ create-express-typescript-application {project-name-without-spaces}
```

Or create a new Express app using a specific template:

```bash
# plain (lightweight, default)
$ create-express-typescript-application {project-name-without-spaces} -t plain

# typeorm (lightweight)
$ create-express-typescript-application {project-name-without-spaces} -t typeorm

# prisma (fullweight)
$ create-express-typescript-application {project-name-without-spaces} -t prisma
```

Navigate into the generated folder to work on your new app:

```bash
$ cd {project-name-without-spaces}
```

## Development Script Commands

- Run the server in development mode: `npm run dev`.
  - _with the default port, your app will be accessible at `http://localhost:8080/`._
  - _if Swagger is included, your API docs will be accessible at `http://localhost:8080/docs`._
- Build the project for production: `npm run build`.
- Run the production build: `npm start`.
  - _note: this requires the app to be built first._

## License

[MIT](LICENSE)
