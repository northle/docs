---
title: Schema
---

# Schema

Northle comes with a robust database client for MySQL, MongoDB, PostgreSQL and many other database systems by using [Prisma](https://www.prisma.io).

## Configuration

The configuration for database services is stored in the `.env` file:

::: code .env
```
# ...

DATABASE_URL="mysql://root:@localhost/northle"
```
:::

You should adjust the database URL and provide valid credentials. The URL should look like this for following systems:

| System               | URL scheme                                                                         |
| -------------------- | ---------------------------------------------------------------------------------- |
| PostgreSQL           | `postgresql://USER:PASSWORD@HOST:PORT/DATABASE`                                    |
| MySQL                | `mysql://USER:PASSWORD@HOST:PORT/DATABASE`                                         |
| SQLite               | `file:./FILE_PATH.db`                                                              |
| MongoDB              | `mongodb://USER:PASSWORD@HOST/DATABASE`                                            |
| CockroachDB          | `postgresql://USER:PASSWORD@HOST:PORT/DATABASE`                                    |
| Microsoft SQL Server | `sqlserver://HOST:PORT;database=DATABASE;user=USER;password=PASSWORD;encrypt=true` |

## Database schema

First you should get familiar with the concept of database **schema**. Schema is your database representation in form of `schema.prisma` file. It contains data sources and table model definitions.

The default schema provided in default Northle project looks like this:

::: code database/schema.prisma
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
:::

As you can see, the above schema defines one model `User` which represents a `user` table in database. The `datasource` definition sets up the database system - `mysql` in this case. 

Every model definition represents a database table along with its columns and relationships.

## Optional fields

You can mark column as optional by using the `?` sign:

::: code database/schema.prisma
```prisma{4}
model Post {
  id      Int     @id @default(autoincrement())
  title   String
  content String?
}
```
:::

## Relationships

You can obtain related models as arrays by using `[]` syntax:

::: code database/schema.prisma
```prisma{5}
model User {
  id    Int    @id @default(autoincrement())
  name  String
  email String @unique
  posts Post[]
}
```
:::

## Running migrations

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

## MongoDB notes

Since MongoDB has a different architecture and is non-relational, the schema definitions differ a bit.

When you're using MongoDB, you should remember that IDs have a `String` type and you have to explicitly map them to `ObjectId` `'_id'`.

::: code database/schema.prisma
```prisma
model User {
  id Int    @id @default(autoincrement())// [!code --]
  id String @id @default(auto()) @map("_id") @db.ObjectId// [!code ++]
}

model Post {
  id     String  @id @default(auto()) @map("_id") @db.ObjectId
  posts  Post[]  @relation(fields: [postId], references: [id])
  postId Int// [!code --]
  postId String? @db.ObjectId// [!code ++]
}
```
:::
