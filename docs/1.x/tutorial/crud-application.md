---
title: CRUD Application Tutorial
---

# CRUD Application Tutorial

In this section we will create a working Create-Read-Update-Delete (CRUD) todo app.

## Project Setup

First, create a brand new project using command line tool:

```shell
$ npm create @northle todo-app
$ cd todo-app
$ npm start
```

## Creating Todo Module

When we have the project structure set up, it is the time for creating `todo` module with a controller.

The directory structure will look like this:

```
/src
  /modules
    /todo
      todo.controller.ts
      todo.module.ts
```

## Todo Controller

Let's begin with declaring our `TodoController`. The main route will be responsible for rendering a view with todos:

```ts
import { Controller, Request, Response, Route, view } from '@northle/core';

@Controller()
export class TodoController {
  constructor(private request: Request, private response: Response) {}

  @Route.Get('/todos')
  public index() {
    return view('./views/index', {
      todos,
    });
  }
}
```

## Setting Up Database

Then we could prepare database scheme with migrations:

```prisma{10-16}
datasource db {
  url      = env("DATABASE_URL")
  provider = "mysql"
}

generator client {
  provider = "prisma-client-js"
}

model Todo {
  id        Int      @id @default(autoincrement())
  title     String
  content   String   @unique
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

After that, run command:

```shell
$ npm run db:migrate
```

::: details Using PNPM or Yarn
```shell
$ pnpm run db:migrate
$ yarn db:migrate
```
:::

## Obtaining Todos From Database

...
