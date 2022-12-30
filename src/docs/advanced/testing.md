---
title: Testing
---

# Testing

Testing your application is very important. Northle comes with [Vitest](https://vitest.dev) testing package by default.

## Writing tests

All test files end with `.test.ts`. They are typically placed in app modules or in the `/tests` directory.

Vitest tests are very readable and simle. To create a test suite, use the `describe` and `it` functions:

::: code src/posts/post.test.ts
```ts
import { describe, it } from 'vitest';

describe('posts module', () => {
  it('allows to create a post', () => {
    // ...

    expect(result).toBe(true);
  });
});
```
:::

For more examples read the [Vitest docs](https://vitest.dev).

## Running tests

Run `npm test` command to run tests and see results:

::: terminal
```shell
npm test

Test Files  2 failed | 8 passed (10)
     Tests  2 failed | 12 passed (14)
  Start at  22:00:00
  Duration  8.42s (transform 816ms, setup 1ms, collect 6.42s, tests 2.02s)
```
:::
