---
title: 'CRUD Tutorial: Getting Started'
---

# CRUD Tutorial: Getting Started

In this section we will create a working Create-Read-Update-Delete (CRUD) todo app.

## Project setup

First, create a brand new project using command line tool:

::: code-group
```shell [npm]
$ npm create @northle todo-app

$ cd todo-app
$ npm start
```

```shell [pnpm]
$ pnpm create @northle todo-app

$ cd todo-app
$ pnpm start
```

```shell [yarn]
$ yarn create @northle todo-app

$ cd todo-app
$ yarn start
```
:::

## Todo module

When we have the project structure set up, it is the time for creating `todo` module with a controller.

The directory structure will look like this:

```
/src
|  /todos
|  |  /views
|  |  |  create.html
|  |  |  index.html
|  |  todo.controller.ts
|  |  todo.module.ts
|  main.ts
```

## The plan

We're going to define serveral routes following the REST API naming convention:

| HTTP Method   | URL                 | Controller Method  | Role                           |
| ------------- | ------------------- | ------------------ | ------------------------------ |
| GET           | `/todos`            | `index`            | Return view with todo list     |
| GET           | `/todos/create`     | `create`           | Render a view with todo form   |
| POST          | `/todos`            | `store`            | Create and store new todo      |
| GET           | `/todos/:id/edit`   | `edit`             | Render a view with edit form   |
| GET           | `/todos/:id/remove` | `remove`           | Render a view with delete form |
| PATCH         | `/todos/:id`        | `update`           | Update todo record             |
| DELETE        | `/todos/:id`        | `destroy`          | Delete todo from database      |

## Todo controller

Let's begin with creating `TodoModule` along with `TodoController`:

```shell
$ north make module todos
$ north make controller todo
```

::: code src/todos/todo.controller.ts
```ts
import { Controller, Request, Route, view } from '@northle/core';

@Controller()
export class TodoController {
  constructor(private request: Request) {}
}
```
:::

We have to register this controller in `src/todos/todo.module.ts` file:

::: code src/todos/todo.module.ts
```ts
import { Module } from '@northle/core';
import { TodoController } from './todo.controller';// [!code ++]

@Module({
  controllers: [
    TodoController,// [!code ++]
  ],
  channels: [],
})
export class TodoModule {
  constructor() {}
}
```
:::

Then we should import `TodoModule` into `src/main.ts` file:

::: code src/main.ts
```ts
// ...
import { TodoModule } from './todos/todo.module';// [!code ++]

const server = await createServer({
  // ...
  modules: [
    TodoModule,// [!code ++]
  ],
});
```
:::

## Setting up database

Then we could prepare database scheme with migrations:

::: code database/schema.prisma
```prisma
datasource db {
  url      = env("DATABASE_URL")
  provider = "mysql"
}

generator client {
  provider = "prisma-client-js"
}

model Todo {// [!code ++]
  id        Int      @id @default(autoincrement())// [!code ++]
  title     String// [!code ++]
  content   String   @unique// [!code ++]
  createdAt DateTime @default(now())// [!code ++]
  updatedAt DateTime @updatedAt// [!code ++]
}// [!code ++]
```
:::

After that, run command:

::: code-group
```shell [npm]
$ npm run db:migrate
```

```shell [pnpm]
$ pnpm run db:migrate
```

```shell [yarn]
$ yarn db:migrate
```
:::
