---
title: Responses
---

# Responses

Northle provides a fluent API for dealing with server responses. The framework provides several ways to return responses. Each server response is represented by `Response` object.

![Request Lifecycle](./assets/http-lifecycle.png)

## Response objects

To start using response API, inject the `Response` service by type-hinting it:

::: code src/posts/post.controller.ts
```ts
import { Controller, Response } from '@northle/core';// [!code ++]

@Controller()
class PostController {
  constructor(private response: Response) {}// [!code ++]
}
```
:::

## Basic responses

Northle automatically converts string data into HTML responses:

::: code src/posts/post.controller.ts
```ts
class PostController {
  @Route.Get('/')
  public index() {
    return 'Hello World!';
  }
}
```
:::

In addition to returning strings, you may also return arrays and objects. Northle converts objects into [JSON responses](/docs/basics/responses#json-responses).

## Redirects

You may sent redirect response using the `redirect` method:

```ts{2}
if (!logged) {
  return this.response.redirect('/login');
}

return view('pages/home');
```

You can alternatively use the `redirect` function returning a `RedirectResponse` instance:

```ts
import { redirect } from '@northle/core';

return redirect('/login');
```

### Redirect to previous location

You could also redirect back to the previous location:

```ts
this.response.redirectBack();
```

### Redirect with variables

You may additionally attach some data to the redirect:

```ts
return this.response.redirect('/login', {
  error: 'Invalid e-mail or password',
});
```

### Redirect status

In order to set HTTP status code, pass it as the last parameter:

```ts
import { StatusCode } from '@northle/core';

return this.response.redirect('/login', {}, StatusCode.Found);  // HTTP 302
```

### Permanent redirects

Northle gives you the ability to define routes redirecting from its URL to another using `@Redirect` decorator:

::: code src/app/app.controller.ts
```ts
import { Controller, Redirect } from '@northle/core';// [!code ++]

@Controller()
export class AppController {
  // ...

  @Route.Get('/some-route')
  @Redirect('https://another-website')// [!code ++]
  public show() {}
}
```
:::

## Headers

In order to attach response headers to the response call the `header` method:

```ts
this.response.header('x-custom-header', value);
```

## Cookies

To send cookies to the browser, use the `cookie` method:

```ts
this.response.cookie('some-cookie', value);
```

## Rendering views

In order to render a view, use the `view` function returning a `ViewResponse` instance:

```ts
import { view } from '@northle/core';

return view('pages/dashboard');
```

## JSON responses

Although Northle automatically sets appropriate headers and response types based on returned data, sometimes you may want to explicitly define JSON reponse types.

```ts
return this.response.json({ data: users });
```

You can alternatively use the `json` function:

```ts
import { json } from '@northle/core';

return json({ data: users });
```

## File downloads

To send files to the client, use the `download` function returning a `DownloadResponse` instance:

```ts
import { download } from '@northle/core';

return download(path);
```

## Status codes

Sometimes you may want to set response HTTP code, for example - `204 No Content` which indicates that data has been processed and there's no response body.

```ts
this.response.status(204);
```

For this purpose you may feel convenient to use `StatusCode` enum:

```ts
import { StatusCode } from '@northle/core';

this.response.status(StatusCode.NoContent);  // HTTP 204
```
