---
title: HTTP Client
---

# HTTP Client

Web applications often need to fetch some data by HTTP requests. Northle ships with a handy `HTTP Client` service that helps creating API requests.

## Get Started

To get started with the client, import and inject `HttpClient` service to the controller or other service:

```ts{1,5}
import { HttpClient } from '@northle/core';

@Controller()
export class MovieController {
  constructor(private http: HttpClient) {}
}
```

## Making Requests

To fetch some data from an endpoint use one of available HTTP methods (`get`, `patch`, `post`, `put`, `options`, `trace`, `head`, and `delete`):

```ts{3}
const apiUrl = 'https://some-api.com/videos';

const movies = await this.http.get<Movie[]>(apiUrl);
```

All these methods are generic so you can specify response type:

```ts
interface Movie {
  title: string;
  url: string;
  duration: number;
}

await this.http.get<Movie[]>(apiUrl);
```

::: tip NOTE
Response type declaration is only build-time check so you should handle errors in case the response is invalid.
:::