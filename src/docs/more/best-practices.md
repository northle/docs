---
title: Best Practices
---

# Best Practices

Northle comes with some common rules and practices for writing and organising code. We encourage you to follow our conventions if you find them suitable.

## Security

- Use the latest version of Northle
- Do not modify framework's source code
- Always protect your apps from [CSRF attacks](/docs/advanced/csrf-protection)

## Naming conventions

We prefer the following rules for naming things:

| Kind             | Convention                           | Example               |
| ---------------- | ------------------------------------ | --------------------- |
| File             | kebab-case, followed by content type | `post.service.ts`     |
| Module           | PascalCase, singular form            | `PostModule`          |
| Module directory | kebab-case, plural form              | `src/posts`           |
| Controller       | PascalCase, singular form            | `PostController`      |
| Channel          | PascalCase, singular form            | `ChatChannel`         |
| Service          | PascalCase                           | `EmailService`        |
| Enum             | PascalCase, singular form            | `OrderStatus`         |
| Enum member      | PascalCase, singular form            | `OrderStatus.Pending` |
| Class            | PascalCase                           | `User`                |
| Database table   | camelCase, singular form             | `user`                |
| Variable         | camelCase                            | `userData`            |
| Class member     | camelCase                            | `posts`               |
