---
title: Requests
---

# Requests

Northle provides a fluent API for dealing with web requests. Each web request is represented by `Request` object.

## Request Objects

Northle supports all basic HTTP methods for handling web requests: `GET`, `POST`, `PUT`, `PATCH`, `OPTIONS`, `TRACE`, and `DELETE` along with [WebDAV](https://www.ibm.com/docs/en/i/7.1?topic=concepts-webdav) methods.

You can automatically inject `Request` object to controller by type-hintng it:

```ts{1,5}
import { Controller, Request } from '@northle/core'

@Controller()
class PostController {
  constructor(private request: Request) {}
}
```

## Route Parameters

You can get matched route URL parameters:

```ts{4,6}
class PostController {
  // ...

  @Route.Get('/users/:id')
  public show() {
    const { id } = this.request.params;

    return `User id: ${id}`;
  }
}
```

Alternatively you can read parameter values using method parameters:

```ts{5}
class PostController {
  // ...

  @Route.Get('/users/:id')
  public show(id: string) {
    // ...
  }
}
```

## Query String Params

You can get URL query string entries as well:

```ts
// URL: /search?name=riddler
const { name } = this.request.query;  // 'riddler'
```

## Form Input Data

To retrieve and process incoming form data, use the `request.data`:

```ts{6}
class UserController {
  // ...

  @Route.Post('/users')
  public async store() {
    const { username, password } = this.request.data;

    await this.db.user.create({
      // ...
    });
  }
}
```

## Headers

To get request headers use `header` method:

```ts
const header = this.request.header('x-requested-with');
```

## Cookies

To read cookies sent by the user, use `request.cookies`:

```ts
const { darkMode } = this.request.cookies;
```

## Detecting AJAX Requests

You may check if request was made by AJAX (AJAX requests should have set `x-requested-with` header with `XMLHttpRequest` value):

```ts
if (!this.request.ajax()) {
  return 'This route only accepts AJAX requests';
}
```

## Locale

To get client's locale use the `locale` method:

```ts
// 'en', 'pl' etc.
const locale = this.request.locale();
```

Read more about [localization](/docs/1.x/advanced/localization) and language features.

## Method Spoofing

When you're building a RESTful API, you may encounter a problem - HTML forms don't support HTTP methods other than `GET` and `POST`.

Northle lets you to use these methods thanks to `[method]` template directive. Just pass a method name and you'll be able to use methods like `PATCH` and `DELETE` in HTML forms (it's called method spoofing):

```html
<form action="/login" method="post">
  [method('PATCH')]

  ...
</form>
```

::: tip NOTE
Note that the form must include `method="post"` attribute to work.
:::
