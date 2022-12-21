---
title: Authorization
---

# Authorization

Along with authentication, Northle ships with additional security API for authorizing user actions. Authorization system in Northle is based on **gates**.

## Creating gates

To create new gate, the best option is to use CLI:

```shell
$ northle make gate posts/post
```

This command will generate a brand new gate in `src/posts/post.gate.ts` file.

## Using gates

Each gate should inherit from `Gate` class that defines the `allows` method. Gate classes define set of methods determining if user is allowed to access the resource.

::: code src/posts/post.gate.ts
```ts
import { Gate } from '@northle/core';

export class PostGate extends Gate {
  // ...

  public edit(id: string): boolean {
    return this.user.id === id;
  }
}
```
:::

To check gate permissions, invoke the `allows` method:

::: code src/posts/post.controller.gate.ts
```ts
import { Controller } from '@northle/core';
import { PostGate } from './post.gate';// [!code ++]

@Controller()
export class PostController {
  constructor(private postGate: PostGate) {}// [!code ++]

  public edit(id: string) {
    if (!this.postGate.allows('edit', id)) {// [!code ++]
      return 'You are not allowed to edit this post!';// [!code ++]
    }// [!code ++]

    // ...
  }
}
```
:::
