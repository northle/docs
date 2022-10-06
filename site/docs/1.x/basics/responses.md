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

You can easly attach response headers to the response:

```ts
this.response.header('x-custom-header', value);
```

## Cookies

You can set cookies sent to the browser using `cookie` method:

```ts
this.response.cookie('some-cookie', value);
```

## View Responses

To render a view, use the `view` function:

```ts
import { view } from '@northle/core';

// ...

return view('pages/dashboard');
```

This function returns a `ViewResponse` instance.

## JSON Responses

Although Northle automatically sets appropriate headers and response types based on returned data, sometimes you may want to explicitly define JSON reponse types.

```ts
return this.response.json({ data: users });
```

You can alternatively use `json` function:

```ts
import { json } from '@northle/core';

return json({ data: users });
```

## Redirect Responses

Although Northle automatically sets appropriate headers and response types based on returned data, sometimes you may want to explicitly define JSON reponse types.

```ts
return this.response.redirect('/login');
```

You can alternatively use `redirect` function:

```ts
import { redirect } from '@northle/core';

return redirect('/login');
```

This function returns a `RedirectResponse` instance.

## Download Responses

You can easly send files to the client using the `download` function:

```ts
import { download } from '@northle/core';

return download(path);
```

This function returns a `DownloadResponse` instance.

## Status Codes

Sometimes you may want to set response HTTP code, for example - `204 No Content` that indicates successful data processing.

```ts
this.response.status(204);
```

For this purpose you may feel convenient to use `StatusCode` enum:

```ts
import { StatusCode } from '@northle/core';

this.response.status(StatusCode.NoContent);
```
