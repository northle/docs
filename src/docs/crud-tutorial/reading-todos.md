---
title: Reading Todos | CRUD Tutorial
---

# Reading Todos | CRUD Tutorial

In the previous chapter we added a functionality to add new todos. Now we are ready to retrieve and show them.

## Route

Let's define the `GET /todos` route:

::: code src/todos/todo.controller.ts
```ts
@Controller()
export class TodoController {
  // ...

  @Route.Get('/todos')
  public async index() {
    const todos = await this.db.todo.findMany();

    return view('./views/index.html', {
      todos,
    });
  }
}
```
:::

## Todos page view

The `src/todos/views/index.html` view will render our todo list:

::: code src/todos/views/index.html
```svelte
...

<main>
  [each (todo in todos)]
    <article class="todo">{{ todo.content }}</article>
  [/each]

  [if (!todos.length)]
    <p>There are no todos yet.</p>
  [/if]
</main>
```
:::
