---
title: Getting Started
---

# Getting Started

In this section you will learn how to create a new Northle app project using a single `NPM` command.

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

::: details Using pnpm or Yarn
```shell
$ pnpm create @northle <app-name>
$ yarn create @northle <app-name>
```
:::

The installator will ask you few things at the beginning. You may choose to add a frontend framework like [React](https://reactjs.org), [Vue](https://vuejs.org) or [Svelte](https://svelte.dev) to your app automatically.

When your project is ready you can lauch your app using the following commands:

```shell
$ cd <app-name>
$ npm run start
```

::: details Using pnpm or Yarn
```shell
$ cd <app-name>

$ pnpm run start
$ yarn start
```
:::

::: tip INFO
If you're using Northle with a frontend framework template, you can run `npm run start:vite` instead for automatic asset compilation.

::: details Using pnpm or Yarn
```shell
$ pnpm run start:vite
$ yarn start:vite
```
:::

::: warning
The local HTTP server may slow down when you have bad internet speed.
:::

## Opening browser

If you don't want to open your browser on server start, you can change this in `package.json` scripts. Just remove the `--open` flag:

::: code package.json
```json
"scripts": {
  "start": "app start:dev --open",// [!code --]
  "start": "app start:dev",// [!code ++]
  "start:dev": "app start:dev --open",// [!code --]
  "start:dev": "app start:dev",// [!code ++]
}
```
:::
