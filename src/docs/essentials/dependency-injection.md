---
title: Dependency Injection
---

# Dependency Injection

Backend applications often need a solid architecture patterns to manage class dependencies. Northle provides a common **dependency injection (DI)** concept implementation.

## Basic usage

In order to use dependency injection, all you need to do is type-hinting the constructor of class that uses the injected service. Then mark both classes with `Service` decorator to make them injectable:

::: code src/posts/post.service.ts
```ts
import { Service } from '@northle/core';// [!code ++]

@Service()// [!code ++]
export class PostService {
  // ...
}
```
:::

::: code src/users/user.service.ts
```ts
import { Service } from '@northle/core';
import { PostService } from '../posts/post.service';// [!code ++]

@Service()
export class UserService {
  constructor(private postService: PostService) {}// [!code ++]

  // ...
}
```
:::

Northle automatically resolves type-hinted dependencies and passes them to your class.

::: tip NOTE
Controllers with the `Controller` decorator are automatically treated as injectable services.
:::

## `inject` function

Alternatively, you may use the `inject` function instead of type-hinting dependencies. If you prefer the `inject` function and you're using only this method, there's no need to add the `Service` decorator:

::: code src/users/user.service.ts
```ts
import { inject, Service } from '@northle/core';// [!code ++]
import { PostService } from '../posts/post.service';

@Service()// [!code --]
export class UserService {
  private postService = inject(PostService);// [!code ++]

  // ...
}
```
:::

The result is the same but this way you don't need to specify types in the constructor.

::: danger CAUTION
Dependency injection system in Northle does **not** support circular dependencies (services dependent on each other). It is a very bad practice so the framework should not resolve circular dependencies (and you should avoid them!).
:::
