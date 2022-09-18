---
title: Schema
---

# Schema

Norther comes with a robust database client for MySQL, MongoDB, PostgreSQL and many other database systems by using [Prisma](https://www.prisma.io).

## Configuration

All configuration needed for database querying is stored in the `.env` variables:

```
DATABASE_URL="mysql://root:@localhost/norther"
```

## Database Schema

First you should get familiar with the concept of database **schema**. Schema is your database representation in form of `schema.prisma` file. It contains data sources and table model definitions.

The default schema provided in default Norther project looks like this:

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
