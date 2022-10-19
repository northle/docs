---
title: Getting Started
---

# Getting Started

In this section you will learn how to create new Northle app project using NPM installer.

## Requirements

To run Northle, your environment has to meet below requirements:

| Node.js | NPM |
| ------- | --- |
| 18.3.0+ | 7+  |

## Creating a project

To create new Northle project you can use the NPM command:

```shell
$ npm create @northle <app-name>
```

::: details Using PNPM or Yarn
```shell
$ pnpm create @northle <app-name>
$ yarn create @northle <app-name>
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

::: tip INFO
If you're using Northle with a frontend framework template, you can run `npm run start:vite` instead for automatic asset compilation.

::: details Using PNPM or Yarn
```shell
$ pnpm run start:vite
$ yarn start:vite
```
:::

## Basic configuration

If you don't want to open your browser automatically, you can change it in `src/main.ts` file:

::: code src/main.ts
```ts{4}
const server = await createServer({
  config: {
    dev: {
      openBrowser: false,
    },
  },
});
```
:::
