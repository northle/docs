---
title: Services
---

# Services

Northle strongly encourages you to write clean code separated into small parts. We believe that controllers should be only responsible for request and response handling. All other buisness logic should be located in service classes.

Service class is just an injectable class with methods responsible for transforming some data.

## Creating Services

The most basic service may look like this:

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

```ts
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  // ...
}
```

Injected services will be automatically available in the controller:

```ts
@Route.Get('/users')
public index() {
  return this.userService.getMessage();
}
```
