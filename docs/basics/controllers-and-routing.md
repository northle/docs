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

Controller methods should always return some value. Melonly automatically sends proper headers based on returned data. In case of object or array, the response has the JSON type. When returned value is text or a view object, it will be rendered as HTML.

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

You can also define RegExp pattern for route URLs:

```ts
@Route.get('/posts/:id(^\\d+)')
```
