---
title: Controllers and Routing
---

# Controllers and Routing

Typically, web applications are based on routes - endpoints with assigned actions called when user asks for the resource. Routing system in Northle is based on *controllers*.

## Controllers

Basically, controller is just a class with methods assigned to URLs handling incoming requests. Each controller contain methods decorated with appropriate HTTP verbs.

In the controller below we have one registered route: `GET /`. When the user requests for that route, the request will be passed to the `index` method which renders some view.

Northle comes with one controller in `src/app/app.controller.ts` file by default:

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

Controller methods should always return some value. Northle automatically sends proper headers based on returned data. In case of object or array, the response has the JSON type. When returned value is text or a view object, it will be rendered as HTML.

### Registering Controllers

The place where controllers are registered is the `src/main.ts` file. If you're using the CLI for generating controllers, Northle registers them for you. Every time you create a new controller manually, you have to register it in `src/main.ts` file:

```ts{4}
const server = await createServer({
  // ...
  modules: [
    AppModule,
  ],
});
```

## Routes

You may declare your application routes by creating controller methods and decorating them with a proper HTTP verb decorator:

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

::: info
Controller methods should be as short as possible - they are only responsible for handling web requests and returning a response. For more logic you can familiarize yourself with service classes.
:::

### URL Patterns

Routes in Northle are dynamic. That means you can use the `:param` syntax to declare a variable URL that accepts multiple values:

```ts
// Match paths like `/users/james_bond` and `/users/andrei_sator` routes
@Route.Get('/users/:name')
```

### Optional Parameters

To make a paramater optional, use the question mark:

```ts
@Route.Get('/users/:name?')
```

The above route will match both `/users` and `/users/luke_skywalker` paths.

### Regular Expressions

You can also define a RegExp pattern for route URLs:

```ts
@Route.Get('/posts/:id(^\\d+)')
```

## Response Types

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

To get more information about response types visit [responses](/docs/1.x/basics/responses.html#view-responses) docs.
