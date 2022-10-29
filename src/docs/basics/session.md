---
title: Session
---

# Session

Since HTTP protocol is stateless, we cannot simply share data between requests. Using Northle we have a mechanism of **session**. Using session you are able to store user information that we can access and share with multiple requests.

![Session Scheme](./assets/session.png)

## Getting started

To start using session just import the `Session` service and inject it to the controller or service:

::: code src/users/user.controller.ts
```ts
import { Session } from '@northle/core';// [!code ++]

@Controller()
export class UserController {
  constructor(private session: Session) {}// [!code ++]
}
```
:::

Then you'll be able to use the session object in your controller.

## Storing data

To save a variable to the session, use the `set` method. You only have to provide name for your piece of data and its value:

```ts
const user = await this.db.user.findUnique(id);

this.session.set('email', user.email);
```

## Retrieving data

For obtaining saved session data you have a `session.data` object available:

```ts
const email = this.session.data.email;
```

Alternatively you can use the `session` helper:

```ts
import { session } from '@northle/core';

const email = session('email');
```

You may also access flashed data with the `flash` helper:

```ts
import { flash } from '@northle/core';

const error = flash('error');
```

## Deleting data

To remove items from the session, call `delete` method:

```ts
this.session.delete('email');
```

## Flash data

In order to set temporary data which is deleted when you access it, use the `flash` method:

```ts
this.session.flash('error', 'Invalid e-mail or password');
```

You can retrieve flashed data with the `flash` function:

```ts
import { flash } from '@northle/core';

const error = flash('error');
```

## Destroying session

Sometimes you need to clear all session entries and completely unset the session, for example for logging out the user. In order to do that, use the `destroy` method:

```ts
this.session.destroy();
```
