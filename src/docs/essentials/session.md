---
title: Session
---

# Session

Since the HTTP protocol is stateless, you cannot simply share data between requests using it. Fortunately, there is a mechanism of **session**.

In Northle you are able to store user information that we can access and share with multiple requests using session client.

![Session Scheme](./assets/session.png)

## Getting started

To start using session just import the `Session` service and inject it to a controller or a service:

::: code src/users/user.controller.ts
```ts
import { Session } from '@northle/core';// [!code ++]

@Controller()
export class UserController {
  constructor(private session: Session) {}// [!code ++]
}
```
:::

Then you'll be able to use the session data in your controller.

## Storing data

To save a variable to the session, use the `set` method. You only have to provide name for your piece of data and its value:

```ts
const user = await this.db.user.findUnique({
  where: {
    id: userId,
  },
});

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

In order to store data which is available only for the next request, use the `flash` method:

```ts
this.session.flash('error', 'Invalid e-mail or password');
```

You can read flashed data with the `flash` function or method:

```ts
import { flash } from '@northle/core';

const error = this.session.flash('error');

// or
const error = flash('error');
```

## Increment and decrement data

Session system in Northle provides a simple way to increment a session value:

```ts{5}
this.session.set('pageViews', 0);

const { pageViews } = this.session.data;  // 0

this.session.increment('pageViews');

const incremented = this.session.data.pageViews;  // 1
```

You can also decrement a session value:

```ts
this.session.decrement('timeRemaining');
```

## Destroying session

Sometimes you need to clear all session entries and completely unset the session, for example for logging out the user. In order to do that, use the `destroy` method:

```ts
this.session.destroy();
```
