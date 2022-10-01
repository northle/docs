---
title: Creating Todos | CRUD Tutorial
---

# Creating Todos | CRUD Tutorial

Now we are ready to start building our application. Let's begin with giving users the ability to create new todos.

## Routing

At the beginning, inject `DatabaseClient` to the controller:

```ts{1,5}
import { DatabaseClient, Request } from '@northle/core';

@Controller()
export class TodoController {
  constructor(private db: DatabaseClient, private request: Request) {}
}
```

Now let's define the `POST /todos` route:

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

You can test the route sending a `POST` request with `title` and `content` fields. If everything is correctly set up, you should see a new record in database.
