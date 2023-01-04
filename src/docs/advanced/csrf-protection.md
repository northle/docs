---
title: CSRF Protection
---

# CSRF Protection

[Cross-Site Request Forgery](https://en.wikipedia.org/wiki/Cross-site_request_forgery) (CSRF or XSRF) is a type of attack relying on performing actions by the attacker on behalf of currently authenticated user using unsecured endpoints.

## How do CSRF attacks work?

Without CSRF protection, the attacker could prepare a simple HTML form pointing to your application.

::: code src/posts/views/upload.html
```html
<form action="https://your-app.com/posts" method="post">
  <input type="text" name="body" value="I don't like ice cream">
</form>
```
:::

When the form is submitted (for example, when attacker sends the user a link to this form and they open it), the authenticated user wil publish a new post without their knowledge.

## Token protection

To prevent CSRF attacks, Northle generates a unique token for every user session to protect your application.

Anytime you define forms with method other than `GET` and `HEAD`, you have to add a hidden `_csrf` field containing generated token. Otherwise, you won't be able to pass the form and you will get `419 Invalid Token` error.

To add the CSRF token field to your template, just use the `[csrfToken]` directive:

::: code src/posts/views/upload.html
```html
<form action="..." method="post">
  [csrfToken]// [!code ++]

  ...
</form>
```
:::

When this token is present, an unauthorized user is not able to do anything without user knowledge.
