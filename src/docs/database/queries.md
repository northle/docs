---
title: Queries
---

# Queries

Making queries to the database using integrated [Prisma](https://www.prisma.io/docs/concepts/components/prisma-client/crud) service is very easy.

## Getting started

To start using database client services, inject the `DatabaseClient` service:

::: code src/posts/post.controller.ts
```ts
import { Controller, DatabaseClient } from '@northle/core';// [!code ++]

@Controller()
export class PostController {
  constructor(private db: DatabaseClient) {}// [!code ++]

  // ...
}
```
:::

## Select queries

The most common type of database query is the `select` clause. For example, you can select data from the `users` table using the `user` model object and the `findUnique` method:

::: code src/posts/post.controller.ts
```ts
const user = await this.db.user.findUnique({
  where: {
    id: 1,
  },
});
```
:::

The result will look like this:

```ts
{
  id: 1,
  name: 'David',
  email: 'david@email.com',
  posts: [],
}
```

You can specify what columns you want to receive with passing the `select` conditions:

::: code src/posts/post.controller.ts
```ts
const user = await this.db.user.findUnique({
  where: {
    id: 1,
  },
  select: {// [!code ++]
    name: true,// [!code ++]
    email: true,// [!code ++]
  },// [!code ++]
});
```
:::

## Creating records

You can create new records using the `create` method:

::: code src/posts/post.controller.ts
```ts
const user = await this.db.user.create({
  data: {
    name: 'David',
    email: 'david@email.com',
    age: 16,
  },
});
```
:::

## Updating records

To update records, call the `update` or `updateMany` method:

::: code src/posts/post.controller.ts
```ts
await this.db.user.update({
  where: {
    email: 'david@email.com',
  },
  data: {
    age: 17,
  },
});
```
:::

You may also update or create record if does not exist using `upsert`:

::: code src/posts/post.controller.ts
```ts
await this.db.post.upsert({
  where: {
    title: 'Hello',
  },
  update: {
    title: 'Welcome',
  },
  create: {
    title: 'Welcome',
    content: 'Hello Northle',
  },
});
```
:::

## Deleting records

Use `delete` or `deleteMany` method to delete records:

::: code src/users/user.controller.ts
```ts
await this.db.user.deleteMany({
  where: {
    email: {
      contains: 'gmail.com',
    },
  },
});
```
:::

## Aggregation

With Prisma database client you can count records, aggregate number fields, and select distinct field values.

::: code src/users/user.controller.ts
```ts
const { avg, count } = await this.db.user.aggregate({
  avg: {
    age: true,  // Get the average age
  },
  count: {
    name: true,  // Count user names
  },
});
```
:::

## Relationships

When you define schema relationships you can easly obtain related records.

::: code database/schema.prisma
```prisma
model Post {
  id       Int  @id @default(autoincrement())
  author   User @relation(fields: [authorId], references: [id])// [!code ++]
  authorId Int// [!code ++]
}

model User {
  id    Int     @id @default(autoincrement())
  name  String
  email String  @unique
  posts Post[]// [!code ++]
}
```
:::

To return related records, you can write:

::: code src/users/user.controller.ts
```ts
const users = await this.db.user.findMany({
  select: {
    name: true,
    posts: {// [!code ++]
      select: {// [!code ++]
        title: true,// [!code ++]
      },// [!code ++]
    },// [!code ++]
  },
});
```
:::

In order to access related results, use object properties:

```ts
const { posts } = users;
```
