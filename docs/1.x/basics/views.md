---
title: Views
---

# Views

Northle comes with handy built-in view templating engine. Views is your app are placed in `/views` directory and have the `*.north.html` extension.

## Templates

Northle's template engine allows you to create loops, conditionals and variable interpolation.

The example template with conditional rendering block looks like this:

```html
<h1>{title}</h1>

<nav class="menu">
  <a href="/">Home</a>

  [if logged]
    <a href="/logout">Log out</a>
  [/if]
</nav>
```

## Rendering a View

```ts
// Render the `src/app/views/login.north.html` template
return render('./views/login');
```

## Variables

To render passed variables use the `{variable}` syntax:

```ts
return render('./views/home', {
  message: 'Hello user!',
});
```

```html
<h1>{message}</h1>
```

::: tip NOTE
View variables are automatically escaped from HTML to prevent XSS attacks.
:::

## Directives

Northle's template engine is based on directives - a special-syntax statements used for building dynamic output.

All directives like foreach loops use the square brackets and slash syntax:

```html
[each item in [1, 2, 3]]
  <div>{item}</div>
[/each]
```

### `if` and `else`

The most basic directives you should know are conditional blocks. You may use two directives: `if` and `else`:

```html
[if !posts.length]
  <p>There are no posts yet</p>
[/if]
```

```html
[if logged]
  <a href="/logout">Log out</a>
[/if]
```

They act just like `if` statements in TypeScript - when the condition is true, the content inside will be rendered.

### `each`

Sometimes you may need to render data using loop, for example - to show posts list. You can use `[each]` template directive to iterate over array or object:

```html
[each item in [1, 2, 3]]
  <div>{item}</div>
[/each]
```

```html
[each post in posts]
  <article>
    <h2>{post.title}</h2>

    <p>{post.content}</p>
  </article>
[/each]
```

### `raw`

Sometimes you may want to left some parts of code uncompiled. For example, when you are using some frontend framework, you may want not to parse the code with template engine. That's why Northle comes with a `[raw]` directive:

```html
[raw]
  {content}
[/raw]
```

With this directive the above code will render `'{content}'` as normal HTML, without replacing it with passed variable.

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

Sometimes you need to pass some data from backend to frontend using HTML `<script />` tag. You can accomplish that by converting data to JSON with `[json]` template directive:

```ts
return render('home', {
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

### `token`

For every user session Northlegenerates a unique token to protect your application from [cross-site request forgery](https://en.wikipedia.org/wiki/Cross-site_request_forgery) attacks. Anytime you define HTML forms with method other than `GET` and `HEAD`, you have to add a hidden field containing generated token. Otherwise, you won't be able to pass the form and you'll get 419 error.

To add the token field just use the `[token]` directive:

```html
<form action="/login" method="post">
  [token]
  ...
</form>
```

## Functions

You can call functions inside your templates:

```html
<p>Logged user: {session('username')}</p>
```

```html
<h1>{trans('Welcome on chat app')}</h1>
```

## Custom Error Pages

You can also customize default error pages like `404 Not Found` or `500 Internal Server Error`.

All you have to do is to create a file with error code as its name, for example: `views/errors/404.north.html`. That file should contain your custom template. When this file exists, Northle will serve it as the 404 error page. Otherwise, the default one will be served.
