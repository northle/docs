---
title: Views
---

# Views

Northle comes with handy built-in view templating engine. Views is your app are placed in `/views` directory and have the `*.html` extension.

## Templates

Northle's template engine allows you to create loops, conditionals and variable interpolation.

An example view template may look like this:

```html
<h1>{{ title }}</h1>

<main>
  [each (post in posts)]
    <article class="post">
      {{ post.content }}
    </article>
  [/each]

  [if (!posts.length)]
    <p>There are no posts yet.</p>
  [/if]
</main>
```

## Rendering a View

To render a view use `render` function. The type returned from this function is `ViewResponse`.

```ts
// Render the `src/app/views/login.html` template
return view('./views/login');
```

## Variables

To render passed variables use the bracket syntax:

```ts
return view('./views/home', {
  message: 'Hello user!',
});
```

Then in template:

```html
<h1>{{ message }}</h1>
```

::: tip NOTE
View variables are automatically escaped from HTML to prevent XSS attacks.
:::

### Displaying Brackets

Some frontend frameworks like [Vue](https://vuejs.org) use the same bracket syntax for displaying data. To display double bracket signs put `@` inside the expression:

```html
{{@ message }}
```

Or use `[raw]` directive to display entire blocks without parsing it by view compiler:

```html
[raw]
  <p>In Vue we use {{ message }} syntax.</p>
[/raw]
```

## Directives

Northle's template engine is based on directives - a special-syntax statements used for building dynamic output.

All directives like foreach loops use the square brackets and slash syntax:

```html
[each (item in [1, 2, 3])]
  <div>{{ item }}</div>
[/each]
```

`[each]` directive provides an `$index` variable holding current iteration index (starting from `0`):

```html
[each (comment in comments)]
  <div>Comment number: {{ $index + 1 }}</div>
[/each]
```

### `if` and `else`

The most basic directives you should know are conditional blocks. You may use two directives: `if` and `else`:

```html
[if (!posts.length)]
  <p>There are no posts yet.</p>
[/if]
```

```html
[if (user.isLogged)]
  <a href="/logout">Log out</a>
[else]
  <a href="/login">Log in</a>
[/if]
```

They act just like `if/else` statements in TypeScript - when the condition is true, the content inside will be rendered. Otherwise, the `[else]` block will show up.

### `each`

Sometimes you may need to render data using loop, for example - to show posts list. You can use `[each]` template directive to iterate over array or object:

```html
[each (item in [1, 2, 3])]
  <div>{{ item }}</div>
[/each]
```

```html
[each (post in posts)]
  <article>
    <h2>{{ post.title }}</h2>

    <p>{{ post.content }}</p>
  </article>
[/each]
```

### `method`

Northle lets you to use all HTTP methods in forms thanks to `[method]` directive. Just pass a method name and you'll be able to use `PUT`, `PATCH`, `DELETE` and other methods in HTML forms.

```html
<form action="/login" method="post">
  [method('PATCH')]

  ...
</form>
```

Note that the form must have `method="post"` attribute set.

### `json`

Sometimes you need to pass some data from backend to frontend using HTML `<script />` tag. You can accomplish that by converting data to JSON with `[json]` directive:

```ts
return view('home', {
  userData: {
    name: 'User',
    email: 'user@email.com',
  },
});
```

```html
<script>
  window.userData = [json(userData)];
</script>
```

To pretty-print JSON data using tabs and newlines, add boolean parameter:

```ts
[json(userData, true)];
```

### `include`

Northle provides support for partials. You can split your view into smaller pieces using `[include]` directive:

```html
<main>
  [include('partials/content')]
</main>
```

This statement will render `./partials/content.html` template inside `<main />` tag.

### `token`

For every user session Northle generates a unique token to protect your application from [Cross-Site Request Forgery](https://en.wikipedia.org/wiki/Cross-site_request_forgery) attacks. Anytime you define HTML forms with method other than `GET` and `HEAD`, you have to add a hidden field containing generated token. Otherwise, you won't be able to pass the form and you'll get `419` error.

To add the token field just use the `[token]` directive:

```html
<form action="/login" method="post">
  [token]

  ...
</form>
```

### `raw`

Sometimes you may want to left some parts of code uncompiled. For example, when you are using some frontend framework, you may want not to parse the code with template engine. That's why Northle comes with a `[raw]` directive:

```html
[raw]
  {{ content }}
[/raw]
```

With this directive the above code will render as normal HTML, without displaying `content` variable.

### `vite`

Northle provides a built-in intergration with [Vite](https://vitejs.dev) asset bundler which supports HMR. You may use `[vite]` directive to add your frontend scripts and styles:

```html
<head>
  ...

  [vite('main.js')]
</head>
```

## Functions

You can call functions inside your templates:

```html
<p>Logged user: {{ session('username') }}</p>
```

```html
<h1>{{ trans('Welcome to the chat app') }}</h1>
```

## Custom Error Pages

You can also customize default error pages like `404 Not Found` or `500 Internal Server Error`.

Just create a file with error code as its name, like `views/errors/404.html`. That file should contain your custom page template. If the file exists, Northle will serve it as the `404` error page. Otherwise, the default one will be served.