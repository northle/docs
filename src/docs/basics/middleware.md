---
title: Middleware
---

# Middleware

HTTP middleware is an useful mechanism in web apps. It is responsible for filtering and altering incoming requests.

## Basic middleware

To create a middleware, you can leverage the CLI:

```shell
$ north make middleware auth/auth
```

::: code src/auth/auth.middleware.ts
```ts
import { MiddlewareHandler, Request, Response, Service } from '@northle/core';

@Service()
export class AuthMiddleware implements MiddlewareHandler {
  constructor(private request: Request, private response: Response) {}

  public handle(): void {
    // ...
  }
}
```
:::

Middleware is called by the `handle` method before a controller action.

For example, you can create a middleware that redirects back unauthenticated users. This may be useful when you want to create a protected route that should be accessible only when user is logged in:

::: code src/auth/auth.middleware.ts
```ts
import { Authenticator, MiddlewareHandler, Request, Response, Service } from '@northle/core';// [!code ++]

@Service()
export class AuthMiddleware implements MiddlewareHandler {
  constructor(
    private authenticator: Authenticator,// [!code ++]
    private request: Request,
    private response: Response,
  ) {}

  public handle(): void {
    if (!this.authenticator.check()) {// [!code ++]
      this.response.redirect('/login');// [!code ++]
    }// [!code ++]
  }
}
```
:::

## Using middleware

In order to use a middleware, you should register it for a route using the `Middleware` decorator:

::: code src/app/app.controller.ts
```ts
import { Controller, Middleware } from '@northle/core';// [!code ++]
import { AuthMiddleware } from '../auth/auth.middleware';// [!code ++]

@Controller()
export class AppController {
  // ...

  @Route.Get('/dashboard')
  @Middleware(AuthMiddleware)// [!code ++]
  public dashboard() {
    // This route is visible to logged in users
  }
}
```
:::
