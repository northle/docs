---
title: 'CRUD Tutorial: Updating'
---

# CRUD Tutorial: Updating

Previously we added a todo reading. Now we can update todos in our app.

## Routes

Let's define the `GET /todos/:id/edit` and `PATCH /todos/:id`:

::: code src/todos/todo.controller.ts
```ts
@Controller()
export class TodoController {
  // ...

  @Route.Get('/todos/:id/edit')// [!code ++]
  public async edit(id: string) {// [!code ++]
    const todo = await this.db.todo.findOne(id);// [!code ++]

    return view('./views/edit', {// [!code ++]
      todo,// [!code ++]
    });// [!code ++]
  }// [!code ++]
}
```
:::

## Edit view

The `src/todos/views/edit.html` view will render the edit form:

::: code src/todos/views/edit.html
```svelte
...

<form action="/todos" method="post">
  [method('PATCH')]
  [token]

  <input type="text" name="title" placeholder="Title">
  <input type="text" name="content" placeholder="Content">

  <button>Edit</button>
</form>
```
:::
