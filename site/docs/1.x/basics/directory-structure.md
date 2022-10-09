---
title: Directory Structure
---

# Directory Structure

Default Northle application structure consists of a few main directories. It is a good idea to explore them!

## Directories

### `📁 /client`

This directory is present if you're using a frontend framework template. It contains uncompiled assets like JavaScript files or Vue.js components.

### `📁 /dist`

Your application code is compiled into this directory. To build your app for production, run `npm run build` command.

### `📁 /database`

[Database migrations](/docs/1.x/database/schema) are created in this directory by default.

### `📁 /lang`

This directory does not exist by default, but you can create it and host your app [translation](/docs/1.x/advanced/localization) files inside it.

### `📁 /public`

Files inside `public` directory can then be accessed in your code from the base URL `/`. This is the place where you should put client-side things like CSS styles, JavaScript files and other assets that should be publicly accessible.

### `📁 /src`

The `src` directory contains your main application code. Feel free to modify and adjust it to your needs.

### `📁 /views`

The` views` directory contains app views rendered by your application. View files have the `.html` extension.

## Files

### `📄 .env`

The `.env` file contains app environment-specific [configuration](/docs/1.x/basics/configuration#environment-settings). Note that you should ignore this file in version control systems because it stores information like your database credentials.

### `📄 .env.example`

This is an example version of `.env` file that can be stored in version control system repositories.

### `📄 .eslintrc.json`

The `.eslintrc.json` file contains configuration for [ESLint](https://eslint.org).

### `📄 .gitignore`

The `.gitignore` file is used by Git and explicitly specifies files that Git [should not track](https://git-scm.com/docs/gitignore).

### `📄 .prettierignore`

The `.prettierignore` file contains a list of files that should not be formatted by [Prettier](https://prettier.io).

### `📄 .prettierrc.json`

The `.prettierrc.json` file is a [Prettier formatter](https://prettier.io) configuration file.

### `📄 package.json`

The `package.json` file stores installed packages list and your app package information.

This file comes with several predefined scripts you can use:

```json
"scripts": {
  "build": "tsc",
  "db:migrate": "northle db:migrate",
  "format": "prettier \"**/*.ts\" --ignore-path ./.prettierignore --write",
  "key:generate": "northle key:generate",
  "lint": "eslint .",
  "postinstall": "prisma generate",
  "start": "northle start:dev",
  "start:dev": "northle start:dev",
  "start:prod": "northle start:prod",
  "test": "vitest",
  "test:cov": "vitest run --coverage"
},
```

### `📄 tsconfig.json`

This file is responsible for TypeScript [configuration](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

### `📄 vitest.config.ts`

This file contans configuration for [Vitest](https://vitest.dev) test runner.
