---
title: Schema
---

# Schema

Norther comes with a robust database client for MySQL, MongoDB and PostgreSQL database systems by leveraging [Prisma](https://www.prisma.io).

## Configuration

All configuration needed for database querying is stored in the `.env` variables:

```
DATABASE_URL="mysql://root:@localhost/norther"
```

## Database Schema

First you should get familiar with the concept of database **schema representation**.

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
