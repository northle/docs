---
title: Getting Started
---

# Getting Started

## Requirements

To use Norther, your environment has to meet version requirements:

| Node.js       | NPM          |
| ------------- | ------------ |
| 18.3.0+       | 7+           |

## Creating Project

To create new Norther project you can use the NPM command:

```shell
$ npm init @norther <project-name>
```

::: details Using PNPM or Yarn
```shell
$ pnpm create @norther <project-name>
$ yarn create @norther <project-name>
```
:::

When your project is ready you can lauch your app using command:

```shell
$ npm run start
```

::: details Using PNPM or Yarn
```shell
$ pnpm run start
$ yarn start
```
:::

::: tip
If you're using Norther with a frontend framework template, you can run `npm run start:vite` instead for automatic asset compilation.

::: details Using PNPM or Yarn
```shell
$ pnpm run start:vite
$ yarn start:vite
```
:::

## Basic Configuration

If you don't want to open your browser automatically, you can change it in `src/main.ts` file:

```ts{4}
const server = createServer({
  config: {
    dev: {
      openBrowser: false,
    },
  },
});
```
