---
title: Dependency Injection
---

# Dependency Injection

Backend applications often need a solid architecture patterns to manage the codebase. Norther implements common *service container* and *dependency injection (DI)* concepts.

## Usage

In order to use dependency injection, you only have to type-hint the constructor of class which uses the injected service. Then mark both classes with `@Service` decorator to make them injectable:

```ts
import { Service } from '@norther/core';

@Service()
export class PostService {
  // ...
}
```

```ts
import { Service } from '@norther/core';
import { PostService } from '../posts/post.service';

@Service()
export class OtherService {
  constructor(private postService: PostService) {}

  // ...
}
```

Norther automatically resolves type-hinted dependencies and passes them to your class.

::: tip NOTE
Controllers with `@Controller` decorator are automatically injectable.
:::

Alternatively, you may use the `inject` function instead of type-hinting dependencies:

```ts
import { inject, Service } from '@norther/core';
import { PostService } from '../posts/post.service';

@Service()
export class OtherService {
  private postService = inject(PostService);

  // ...
}
```