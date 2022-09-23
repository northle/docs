---
title: Controllers and Routing
---

# Controllers and Routing

Typically, web applications are based on routes - endpoints with assigned actions called when user asks for the resource. Routing system in Norther is based on *controllers*.

## Controllers

Basically, a controller is just a class with methods assigned to URLs handling incoming requests. Each controller contain methods decorated with appropriate HTTP verbs. In the controller below we have one registered route: `/`. When the user requests for that route, the request will be passed to the `index` method which renders some view.

Norther comes with one controller in `src/app/app.controller.ts` file by default:

```ts
import { Controller, Request, Response, Route, view } from '@norther/core';

@Controller()
export class AppController {
  constructor(private request: Request, private response: Response) {}

  @Route.Get('/')
  public index() {
    return view('./views/home', {
      message: 'Hello Norther!',
    });
  }
}
```

Controller methods should always return some value. Norther automatically sends proper headers based on returned data. In case of object or array, the response has the JSON type. When returned value is text or a view object, it will be rendered as HTML.

### Registering Controllers

The place where controllers are registered is the `src/main.ts` file. If you're using the CLI for generating controllers, Norther registers them for you. Every time you create a new controller manually, you have to register it in `src/main.ts` file:

```ts{4}
const server = createServer({
  // ...
  modules: [
    AppModule,
  ],
});
```

## Routes

You may declare your application routes by creating controller methods and decorating them with the proper HTTP verb decorator:

```ts
import { Route } from '@norther/core'

class AppController {
  // ...

  @Route.get('/users')
  public index() {
    // ...
  }

  @Route.post('/users')
  public store() {
    // ...
  }

  @Route.delete('/users/:id')
  public destroy() {
    // ...
  }
}
```

::: info
Controller route methods should be as short as possible - they are only responsible for handling web requests and returning a response. For more logic you can familiarize yourself with service classes.
:::

### URL Patterns

Routes in Norther are dynamic. You may use the `:param` syntax to create a variable URL that accepts multiple values:

```ts
// Matches an example /users/admin1 route
@Route.get('/users/:name')
```

To make a paramater optional, use the question mark:

```ts
@Route.get('/users/:name?')
```

The above route will match both `/users` and` /users/admin1` paths.

You can also define RegExp pattern for route URLs:

```ts
@Route.get('/posts/:id(^\\d+)')
```

### Response Types

As we mentioned above, Norther automatically discovers response type based on the returned value from the controller.

```ts
// Type of the response: JSON
return {
  name: 'User',
};
```

```ts
// Type of the response: JSON
return [1, 2, 3];
```

```ts
// Type of the response: HTML
return '<h1>Hello World</h1>';
```