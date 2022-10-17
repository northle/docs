---
title: CSRF Protection
---

# CSRF Protection

[Cross-Site Request Forgery](https://en.wikipedia.org/wiki/Cross-site_request_forgery) (CSRF / XSRF) is a type of exploit relying on performing some actions by attacker on behalf of currently authenticated user without knowing their credentials.

## How Do CSRF Attacks Work?

Without CSRF protection, the attacker could submit an HTML form pointing to your application.

::: code src/posts/views/upload.html
```html
<form action="..." method="post">
  <input type="text" name="body" value="Malicious data">
</form>
```
:::

In the example above, when the form is submitted, authenticated user publishes a new post without their knowledge.

## Token Protection

To prevent CSRF attacks, Northle generates a unique token for every user session to protect your application. Anytime you define forms with method other than `GET` and `HEAD`, you have to add a hidden field containing generated token. Otherwise, you won't be able to pass the form and you will get `419 Invalid Token` error.

To add the token field to your template, just use the `[token]` directive:

::: code src/posts/views/upload.html
```html
<form action="..." method="post">
  [token]

  ...
</form>
```
:::

When this token is present, an unauthorized user is not able to do anything without your permissions.