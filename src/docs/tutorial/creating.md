---
title: 'CRUD Tutorial: Reading'
---

# CRUD Tutorial: Creating

Now we are ready to start building our application. Let's begin with giving users the ability to create new todos.

## Routing

At the beginning, inject `DatabaseClient` to the controller:

::: code src/todos/todo.controller.ts
```ts
import { DatabaseClient, Request } from '@northle/core';// [!code ++]

@Controller()
export class TodoController {
  constructor(private db: DatabaseClient, private request: Request) {}// [!code ++]
}
```
:::

Now let's define `POST /todos` route:

::: code src/todos/todo.controller.ts
```ts
@Controller()
export class TodoController {
  // ...

  @Route.Post('/todos')// [!code ++]
  public async store() {// [!code ++]
    const { title, content } = this.request.input;// [!code ++]

    const todo = await this.db.todo.create({// [!code ++]
      data: {// [!code ++]
        title,// [!code ++]
        content,// [!code ++]
      },// [!code ++]
    });// [!code ++]

    return todo;// [!code ++]
  }// [!code ++]
}
```
:::

You can test the route sending a `POST` request with `title` and `content` fields. If everything is correctly set up, you should see a new record in database.

## Todo form view

Finally we can add `GET /todos/create` route which will render a view with a form for adding new items:

::: code src/todos/todo.controller.ts
```ts
@Controller()
export class TodoController {
  // ...

  @Route.Get('/todos/create')// [!code ++]
  public create() {// [!code ++]
    return view('./views/create');// [!code ++]
  }// [!code ++]
}
```
:::

The form in `src/todos/views/create.html` will be very simple for now:

::: code src/todos/views/create.html
```svelte
...

<form action="/todos" method="post">
  [csrfToken]

  <input type="text" name="title" placeholder="Title">
  <input type="text" name="content" placeholder="Content">

  <button>Add item</button>
</form>
```
:::
