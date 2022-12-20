---
title: 'CRUD Tutorial: Updating'
---

# CRUD Tutorial: Updating

Previously we added a todo updating feature. Now we can add ability to delete todos in our app.

## Routes

Let's define the `GET /todos/:id/delete` and `DELETE /todos/:id`:

::: code src/todos/todo.controller.ts
```ts
@Controller()
export class TodoController {
  // ...

  @Route.Get('/todos/:id/delete')// [!code ++]
  public async delete(id: string) {// [!code ++]
    return view('./views/delete');// [!code ++]
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

The `src/todos/views/delete.html` view will render the edit form:

::: code src/todos/views/delete.html
```svelte
...

<form action="/todos/{{ $request.params.id }}" method="post">
  [method('DELETE')]
  [token]

  <button>Delete</button>
</form>
```
:::
