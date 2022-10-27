---
title: Queries
---

# Queries

Querying database using Northle's [Prisma](https://www.prisma.io/docs/concepts/components/prisma-client/crud) service is very easy and handy.

## Getting started

To start using database queries, you should inject `DatabaseClient` service:

::: code src/posts/post.controller.ts
```ts
import { DatabaseClient } from '@northle/core';// [!code ++]

@Controller()
export class PostController {
  constructor(private db: DatabaseClient) {}// [!code ++]

  // ...
}
```
:::

## Select queries

The most common type of database queries is the `select` query. You can select data from your table using `user` object and the `findUnique` method:

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

You can specify what columns you want to receive with `select` object:

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

Updating records is easy:

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

## Deleting records

Use `delete` or `deleteMany` method to delete records:

::: code src/posts/post.controller.ts
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

::: code src/posts/post.controller.ts
```ts
const aggregations = await this.db.user.aggregate({
  avg: {
    age: true,
  },
  count: {
    name: true,
  },
});
```
:::

The result will have the following form:

```ts
{
  avg: {
    age: 32,
  },
  count: {
    name: 15,
  },
}
```

## Relationships

When you define schema relationships you can easly obtain related records.

::: code database/schema.prisma
```prisma
model Post {
  id       Int  @id @default(autoincrement())
  author   User @relation(fields: [authorId], references: [id])
  authorId Int
}

model User {
  id    Int     @id @default(autoincrement())
  name  String
  email String  @unique
  posts Post[]
}
```
:::

To return related records, you can write:

::: code src/posts/post.controller.ts
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
