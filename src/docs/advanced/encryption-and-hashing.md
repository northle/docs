---
title: Encryption and Hashing
---

# Encryption and Hashing

Secure web apps require good encryption and hashing algorithms. Northle provides a simple two-way encryption interface.

## Configuration

To provide best security, your app should have unique key for encrypting data. The `ENCRYPT_KEY` is stored in the `.env` file and it's generated automatically when you're creating new project. You can regenerate it using CLI command:

```shell
$ npm run key:generate
```

::: details Using pnpm or Yarn
```shell
$ pnpm run key:generate
$ yarn key:generate
```
:::

## Overview

To get started with encryption, you should inject `Encrypter` service:

::: code src/users/user.controller.ts
```ts
import { Encrypter } from '@northle/core';// [!code ++]

@Controller()
export class UserController {
  constructor(
    private encrypter: Encrypter,// [!code ++]
    private request: Request,
  ) {}

  // ...
}
```
:::

## Encryption

To encrypt a string, use the `encrypt` method:

::: code src/users/user.service.ts
```ts{6}
@Service()
export class UserService {
  public encryptUsername(): string {
    const { name } = this.request.body;

    return this.encrypter.encrypt(name);
  }
}
```
:::

## Decryption

In order to decrypt the cipher back, use `decrypt` method:

```ts
const decrypted = this.encrypter.decrypt(cipher);
```

## Hashing

Hashing is an another way to encrypt data (in one-way). For example, it is useful for storing passwords in database.

```ts
const hashedPassword = this.encrypter.hash(password);
```

Note that you can only compare two hashes without the ability to decrypt hashed strings. To check if supplied string (password for example) is the same as hash, use the `compareHash` method:

```ts
// `true` or `false`
const passwordCorrect = this.encrypter.compareHash(password, hashedPassword);
```

## UUID generation

The `Encrypter` service can generate unique UUID as well:

```ts
const randomId = this.encrypter.uuid();
```
