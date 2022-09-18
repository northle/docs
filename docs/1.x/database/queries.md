---
title: Queries
---

# Queries

Querying database using Norther's Prisma service is very easy and handy.

## Getting Started

To start using database queries, you should inject `DatabaseClient` service:

```ts
import { DatabaseClient } from '@norther/core';
```

```ts{3}
@Controller()
export class PostController {
  constructor(private db: DatabaseClient) {}

  // ...
}
```
