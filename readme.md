# NodeJS TypeScript Boilerplate

An opinionated TypeScript boilerplate for NodeJS projects

Features

- ⌨️ Type safety using TypeScript in strict mode
- 👀 Lint your code with TSLint & Stylelint
- 🌈 Prettier for consistent code style
- 🔨 Jest for tests
- ☝️ Husky + lint-staged for code quality assurance
- ⚙ Editorconfig file for consistent indents

## Getting started

Before you can start developing your awesome application you need to install the project's dependencies. Make sure you have Node and NPM installed and run:

```sh
$ npm install
```

### ⌨️ Development

To start your node application in development mode (auto restart on code change) run:

```sh
$ npm run dev
```

### 🖥 Production

To build your application to `./dist` run:

```sh
$ npm run build
```

And to run it:

```sh
$ npm run start
```

### 🧐 Linters

The boilerplate provides a couple of linters to help you keep an eye on code consistency and type safety. There are two linters: one for code style and one for type safety. You can use each of them separately using the following commands:

```sh
$ npm run lint:ts
$ npm run lint:types
```

TIP: To get the most out of your linters install the corresponding (TSLint) plugin for your editor or IDE

**Prettier**

Prettier helps you to enforce consistent (opinionated) code style. If possible, you can tell your editor to format you code when you save a file. If you are not able to do this, you can run prettier manually using:

```sh
$ npm run prettier
```

### 🤖 Tests

You can write your tests using Jest. You can run all test with the following command

```sh
$ npm run test
```

If you want to follow test driven development you can use:

```sh
$ npm run test:dev
```
