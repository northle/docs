---
title: Services
---

# Services

We strongly encourage developers to maintain clean code structure divided into small parts (modules, controllers, services etc.).

We believe that controllers should only be responsible for handling requests and returning a response. All remaining business logic should be placed in **services**.

## Creating services

Service is just an injectable class with methods responsible for processing data. A basic service may look like this:

::: code src/users/user.service.ts
```ts
import { Service } from '@northle/core';// [!code ++]

@Service()// [!code ++]
export class UserService {
  public getMessage(): string {
    return 'Hello World!';
  }
}
```
:::

## Using services

Since the class has been marked with `Service` decorator, you can inject it into other controller constructor:

::: code src/users/user.controller.ts
```ts{9}
import { UserService } from './user.service';// [!code ++]

@Controller()
export class UserController {
  constructor(private userService: UserService) {}// [!code ++]

  @Route.Get('/users')
  public index() {
    return this.userService.getMessage();
  }
}
```
:::
