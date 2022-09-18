---
title: Validation
---

# Validation

Your app may often need form request data validation. Norther ships with a built-in validator with many useful validation rules.

## Getting Started

To be able to validate request, inject the `Validator` service:

```ts{1,6}
import { Request, Validator } from '@norther/core';

@Controller()
export class PostController {
  constructor(
    private request: Request,
    private validator: Validator,
  ) {}

  // ...
}
```

## Usage

In order to check if data is valid, invoke the `assert` method. Example validation may look like this:

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
