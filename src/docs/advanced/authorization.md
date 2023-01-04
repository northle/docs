---
title: Authorization
---

# Authorization

Along with authentication, Northle ships with additional security API for authorizing user actions. Authorization system in Northle is based on **gates**.

## Creating gates

To create new gate, the best option is to use [CLI](/docs/essentials/cli):

::: terminal
```shell
northle make gate user
```
:::

This command will generate a user gate in `src/users/user.gate.ts` file. It will be responsible for defining permissions for user profile editing.

## Using gates

Each gate should inherit from `Gate` class that defines the `allows` method. Gate classes define set of methods determining if user is allowed to access the resource.

::: code src/users/user.gate.ts
```ts
import { Gate } from '@northle/core';

export class UserGate extends Gate {
  // ...

  public edit(id: string): boolean {
    return this.user.id === id;
  }
}
```
:::

To check gate permissions, invoke the `allows` method:

::: code src/users/user.controller.gate.ts
```ts
import { Controller, Route } from '@northle/core';
import { UserGate } from './user.gate';// [!code ++]

@Controller()
export class UserController {
  constructor(private userGate: UserGate) {}// [!code ++]

  @Route.Get('/users/:id/edit')
  public edit(id: string) {
    if (!this.userGate.allows('edit', id)) {// [!code ++]
      return 'You are not allowed to edit this user!';// [!code ++]
    }// [!code ++]

    // ...
  }
}
```
:::
