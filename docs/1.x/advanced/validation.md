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

## Available Rules

Below you have listed all available validator rules:

```ts
interface ValidationRules {
  accepted?: boolean;
  date?: string | Date;
  doesntEndWith?: string;
  doesntStartWith?: string;
  endsWith?: string;
  email?: boolean;
  float?: boolean;
  in?: string[];
  integer?: boolean;
  ip?: boolean;
  ipv4?: boolean;
  length?: Integer;
  max?: Integer;
  maxLength?: Integer;
  min?: Integer;
  minLength?: Integer;
  notIn?: string[];
  numeric?: boolean;
  otherThan?: string;
  regexp?: RegExp;
  required?: boolean;
  sameAs?: string;
  startsWith?: string;
  username?: boolean;
}
```
