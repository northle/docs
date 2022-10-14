---
title: Dependency Injection
---

# Dependency Injection

Backend applications often need a solid architecture patterns to manage the codebase. Northle implements common **service container** and **dependency injection (DI)** concepts.

## Basic Usage

In order to use dependency injection, all you need to do is type-hinting the constructor of class which uses the injected service. Then mark both classes with `@Service` decorator to make them injectable:

```ts
import { Service } from '@northle/core';

@Service()
export class PostService {
  // ...
}
```

```ts
import { Service } from '@northle/core';
import { PostService } from '../posts/post.service';

@Service()
export class OtherService {
  constructor(private postService: PostService) {}

  // ...
}
```

Northle automatically resolves type-hinted dependencies and passes them to your class.

::: tip NOTE
Controllers with `@Controller` decorator are automatically injectable.
:::

## `inject` Function

Alternatively, you may use the `inject` function instead of type-hinting dependencies:

```ts
import { inject, Service } from '@northle/core';
import { PostService } from '../posts/post.service';

@Service()
export class OtherService {
  private postService = inject(PostService);

  // ...
}
```

The result will be the same but here you don't need to specify types in constructor.
