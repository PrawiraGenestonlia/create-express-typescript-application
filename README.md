<img alt='express typescript' src='https://github.com/PrawiraGenestonlia/create-express-typescript-application/raw/master/ExpressTS.png' border='0'>

create-[express](https://www.npmjs.com/package/express)-[typescript](https://www.npmjs.com/package/typescript)-application.

<a href="https://www.npmjs.com/package/create-express-typescript-application" target="_blank"><img src="https://img.shields.io/npm/v/create-express-typescript-application.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/package/create-express-typescript-application" target="_blank"><img src="https://img.shields.io/npm/l/create-express-typescript-application.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/package/create-express-typescript-application" target="_blank"><img src="https://img.shields.io/npm/dm/create-express-typescript-application.svg" alt="NPM Downloads" /></a>

## Why _create-express-typescript-application_?

_create-express-typescript-application_ creates a new lightweight express application which is fully customizable for your use case. 
With the support of Typescript, it allows a robust NodeJS express app to serve as an RESTful backend server.

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

Or build your application and serve it.
```bash
$ cd "project name" && npm run build && npm start
```

## Available commands for the server.

- Run the server in development mode: `npm run dev`.
- Build the project for production: `npm run build`.
- Run the production build: `npm start`.

## License

[MIT](LICENSE)
