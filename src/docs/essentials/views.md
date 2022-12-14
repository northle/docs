---
title: Views
---

# Views

Northle comes with handy built-in view template engine. View templates in your app are placed in `/views` directories inside modules and have the `*.html` extension.

## Template engine

Northle's template engine allows you to create loops, conditionals and variable interpolation.

An example view template may look like this:

::: code src/posts/views/index.html
```svelte
<main>
  [each (post in posts)]
    <article class="post">{{ post.content }}</article>
  [/each]

  [if (!posts.length)]
    <p>There are no posts yet.</p>
  [/if]
</main>
```
:::

## Rendering a view

To render a view (return it from a controller), use the `render` function:

::: code src/auth/auth.controller.ts
```ts
// Render the `src/auth/views/login.html` view
return view('./views/login');
```
:::

You can specify view path as relative or absolute:

::: code src/app/app.controller.ts
```ts
// Render the `src/app/views/home.html` view
return view('./views/home');

// Render the `views/home.html` view
return view('/home');
```
:::

## Data variables

To render passed variables use the bracket syntax:

```ts
return view('./views/home', {
  message: 'Hello user!',
});
```

Then in template:

```svelte
<h1>{{ message }}</h1>
```

::: tip NOTE
View variables are automatically escaped from HTML to prevent XSS attacks.
:::

### Displaying brackets

