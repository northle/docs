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
    const todo = await this.db.todo.findUnique({// [!code ++]
      where: {// [!code ++]
        id,// [!code ++]
      },// [!code ++]
    });// [!code ++]

    return view('./views/edit', { todo });// [!code ++]
  }// [!code ++]

  @Route.Patch('/todos/:id')// [!code ++]
  public async update(id: string) {// [!code ++]
    const { title, content } = this.request.input;// [!code ++]

    const todo = await this.db.todo.update({// [!code ++]
      where: {// [!code ++]
        id,// [!code ++]
      },// [!code ++]
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

## Edit view

The `src/todos/views/edit.html` view will render the edit form:

::: code src/todos/views/edit.html
```svelte
...

<form action="/todos/{{ $request.params.id }}" method="post">
  [method('PATCH')]
  [csrfToken]

  <input
    type="text"
    name="title"
    placeholder="Title"
    value="{{ todo.title }}"
  >

  <input
    type="text"
    name="content"
    placeholder="Content"
    value="{{ todo.content }}"
  >

  <button>Edit todo</button>
</form>
```
:::
