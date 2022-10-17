---
title: Getting Started | CRUD Tutorial
---

# Getting Started | CRUD Tutorial

In this section we will create a working Create-Read-Update-Delete (CRUD) todo app.

## Project Setup

First, create a brand new project using command line tool:

```shell
$ npm create @northle todo-app
$ cd todo-app
$ npm start
```

## Todo Module

When we have the project structure set up, it is the time for creating `todo` module with a controller.

The directory structure will look like this:

```
/src
  /modules
    /todo
      todo.controller.ts
      todo.module.ts
```

## The Plan

We're going to define serveral routes following REST API rules:

| HTTP Method   | URL             | Controller Method  | Role                       |
| ------------- | --------------- | ------------------ | -------------------------- |
| GET           | `/todos`        | `index`            | Return view with todo list |
| POST          | `/todos`        | `store`            | Create and store new todo  |
| GET           | `/todos/create` | `destroy`          | Render a view with form    |
| DELETE        | `/todos/:id`    | `destroy`          | Delete todo from database  |
| PATCH         | `/todos/:id`    | `update`           | Update todo record         |

## Todo Controller

Let's begin with creating `TodoController`:

```ts
import { Controller, Request, Route, view } from '@northle/core';

@Controller()
export class TodoController {
  constructor(private request: Request) {}
}
```

We have to register this controller in `src/todos/todo.module.ts` file:

```ts{2,6}
import { Module } from '@northle/core';
import { TodoController } from './todo.controller';

@Module({
  controllers: [
    TodoController,
  ],
  channels: [],
})
export class TodoModule {
  constructor() {}
}
```

Then add `TodoModule` in `src/main.ts` file:

```ts{2,7}
// ...
import { TodoModule } from './todos/todo.module';

const server = await createServer({
  // ...
  modules: [
    TodoModule,
  ],
});
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