Some frontend frameworks like [Vue](https://vuejs.org) use the same bracket syntax for displaying data. To display double bracket signs put `@` inside the expression:

```svelte
{{@ message }}
```

Or use the `[raw]` directive to render entire blocks without parsing them by view compiler:

```svelte
[raw]
  <p>In Vue we use {{ message }} syntax.</p>
[/raw]
```

## Directives

Northle's template engine is based on directives - a special-syntax statements used for building dynamic output.

All directives like foreach loops use the square brackets and slash syntax:

```svelte
[each (item in [1, 2, 3])]
  <div>{{ item }}</div>
[/each]
```

### `each`

Sometimes you may need to render data using loop, for example - to show posts list. You can use `[each]` template directive to iterate over arrays:

```svelte
[each (post in posts)]
  <article>{{ post.content }}</article>
[/each]
```

Northle lets you to iterate through objects as well:

```svelte
[each (value in { name: 'James', surname: 'Bond' })]
  <div>{{ $key }}: {{ value }}</div>
[/each]
```

#### Additional variables

The `[each]` directive exposes several additional variables you can use:

| Variable | Type               | Value                                          |
| -------- | ------------------ | ---------------------------------------------- |
| `$even`  | `boolean`          | `true` if iteration is even, otherwise `false` |
| `$first` | `boolean`          | `true` if item is first, otherwise `false`     |
| `$index` | `number`           | Current iteration index (starting from `0`)    |
| `$key`   | `string \| number` | Current object or array key                    |
| `$last`  | `boolean`          | `true` if item is last, otherwise `false`      |
| `$odd`   | `boolean`          | `true` if iteration is odd, otherwise `false`  |

```svelte
[each (item in items)]
  <div>Item no. {{ $index + 1 }}: {{ item }}</div>
[/each]
```

### `if` and `else`

The most basic directives you should know are conditional blocks. You may use two directives: `if` and `else`:

```svelte
[if (!posts.length)]
  <p>There are no posts yet.</p>
[/if]
```

```svelte
[if (isUserAuthenticated)]
  <a href="/logout">Log out</a>
[else]
  <a href="/login">Log in</a>
[/if]
```

They act just like `if-else` statements in TypeScript - when the condition is true, the content inside will be rendered. Otherwise, the `[else]` block will show up.

### `error`

When you're using form [validation](/docs/advanced/validation), you can display eventual error messages using the `[error]` directive.

It accepts two forms: with custom content and empty (Northle will automatically return error message, e.g. "Field 'email' must be longer than 6 characters").

```svelte{6-8,12}
<form action="/users" method="post">
  ...

  <input type="text" name="username">

  [error('username')]
    Username is invalid.
  [/error]

  <input type="email" name="email">

  [error('email')]
</form>
```

Note that the form must have `method="post"` attribute set.

### `method`

Northle lets you to use all HTTP methods in forms thanks to `[method]` directive. Just pass a method name and you'll be able to use `PUT`, `PATCH`, `DELETE` and other methods in HTML forms.

```svelte{2}
<form action="/login" method="post">
  [method('PATCH')]

  ...
</form>
```

Note that the form must have `method="post"` attribute set.

### `json`

Sometimes you need to pass some data from backend to frontend using HTML `<script />` tag. You can accomplish that by converting data to JSON with `[json]` directive:

::: code src/posts/post.controller.ts
```ts
return view('home', {
  userData: {
    name: 'User',
    email: 'user@email.com',
  },
});
```
:::

::: code src/posts/views/index.html
```svelte
<script>
  window.userData = [json(userData)];
</script>
```
:::

To pretty-print JSON data using tabs and newlines, add boolean parameter:

::: code src/posts/views/index.html
```ts
[json(userData, true)];
```
:::

### `include`

Northle provides support for partials. You can split your view into smaller pieces using `[include]` directive:

::: code src/posts/views/index.html
```svelte
<main>
  [include('partials/content')]
</main>
```
:::

This statement will render `./partials/content.html` template inside the `<main>` tag.

### `csrfToken`

For every user session Northle generates a unique token to protect your application from [Cross-Site Request Forgery](https://en.wikipedia.org/wiki/Cross-site_request_forgery) attacks.

Anytime you define HTML forms with method other than `GET` and `HEAD`, you need to add a hidden field containing generated token. Otherwise, you won't be able to pass the form and you'll get the `419 Invalid Token` error.

To add the token field just use the `[csrfToken]` directive:

::: code src/posts/views/upload.html
```svelte{2}
<form action="/login" method="post">
  [csrfToken]

  ...
</form>
```
:::

### `raw`

Sometimes you may want to left some parts of code uncompiled. For example, when you are using some frontend framework, you may want not to parse the code with template engine. That's why Northle comes with a `[raw]` directive:

```svelte
[raw]
  {{ content }}
[/raw]
```

With this directive the above code will render as normal HTML, without displaying `content` variable.

### `switch`

Just like `switch` statements in JavaScript and TypeScript, you can use them in your views:

```svelte
<div class="user-role">
  [switch (role)]
    [case ('user')]
      <p>You are a user</p>
    [/case]

    [case ('admin')]
      <p>You are an administrator</p>
    [/case]

    [case ('moderator')]
      <p>You are a moderator</p>
    [/case]

    [default]
      <p>Invalid role</p>
    [/default]
  [/switch]
</div>
```

### `stack` and `push`

You can push view blocks to named stacks which will be rendered anywhere in your template using `stack` and `push` directives:

```svelte
<head>
  ...

  [stack('scripts')]
</head>
```

```svelte
[push('scripts')]
  <script src="/lib.js"></script>
[/push]

<!-- Somewhere else: -->

[push('scripts')]
  <script src="/app.js"></script>
[/push]
```

### `vite`

Northle provides a built-in intergration with [Vite](https://vitejs.dev) asset bundler which supports HMR. You may use `[vite]` directive to add your frontend scripts (it accepts TypeScript as well) and CSS styles:

```svelte
<head>
  ...

  [vite('main.ts')]
</head>
```

## Functions

You can use functions inside your templates. Northle provides several global functions that you can call in a view:

| Function     | Return type      | Return value                                                  |
| ------------ | ---------------- | ------------------------------------------------------------- |
| `csrfToken`  | `string \| null` | CSRF protection [token](/docs/advanced/csrf-protection)       |
| `flash<T>`   | `T \| null`      | Session [flash data](/docs/essentials/session#flash-data)         |
| `nonce`      | `string`         | Request generated [nonce](/docs/essentials/requests#nonce) string |
| `oldInput`   | `string`         | Previous request form data                                    |
| `range`      | `number[]`       | Range of numbers                                              |
| `session<T>` | `T \| null`      | [Session](/docs/essentials/session) data                          |
| `trans`      | `string`         | Localization [translations](/docs/advanced/localization)      |

For example:

```svelte
<p>Logged user: {{ session('username') }}</p>
```

```svelte
<h1>{{ trans('Welcome to the chat app') }}</h1>
```

## Constants

Northle exposes few global constants you can use in your views:

| Constant          | Type     | Value                     |
| ----------------- | -------- | ------------------------- |
| `NODE_VERSION`    | `string` | Node.js version           |
| `NORTHLE_VERSION` | `string` | Northle framework version |

```svelte
<h1>This app is running on Northle v{{ NORTHLE_VERSION }}</h1>
```

## Comments

To add a comment that will not be renderer in a view, use the following syntax:

```svelte
{{-- This is a comment --}}
```

## Custom error pages

You can also customize default error pages like `404 Not Found` or `500 Internal Server Error`.

Just create a file with error code as its name, like `views/errors/404.html`. That file should contain your custom page template. If the file exists, Northle will serve it as the `404` error page. Otherwise, the default one will be served.

Alternatively you can create your own erro logic with [route handlers](/docs/essentials/controllers-and-routes#error-handler-routes).
