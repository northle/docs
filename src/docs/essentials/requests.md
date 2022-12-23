---
title: Requests
---

# Requests

Northle provides a fluent API for dealing with web requests. The framework provides several ways to return responses. Each client request is represented by `Request` object.

![Request Lifecycle](./assets/http-lifecycle.png)

## Request objects

To start using response API, inject the `Request` service by type-hinting it:

::: code src/posts/post.controller.ts
```ts
import { Controller, Request } from '@northle/core';// [!code ++]

@Controller()
class PostController {
  constructor(private request: Request) {}// [!code ++]
}
```
:::

## Request methods

Northle supports all available HTTP verbs for handling web requests along with [WebDAV](https://www.ibm.com/docs/en/i/7.1?topic=concepts-webdav) methods.

| HTTP Method | Role                          |
| ----------- | ----------------------------- |
| `COPY`      | Copy the resource             |
| `DELETE`    | Delete the resource           |
| `GET`       | Get the resource content      |
| `HEAD`      | Get request headers           |
| `LOCK`      | Lock the resource             |
| `MKCOL`     | Create resource collection    |
| `MOVE`      | Move the resource             |
| `OPTIONS`   | Get server options            |
| `POST`      | Post a resource               |
| `PROPFIND`  | Find resource property        |
| `PROPPATCH` | Edit resource property        |
| `PATCH`     | Update the resource partially |
| `PUT`       | Update the resource           |
| `TRACE`     | Perform a trace call          |
| `UNLOCK`    | Unlock the resource           |

## Route params

To get matched route URL parameters, use `params` property:

::: code src/posts/post.controller.ts
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
:::

Alternatively you can read parameter values using method params:

::: code src/posts/post.controller.ts
```ts{5}
class PostController {
  // ...

  @Route.Get('/users/:id')
  public show(id: string) {
    // ...
  }
}
```
:::

## Query params

In order to get URL query string entries, use the `queryString` property:

```ts
// URL: /search?name=riddler
const { name } = this.request.queryString;  // 'riddler'

// or
const name = this.request.query('name');
```

## Headers

To get request headers, use the `header` method:

```ts
const header = this.request.header('x-requested-with');
```

## Cookies

To read cookies sent by the user, use the `cookies` property:

```ts
const { darkMode } = this.request.cookies;

// or
const darkMode = this.request.cookie('darkMode');
```

## Form data

To retrieve and process incoming form data, use the `body` property:

::: code src/users/user.controller.ts
```ts{6}
class UserController {
  // ...

  @Route.Post('/users')
  public async store() {
    const { username, password } = this.request.body;

    await this.db.user.create({
      // ...
    });
  }
}
```
:::

Alternatively, you may use the `input` function:

```ts
const name = this.request.input('username');
```

### Typed forms

You can also provide an interface to define the shape of form request body:

::: code src/users/user.controller.ts
```ts{7,8}
interface RegistrationForm {
  username?: string;
  email: string;
  password: string;
}

const form = this.request.form<RegistrationForm>();

// form.name: string | undefined

const name = form.username ?? 'User';
```
:::

::: warning
Form data is always type of `string` or `undefined`, so typed forms should be used only for defining shape of data and optional fields.
:::

## Files

Accessing files in Northle is simple. The framework provides a handy file upload and storage API:

::: code src/users/user.controller.ts
```ts{6}
class UserController {
  // ...

  @Route.Post('/users')
  public async store() {
    const { avatar } = this.request.files;

    await avatar?.[0]?.store('uploads/avatars', `${username}-avatar.jpg`);
  }
}
```
:::

## Detecting AJAX

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

Read more about [localization](/docs/advanced/localization) and language features.

## Nonce

Northle automatically generates [nonce](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/nonce) string on every request. You can obtain it with the `nonce` method:

```ts
const nonce = this.request.nonce();
```

The framework provides a handy `nonce` view function for rendering script nonces:

```svelte
<script nonce="{{ nonce() }}"></script>
```

## Method spoofing

When you're building a RESTful API, you may encounter a problem - HTML forms don't support HTTP methods other than `GET` and `POST`.

Northle lets you to use these methods thanks to `[method]` template directive. Just pass a method name and you'll be able to use methods like `PATCH` and `DELETE` in HTML forms (it's called method spoofing):

::: code src/posts/views/upload.html
```html{2}
<form action="/login" method="post">
  [method('PATCH')]

  ...
</form>
```
:::

::: tip NOTE
Note that the form must include `method="post"` attribute to work.
:::

## Making requests

Northle lets you execute HTTP requests within your app using the [HttpClient](/docs/essentials/http-client) service.
