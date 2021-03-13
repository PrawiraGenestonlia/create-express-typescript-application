<img alt='express typescript' src='https://github.com/PrawiraGenestonlia/create-express-typescript-application/raw/master/ExpressTS.png' border='0'>

create-[express](https://www.npmjs.com/package/express)-[typescript](https://www.npmjs.com/package/typescript)-application.

<a href="https://www.npmjs.com/package/create-express-typescript-application" target="_blank"><img src="https://img.shields.io/npm/v/create-express-typescript-application.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/package/create-express-typescript-application" target="_blank"><img src="https://img.shields.io/npm/l/create-express-typescript-application.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/package/create-express-typescript-application" target="_blank"><img src="https://img.shields.io/npm/dm/create-express-typescript-application.svg" alt="NPM Downloads" /></a>
[![Wallaby.js](https://img.shields.io/badge/wallaby.js-powered-blue.svg?style=for-the-badge&logo=github)](https://wallabyjs.com/oss/)
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

```sh
$ Just use 'npx'
  Or
$ npm install -g create-express-typescript-application
$ create-express-typescript-application {project-name-without-spaces}
# example (plain lightweight) $ create-express-typescript-application {project-name-without-spaces} -t plain
# example (typeorm lightweight) $ create-express-typescript-application {project-name-without-spaces} -t typeorm
# example (prisma fullweight) $ create-express-typescript-application {project-name-without-spaces} -t prisma
```

## Quick Start

The quickest way to get started is use npx and pass in the name of the project you want to create.
It is invalid to exclude project name.

Create the app:

```bash
$ npx create-express-typescript-application {project-name-without-spaces}
```

Start your express-app in development mode at `http://localhost:8080/`
```bash
$ cd "project name" && npm run dev
```
If swagger is included, you can view the swagger file at `http://localhost:8080/docs`

Or build your application and serve it.
```bash
$ cd "project name" && npm run build && npm start
```

## List of options.

Options:
  -V, --version      output the version number
  -d, --debug        output extra debugging
  -t, --template <type>  specify only prisma or plain or typeorm
  -p, --prisma       define type prisma
  -y, --typeorm       define type typeorm
  -h, --help         display help for command

Prisma options integrates prisma ORM into the lightweight express typescript app.

## Available commands for the server.

- Run the server in development mode: `npm run dev`.
- Build the project for production: `npm run build`.
- Run the production build: `npm start`.

## License

[MIT](LICENSE)
