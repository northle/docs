---
title: Directory Structure
---

# Directory Structure

Default Northle application structure consists of a few main directories. It is a good idea to explore them!

## Directories

### `📁 /client`

This directory is present if you're using a frontend framework template. It contains raw, uncompiled things like JavaScript files or Vue.js components.

### `📁 /dist`

Your application code is compiled and stored within this directory.

### `📁 /database`

In this directory database migrations are created by default. You may also store SQLite database there if you find it convenient.

### `📁 /lang`

This directory does not exist by default, but you can create it and host your app translation files inside it.

### `📁 /public`

Files inside `public` directory can then be accessed in your code from the base URL `/`. This is the place where you should put client-side things like CSS styles, JavaScript files and other assets that should be publicly accessible.

### `📁 /src`

The `src` directory contains your main application code. Feel free to modify and adjust it to your needs.

### `📁 /views`

The` views` directory contains app views rendered by your application. View files have the `.html` extension.

## Files

### `📄 .env`

The `.env` file contains app environment-specific configuration.

### `📄 .env.example`

This is an example version of `.env` file that can be shared with other developers. Note that you should ignore `.env` file in version control systems like Git because it stores your database passwords etc.

### `📄 .eslintrc.json`

This file contains configuration for [ESLint](https://eslint.org).

### `📄 .gitignore`

This file is used by Git and explicitly specifies files that Git [should not track](https://git-scm.com/docs/gitignore).

### `📄 .prettierignore`

This file contains a list of files that should not be formatted by [Prettier](https://prettier.io).

### `📄 .prettierrc.json`

This is a [Prettier formatter](https://prettier.io) configuration file.

### `📄 package.json`

This file stores installed packages list and your app package information.

### `📄 tsconfig.json`

This file is responsible for TypeScript [configuration](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

### `📄 vitest.config.ts`

This file contans configuration for [Vitest](https://vitest.dev) test runner.
