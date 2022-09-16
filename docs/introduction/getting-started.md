---
title: Getting Started
---

# Getting Started

## Creating Project

To create new Norther project you can use the NPM command:

```shell
$ npm init @norther <project-name>
```

When your project is ready you can lauch your app with `npm run start` command.

```shell
$ npm run start
```

::: tip
If you're using Norther with a frontend framework template, you can run `npm run start:vite` instead for automatic asset compilation.
:::

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
