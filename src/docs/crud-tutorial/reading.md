---
title: 'CRUD Tutorial: Reading'
---

# CRUD Tutorial: Reading

In the previous chapter we added a functionality to add new todos. Now we are ready to retrieve and show them.

## Route

Let's define the `GET /todos` route:

::: code src/todos/todo.controller.ts
```ts
@Controller()
export class TodoController {
  // ...

  @Route.Get('/todos')// [!code ++]
  public async index() {// [!code ++]
    const todos = await this.db.todo.findMany();// [!code ++]

    return view('./views/index', {// [!code ++]
      todos,// [!code ++]
    });// [!code ++]
  }// [!code ++]
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
