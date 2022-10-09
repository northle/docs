---
title: Session
---

# Session

Since HTTP protocol is stateless we cannot store data between requests. On backend there is a term called **session** - a mechanism which can save user information so we can access it on multiple requests.

Northle provides a built-in session management module so you don't have to install any additional dependencies.

## Accessing the Session

To start using session just import it and inject from the service container:

```ts
import { Session } from '@northle/core';

@Controller()
export class UserController {
  constructor(private session: Session) {}
}
```

Then you'll be able to use the session object in your controller.

## Storing Data

To save some variable to session, use the `set` method:

```ts
const user = await this.db.user.findUnique(id);

this.session.set('email', user.email);
```

## Flash Data

You can set temporary data which is deleted when you access it as well using `flash` method:

```ts
this.session.flash('error', 'Invalid e-mail or password');
```

## Retrieving Data

For obtaining saved session data you have a `session.data` object:

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

## Deleting Data

You can also remove items from the session:

```ts
this.session.delete('email');
```

## Destroying Session

Sometimes you need to clear all session entries and completely unset the session, for example for logging out the user. Northle makes it super easy:

```ts
this.session.destroy();
```
