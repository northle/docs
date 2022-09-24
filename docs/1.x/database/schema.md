---
title: Schema
---

# Schema

Northle comes with a robust database client for MySQL, MongoDB, PostgreSQL and many other database systems by using [Prisma](https://www.prisma.io).

## Configuration

All configuration needed for database querying is stored in the `.env` variables:

```
DATABASE_URL="mysql://root:@localhost/northle"
```

## Database Schema

First you should get familiar with the concept of database **schema**. Schema is your database representation in form of `schema.prisma` file. It contains data sources and table model definitions.

The default schema provided in default Northle project looks like this:

```prisma
datasource db {
  url      = env("DATABASE_URL")
  provider = "mysql"
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  password  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

As you can see, the above schema defines one model `User` which represents a `user` table in database. The `datasource` definition sets up the database system - `mysql` in this case. Available systems are:

- PostgreSQL
- MySQL
- SQLite
- MongoDB
- CockroachDB
- Microsoft SQL Server

Every model definition represents a database table and its columns.

## Optional fields

You can mark column as optional by using the `?` sign:

```prisma{4}
model Post {
  id      Int     @id @default(autoincrement())
  title   String
  content String?
}
```

## Relationships

You can obtain related models as arrays by using `[]` syntax:

```prisma{5}
model User {
  id    Int     @id @default(autoincrement())
  name  String
  email String  @unique
  posts Post[]
}
```

## Running Migrations

When you edit the schema and want to generate tables based on it, run command:

```shell
$ npm run db:migrate
```

::: details Using PNPM or Yarn
```shell
$ pnpm run db:migrate
$ yarn db:migrate
```
:::

## MongoDB Notes

Since MongoDB has a different architecture and is non-relational, the schema definitions differ a bit.

```prisma{2,8}
model User {
  id  String @id @default(auto()) @map("_id") @db.ObjectId
}

model Post {
  id     String  @id @default(auto()) @map("_id") @db.ObjectId
  posts  Post[]  @relation(fields: [postId], references: [id])
  postId String? @db.ObjectId
}
```

When you're using MongoDB, you should remember that IDs have a `String` type and you have to explicitly map them to `ObjectId` `'_id'`.
