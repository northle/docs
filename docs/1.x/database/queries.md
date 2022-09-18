---
title: Queries
---

# Queries

Querying database using Norther's [Prisma](https://www.prisma.io/docs/concepts/components/prisma-client/crud) service is very easy and handy.

## Getting Started

To start using database queries, you should inject `DatabaseClient` service:

```ts{1,5}
import { DatabaseClient } from '@norther/core';

@Controller()
export class PostController {
  constructor(private db: DatabaseClient) {}

  // ...
}
```

## Select Queries

The most common type of database queries is the `select` query. You can select data from your table using `user` object and the `findUnique` method:

```ts
const user = await this.db.user.findUnique({
  where: {
    id: 1,
  },
});
```

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

```ts{5-8}
const user = await this.db.user.findUnique({
  where: {
    id: 1,
  },
  select: {
    name: true,
    email: true,
  },
});
```

## Creating Records

You can create new records using the `create` method:

```ts
const user = await this.db.user.create({
  data: {
    name: 'David',
    email: 'david@email.com',
    age: 16,
  },
});
```

## Updating Records

Updating records is easy:

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

## Deleting Records

Use `delete` or `deleteMany` method to delete records:

```ts
await this.db.user.deleteMany({
  where: {
    email: {
      contains: 'gmail.com',
    },
  },
});
```

## Aggregation

With Prisma database client you can count records, aggregate number fields, and select distinct field values.

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

To return related records, you can write:

```ts{4-8}
const users = await this.db.user.findMany({
  select: {
    name: true,
    posts: {
      select: {
        title: true,
      },
    },
  },
});
```
