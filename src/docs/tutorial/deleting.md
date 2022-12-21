---
title: 'CRUD Tutorial: Deleting'
---

# CRUD Tutorial: Deleting

Previously we added a todo updating feature. Now we can add ability to delete todos in our app.

## Routes

Let's define the `GET /todos/:id/delete` and `DELETE /todos/:id`:

::: code src/todos/todo.controller.ts
```ts
@Controller()
export class TodoController {
  // ...

  @Route.Get('/todos/:id/remove')// [!code ++]
  public async remove(id: string) {// [!code ++]
    const todo = await this.db.todo.findUnique({// [!code ++]
      where: {// [!code ++]
        id,// [!code ++]
      },// [!code ++]
    });// [!code ++]

    return view('./views/delete', { todo });// [!code ++]
  }// [!code ++]

  @Route.Delete('/todos/:id')// [!code ++]
  public async destroy(id: string) {// [!code ++]
    const { title, content } = this.request.input;// [!code ++]

    const todo = await this.db.todo.delete({// [!code ++]
      where: {// [!code ++]
        id,// [!code ++]
      },// [!code ++]
    });// [!code ++]

    return todo;// [!code ++]
  }// [!code ++]
}
```
:::

## Delete form view

The view `src/todos/views/delete.html` will be responsible for rendering the deletion form:

::: code src/todos/views/delete.html
```svelte
...

<h1>Delete: {{ todo.title }}</h1>

<form action="/todos/{{ $request.params.id }}" method="post">
  [method('DELETE')]
  [token]

  <button>Delete todo</button>
</form>
```
:::
