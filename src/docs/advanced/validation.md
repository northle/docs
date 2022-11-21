---
title: Validation
---

# Validation

Web apps always need some kind of form data validation. Northle ships with a built-in validator with many useful validation rules.

![Validation Scheme](./assets/validation.png)

## Getting started

To be able to validate a request, use injected `Validator` service:

::: code src/users/user.controller.ts
```ts
import { Request, Validator } from '@northle/core';// [!code ++]

@Controller()
export class UserController {
  constructor(
    private request: Request,
    private validator: Validator,// [!code ++]
  ) {}

  // ...
}
```
:::

## Validation data

In order to check if request input data is valid, invoke the `assert` method. Example validation may look like this:

::: code src/users/user.controller.ts
```ts
this.validator.assert({
  name: {
    minLength: 3,
    maxLength: 25,
  },
  age: {
    min: 18,
  },
  email: {
    email: true,
  },
});
```
:::

If any of declared rules is not satisfied, Northle will not pass the request and `400 Bad Request` status code will be sent back along with error messages.

## Available rules

Below you have listed all available validator rules:

| Rule              | Type             | Description                                                                                                    |
| ----------------- | ---------------- | -------------------------------------------------------------------------------------------------------------- |
| `accepted`        | `boolean`        | The field must be `true`, `'yes'`, `'on'`, or `1`                                                              |
| `date`            | `string \| Date` | The field must be a valid date                                                                                 |
| `doesntEndWith`   | `string`         | The field must not end with the given value                                                                    |
| `doesntStartWith` | `string`         | The field must not start with the given value                                                                  |
| `endsWith`        | `string`         | The field must end with the given value                                                                        |
| `email`           | `boolean`        | The field must be a valid email                                                                                |
| `float`           | `boolean`        | The field must be a floating point number                                                                      |
| `in`              | `string[]`       | The field must be included in the given list of values                                                         |
| `integer`         | `boolean`        | The field must be an integer number                                                                            |
| `ip`              | `boolean`        | The field must be a valid IP address                                                                           |
| `ipv4`            | `boolean`        | The field must be a valid IPv4 address                                                                         |
| `length`          | `Integer`        | The field must have a length of the given value                                                                |
| `lowercase`       | `boolean`        | The field must have a value that is a lowercased string                                                        |
| `max`             | `Integer`        | The field must be less than or equal to given value                                                            |
| `maxLength`       | `Integer`        | The field must have a length less than or equal to given value                                                 |
| `min`             | `Integer`        | The field must be greater than or equal to given value                                                         |
| `minLength`       | `Integer`        | The field must have a length greater than or equal to given value                                              |
| `notIn`           | `string[]`       | The field must not be included in the given list of values                                                     |
| `numeric`         | `boolean`        | The field must be a numeric value                                                                              |
| `otherThan`       | `string`         | The field must be other than the given value                                                                   |
| `regexp`          | `RegExp`         | The field must be match the given RegExp pattern                                                               |
| `required`        | `boolean`        | The field must be present and not empty                                                                        |
| `sameAs`          | `string`         | The field must be same as the given value                                                                      |
| `startsWith`      | `string`         | The field must start with the given value                                                                      |
| `uppercase`       | `boolean`        | The field must have a value that is an uppercased string                                                       |
| `username`        | `boolean`        | The field must be a valid username and must not start with a number. Allowed characters are: `[a-zA-Z0-9 _-]`) |
