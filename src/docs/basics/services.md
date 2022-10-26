---
title: Services
---

# Services

Northle strongly encourages you to write clean code separated into small parts (modules, controllers, and services). We believe that controllers should be only responsible for handling requests and responses. All business logic should be placed in service classes.

## Creating services

Service class is just an injectable class with methods are responsible for transforming some data. The most basic service may look like this:

::: code src/users/user.service.ts
```ts
import { Service } from '@northle/core'; // [!code ++]

@Service() // [!code ++]
export class UserService {
  public getMessage(): string {
    return 'Hello World!';
  }
}
```
:::

## Using services

Since the class has been declared as injectable, we can type-hint the controller constructor to get injected services:

::: code src/users/user.controller.ts
```ts{5}
import { UserService } from './user.service'; // [!code ++]

@Controller()
export class UserController {
  constructor(private userService: UserService) {} // [!code ++]

  // ...
}
```
:::

Injected services will be automatically available in the controller:

::: code src/users/user.controller.ts
```ts{7}
@Controller()
export class UserController {
  // ...

  @Route.Get('/users')
  public index() {
    return this.userService.getMessage();
  }
}
```
:::
