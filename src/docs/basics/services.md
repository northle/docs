---
title: Services
---

# Services

Northle strongly encourages you to write clean code separated into small parts (modules, controllers, and services). We believe that controllers should be only responsible for handling requests and responses. All business logic should be placed in service classes.

## Creating Services

Service class is just an injectable class with methods are responsible for transforming some data. The most basic service may look like this:

```ts
import { Service } from '@northle/core';

@Service()
export class UserService {
  public getMessage(): string {
    return 'Hello World!';
  }
}
```

## Using Services

Since the class has been declared as injectable, we can type-hint the controller constructor to get injected services:

```ts{5}
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  // ...
}
```

Injected services will be automatically available in the controller:

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
