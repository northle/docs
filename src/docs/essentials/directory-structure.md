---
title: Directory Structure
---

# Directory Structure

The default Northle application structure consists of several directories and files. In this section you can learn about their purposes.

## Directories

| Directory       | Contains                                                                                                 | Exists by default?                                |
| --------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| `/client`       | Uncompiled frontendassets like JavaScript files or Vue.js components                                     | **no** (**yes** if you're using starter template) |
| `/dist`         | Compiled application code                                                                                | **no** (it's created once you compile the app)    |
| `/database`     | [Database](/docs/database/schema) schema and migrations                                                  | **yes**                                           |
| `/lang`         | [Translation](/docs/advanced/localization) files                                                         | **yes**                                           |
| `/node_modules` | Installed `NPM` modules                                                                                  | **yes**                                           |
| `/public`       | Client-side files like CSS styles, images and other assets that should be publicly accessible            | **yes**                                           |
| `/src`          | Main application TypeScript source code                                                                  | **yes**                                           |
| `/views`        | Views rendered by your application                                                                       | **yes**                                           |

## Files

| File                | Contains                                                                                                                                                                                         |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `.env`              | Environment [configuration](/docs/essentials/configuration#environment-settings). Note that you should ignore this file in version control systems because it stores sensitive data.                 |
| `.env.example`      | Example version of `.env` file that can be stored in version control system repositories                                                                                                         |
| `.eslintrc.json`    | Configuration for [ESLint](https://eslint.org)                                                                                                                                                   |
| `.gitignore`        | Files list that Git [should not track](https://git-scm.com/docs/gitignore)                                                                                                                       |
| `.prettierignore`   | List of files that should not be formatted by [Prettier](https://prettier.io)                                                                                                                    |
| `.prettierrc.json`  | [Prettier formatter](https://prettier.io) configuration                                                                                                                                          |
| `package.json`      | Installed packages list and your app package information                                                                                                                                         |
| `package-lock.json` | Dependency lock data                                                                                                                                                                             |
| `tsconfig.json`     | TypeScript [configuration](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)                                                                                                      |
| `vitest.config.ts`  | [Vitest](https://vitest.dev) test runner configuration                                                                                                                                           |
