---
title: Authentication
---

# Authentication

Nowadays, many applications let their users to authenticate and log in using password. Building the auth system from scratch may be complex and risky. That's why Northle provides a robust, built-in auth system.

## Getting Started

To start using auth system you need to inject the `Authenticator` service:

```ts{1,5}
import { Authenticator } from '@northle/core';

@Controller()
export class UserController {
  constructor(private authenticator: Authenticator) {}
}
```

Furthermore, you need to set up your [database schema](/docs/database/schema) which should contain `User` model with the following fields:

```prisma{2,3,4}
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  password  String

  // ...
}
```

The `password` column should contain [hashed](/docs/advanced/encryption-and-hashing#hashing) passwords. They are the base for authenticating users using provided plain-text passwords.

Do not forget to run `npm run db:migrate` command.

## Logging In

In order to log the user in, use the `login` method with provided e-mail and password sent by the client:

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

## Logging Out

To log user out, you need to call `logout` method:

```ts
this.authenticator.logout();
```

## Determining If User Is Authenticated

To determine if a client is the authenticated user, you may use the `check` method:

```ts
if (this.authenticator.check()) {
  // User is authenticated
}
```