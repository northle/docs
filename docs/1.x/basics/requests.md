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

```ts{3}
@Route.Get('/users/:id')
public show() {
  const { id } = this.request.params;

  return `User id: ${id}`;
}
```

Alternatively you can obtain params using method parameters:

```ts{2}
@Route.Get('/users/:id')
public show(id: string) {
  // ...
}
```

## Query String Params

You can get URL query string entries as well:

```ts
// URL: /search?name=user1
const { name } = this.request.query;  // 'user1'
```

## Form Input Data

To retrieve and process incoming form data, use the `request.data` getter:

```ts
@Route.Post('/users')
public store() {
  const { username, password } = this.request.data;

  this.db.user.create(...);

  // ...
}
```

## Headers

You may easly get request headers using `header` method:

```ts
const header = this.request.header('x-requested-with');
```

## Cookies

You may want to get cookies sent by the user. Northle makes is super easy:

```ts
const { darkMode } = this.request.cookies;
```

## Detecting AJAX Requests

You may check if request was made by AJAX (AJAX requests should have set `x-requested-with` header with `XMLHttpRequest` value).

```ts
if (!this.request.ajax()) {
  return 'This route only accepts AJAX requests';
}
```

## Locale

Northle lets you to easly get user browser's locale:

```ts
// 'en', 'pl' etc.
const locale = this.request.locale();
```

Read more about [localization](/docs/1.x/advanced/localization.html) and language features.

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
