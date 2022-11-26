---
title: Schema
---

# Schema

Northle comes with a robust database client for MySQL, MongoDB, PostgreSQL, and many other database systems by integrating [Prisma](https://www.prisma.io).

## Configuration

The configuration for database services is stored in the `.env` file:

::: code .env
```txt{3}
DATABASE_URL="mysql://root:@localhost/northle"
```
:::

You should adjust the database URL and provide valid credentials. The URL should look like this for following systems:

| System               | URL pattern                                                                        |
| -------------------- | ---------------------------------------------------------------------------------- |
| PostgreSQL           | `postgresql://USER:PASSWORD@HOST:PORT/DATABASE`                                    |
| MySQL                | `mysql://USER:PASSWORD@HOST:PORT/DATABASE`                                         |
| SQLite               | `file:./FILE_PATH.db`                                                              |
| MongoDB              | `mongodb://USER:PASSWORD@HOST/DATABASE`                                            |
| CockroachDB          | `postgresql://USER:PASSWORD@HOST:PORT/DATABASE`                                    |
| Microsoft SQL Server | `sqlserver://HOST:PORT;database=DATABASE;user=USER;password=PASSWORD;encrypt=true` |

## Database schema

First you should get familiar with the concept of database **schema**. Schema is a database representation in a form of `database/schema.prisma` file. It contains data sources definitions and model declarations.

Schema provided in a default Northle project looks like this:

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

As you can see, the above schema defines `User` model which represents `user` table and its columns in the database. The `datasource db` definition sets up the database system - in this case `mysql`. 

## Models

Every model represents a database table along with its columns and relationships. Each model definition line corresponds with database column and its metadata like data type or default value:

::: code database/schema.prisma
```prisma
model ChatMessage {
  id      Int     @id @default(autoincrement())  // primary key `id`
  content String  // column `content` of type `String`
}
```
:::

### Optional fields

To mark column as optional (nullable), use the `?` sign:

::: code database/schema.prisma
```prisma{4}
model Post {
  id      Int     @id @default(autoincrement())
  title   String
  content String?
}
```
:::

### Relationships

You can obtain related models as arrays by using `[]` syntax:

::: code database/schema.prisma
```prisma
model User {
  id    Int    @id @default(autoincrement())
  name  String
  email String @unique
  posts Post[]// [!code ++]
}

model Post {
  id       Int  @id @default(autoincrement())
  author   User @relation(fields: [authorId], references: [id])// [!code ++]
  authorId Int// [!code ++]
}
```
:::

## Running migrations

When you edit the schema and want to generate tables based on it, run the `db:migrate` command:

```shell
$ npm run db:migrate
```

::: details Using pnpm or Yarn
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

model Comment {
  id     String  @id @default(auto()) @map("_id") @db.ObjectId
  post   Post    @relation(fields: [postId], references: [id])
  postId Int// [!code --]
  postId String? @db.ObjectId// [!code ++]
}
```
:::
