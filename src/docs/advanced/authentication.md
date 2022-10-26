---
title: Authentication
---

# Authentication

Nowadays, many applications let their users to authenticate and log in using password. Building the auth system from scratch may be complex and risky. That's why Northle provides a robust, built-in auth system.

## Getting started

To start using auth system you need to inject the `Authenticator` service:

::: code src/users/user.controller.ts
```ts
import { Authenticator } from '@northle/core'; // [!code ++]

@Controller()
export class UserController {
  constructor(private authenticator: Authenticator) {} // [!code ++]
}
```
:::

Furthermore, you need to set up your [database schema](/docs/database/schema) which should contain `User` model with the following fields:

::: code database/schema.prisma
```prisma{2,3,4}
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  password  String

  // ...
}
```
:::

The `password` column should contain [hashed](/docs/advanced/encryption-and-hashing#hashing) passwords. They are the base for authenticating users using provided plain-text passwords.

Do not forget to run `npm run db:migrate` command.

## Logging in

In order to log the user in, use the `login` method with provided e-mail and password sent by the client:

::: code src/users/user.controller.ts
```ts{3}
const { email, password } = this.request.data;

if (this.authenticator.login(email, password)) {
  // User is authenticated here

  return redirect('/dashboard');
}

return redirectBack({
  error: 'Invalid e-mail or password',
});
```
:::

## Logging out

To log user out, you need to call `logout` method:

```ts
this.authenticator.logout();
```

## Determining if user is authenticated

To determine if a client is the authenticated user, you may use the `check` method:

```ts
if (this.authenticator.check()) {
  // User is authenticated
}
```
