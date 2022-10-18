---
title: Controllers and Routing
---

# Controllers and Routing

Typically, web applications are based on route mappings. Route, or  an endpoint is an URL with assigned function called when user asks for the URL.

Routing system in Northle is based on **controller** classes.

![Routing Scheme](./assets/routing.png)

## Controllers

Basically, a controller is just a class with methods assigned to URLs. Each route handles incoming requests. Controllers contain methods decorated with appropriate HTTP verbs.

Northle comes with one controller in `src/app/app.controller.ts` file by default.

This controller has one registered route: `GET /`. When the user requests for that route, the request will be passed to the `index` method which renders a view.

::: code src/app/app.controller.ts
```ts
import { Controller, Request, Response, Route, view } from '@northle/core';

@Controller()
export class AppController {
  constructor(private request: Request, private response: Response) {}

  @Route.Get('/')
  public index() {
    return view('./views/home', {
      message: 'Hello Northle!',
    });
  }
}
```
:::

Controller methods should always return some value. Northle automatically sends proper headers based on returned data. In case of object or array, the response has the JSON type. When returned value is text or a view object, it will be rendered as HTML.

### Registering controllers

The place where every controller is registered is a [module](/docs/basics/modules). Every time you create a new controller manually, you need to import it into a module:

::: code src/posts/post.module.ts
```ts{2,6}
import { Module } from '@northle/core';
import { PostController } from './post.controller';

@Module({
  controllers: [
    PostController,
  ],
})
export class PostModule {}
```
:::

Then register it in `src/main.ts` file:

::: code src/main.ts
```ts{1,8}
import { PostModule } from './posts/post.module';

const server = await createServer({
  // ...

  modules: [
    AppModule,
    PostModule,
  ],
});
```
:::

## Routes

In order to declare application routes, add new controller method and decorate it with a proper HTTP verb decorator:

::: code src/app/app.controller.ts
```ts
import { Route } from '@northle/core';

class AppController {
  // ...

  @Route.Get('/users')
  public index() {
    // ...
  }

  @Route.Post('/users')
  public store() {
    // ...
  }

  @Route.Delete('/users/:id')
  public destroy() {
    // ...
  }
}
```
:::

::: info NOTE
Controller methods should be as short as possible - they are only responsible for handling web requests and returning a response. For more logic you can familiarize yourself with service classes.
:::

### URL patterns

Routes in Northle are dynamic. That means you can use the `:param` syntax to declare a variable URL that accepts multiple values:

```ts
// Match paths like `/users/james_bond` or `/users/andrei_sator`
@Route.Get('/users/:name')
```

### Optional parameters

To make a paramater optional, use the question mark. The following route will match both `/users` and `/users/luke_skywalker` paths:

```ts
@Route.Get('/users/:name?')
```

### Regular expressions

You can also define a `RegExp` pattern for route parameters:

```ts
// This route will accept only numeric params
@Route.Get('/posts/:id(^\\d+)')

// This route will accept IDs in form `aaa-bbb`
@Route.Get('/users/:id(^\\d{3}-\\d{3})')
```

## Response types

Northle automatically discovers response type based on the returned value from the controller.

```ts
// JSON response (text/json)
return {
  name: 'Bond. James Bond',
};
```

```ts
// JSON response (text/json)
return [1, 2, 3];
```

```ts
// HTML response (text/html)
return '<h1>Hello World</h1>';
```

```ts
// HTML response (ViewResponse instance)
return view('./views/profile');
```

```ts
// Redirect response (RedirectResponse instance)
return redirect('/login');
```

To get more information about response types, visit the [responses](/docs/basics/responses) section.
