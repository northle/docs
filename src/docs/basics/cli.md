---
title: CLI
---

# CLI

Northle comes with an additional CLI tool that helps you to create new projects and generate files like modules and controllers.

## Get started

To get started, install the CLI tool globally:

::: code-group
```shell [npm]
$ npm install -g @northle/cli
```

```shell [pnpm]
$ pnpm install -g @northle/cli
```

```shell [yarn]
$ yarn global add @northle/cli
```
:::

## Generating files

To generate new file, run the `make` command followed by type and name of the file:

```shell
# Create `src/posts/post.controller.ts` file
$ northle make controller post
```

Available file types are:

| Type         | Description                    |
| ------------ | ------------------------------ |
| `channel`    | Create new controller          |
| `controller` | Create new WebSocket channel   |
| `email`      | Create new email template      |
| `middleware` | Create new HTTP middleware     |
| `module`     | Create new application module  |

## Creating a new project

To create a new project, run the `new` command:

```shell
$ northle new my-app
```
