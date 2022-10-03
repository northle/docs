---
title: Responses
---

# Responses

Northle provides a fluent API for dealing with server responses as well. Each response is represented by `Response` object.

## Response Objects

You can automatically inject `Response` object to controller by type-hintng it:

```ts{1,5}
import { Controller, Response } from '@northle/core'

@Controller()
class PostController {
  constructor(private response: Response) {}
}
```

## Redirects

You may sent redirect response using the `redirect` method:

```ts{6}
@Route.Get('/')
public index(): {
  // ...

  if (!user.logged) {
    return this.response.redirect('/login');
  }

  return view('pages/home');
}
```

You could also redirect back to the previous location:

```ts
this.response.redirectBack();
```

### Redirect with Variables

You may additionally attach some data to the redirect:

```ts
return this.response.redirect('/login', {
  error: 'Invalid e-mail or password',
});
```

## Headers

You can easly attach response headers:

```ts
this.response.header('x-custom-header', value);
```

## Cookies

You can set cookies sent to the browser using `cookie` method:

```ts
this.response.cookie('some-cookie', value);
```
