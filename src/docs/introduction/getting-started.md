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

To create new Northle project you can use the `NPM` command:

::: terminal
::: code-group
```shell [npm]
npm create @northle <app-name>
```

```shell [pnpm]
pnpm create @northle <app-name>
```

```shell [yarn]
yarn create @northle <app-name>
```
:::

The installator will ask you few things at the beginning. You may choose to add a frontend framework like [React](https://reactjs.org), [Vue](https://vuejs.org) or [Svelte](https://svelte.dev) to your app automatically.

When your project is ready you can lauch your app using the following commands:

::: terminal
::: code-group
```shell [npm]
cd <app-name>
npm start
```

```shell [pnpm]
cd <app-name>
pnpm start
```

```shell [yarn]
cd <app-name>
yarn start
```
:::

::: warning
The development server may slow down when you have bad internet connection speed.
:::

## CLI

Northle [CLI](/docs/essentials/cli) is a tool that helps you to create and manage your apps. You can use it to create new app, add new features, generate files and more.

::: terminal
::: code-group
```shell [npm]
npm install -g @northle/cli
```

```shell [pnpm]
pnpm install -g @northle/cli
```

```shell [yarn]
yarn global add @northle/cli
```
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
