---
title: Creating Todos | CRUD Tutorial
---

# Creating Todos | CRUD Tutorial

Now we are ready to start building our application. Let's begin with giving users the ability to create new todos.

## Routing

At the beginning, inject `DatabaseClient` to the controller:

::: code src/todos/todo.controller.ts
```ts{1,5}
import { DatabaseClient, Request } from '@northle/core';

@Controller()
export class TodoController {
  constructor(private db: DatabaseClient, private request: Request) {}
}
```
:::

Now let's define `POST /todos` route:

::: code src/todos/todo.controller.ts
```ts
@Controller()
export class TodoController {
  // ...

  @Route.Post('/todos')
  public async store() {
    const { title, content } = this.request.input;

    const todo = await this.db.todo.create({
      data: {
        title,
        content,
      },
    });

    return todo;
  }
}
```
:::

You can test the route sending a `POST` request with `title` and `content` fields. If everything is correctly set up, you should see a new record in database.

## Todo Creating View

Finally we can add `GET /todos/create` route which will render a view with a form for adding new items:

::: code src/todos/todo.controller.ts
```ts
@Controller()
export class TodoController {
  // ...

  @Route.Get('/todos/create')
  public create() {
    return view('./views/create');
  }
}
```
:::

The form in `src/todos/views/create.html` will be very simple for now:

::: code src/todos/views/create.html
```html
...

<form action="/todos" method="post">
  [token]

  <input type="text" name="title" placeholder="Title">
  <input type="text" name="content" placeholder="Content">

  <button>Add item</button>
</form>
```
:::
