---
title: Configuration
---

# Configuration

App configuration in Northle is stored in two main files: `src/main.ts` and `.env`.

## Environment configuration

A default Northle project contains a file called `.env`. This file is the place where things like database credentials and environment-specific settings should be stored. Northle automatically reads all `.env` variables. The default `.env` file contains following variables:

::: code .env
```
DEVELOPMENT=true
PORT=8000
HOST=localhost
ENCRYPT_KEY=

DATABASE_URL="mysql://root:@localhost/northle"

SESSION_LIFETIME=7 # days
FIELD_LIMIT=10 # MB
UPLOAD_LIMIT=100 # MB

MAIL_HOST="smtp.gmail.com"
MAIL_PORT=587
MAIL_ADDRESS=
MAIL_PASSWORD=
```
:::

::: warning
The `.env` file should always be ignored by version control systems due security issues.
:::

## Reading environment data

You can read environment variables using `env` generic function:

::: code src/main.ts
```ts
import { env } from '@northle/core';

const port = env<boolean>('PORT');  // 8000
const host = env<string | null>('HOST');  // 'localhost' or null
```
:::

::: tip
The `env` function automatically casts values to numbers, booleans and other types. If you read variables using `process.env` object, data will always have the string type.
:::

### Example `.env` file

Developers often use version control systems like Git to work in teams. You should remember not to store `.env` files in repositories for security reasons (they contain database passwords etc.). That's why we should exclude these files from version control and only publish an example `.env.example` file synced with the original one.

## App configuration

Any other, app-specific configuration is passed into the `createServer` function in `src/main.ts` file. The configuration looks like this:

::: code src/main.ts
```ts{8-10}
import { createServer } from '@northle/core';
import { AppModule } from './app/app.module';

const server = await createServer({
  modules: [
    AppModule,
  ],
  config: {
    env: '.env',
  },
});

await server.start();
```
:::

To customize app settings, pass configuration options through the `config` field.

### Content Security Policy

You can easly adjust Content Security Policy (CSP) settings:

::: code src/main.ts
```ts{5-7}
const server = await createServer({
  // ...

  config: {
    contentSecurityPolicy: {
      'script-src-attr': `'unsafe-inline'`,
    },
  },
});
```
:::

### CORS

You can modify CORS config as well:

::: code src/main.ts
```ts{5-9}
const server = await createServer({
  // ...

  config: {
    cors: {
      allowedHeaders: ['x-some-header'],
      credentials: false,
      origin: false,
    },
  },
});
```
:::

### Env file name

Backend apps are environment-dependent, so you can split your `.env` file into `.env.production` etc. You can specify env config file name using the `env` option:

::: code src/main.ts
```ts{5}
const server = await createServer({
  // ...

  config: {
    env: '.env',  // '.env.development' etc.
  },
});
```
:::

### Locale

To set a default app locale, use the `locale` option:

::: code src/main.ts
```ts{5}
const server = await createServer({
  // ...

  config: {
    locale: 'pl',
  },
});
```
:::

### Logger

You can disable console logs with setting the `logger` option to `false`:

::: code src/main.ts
```ts{5}
const server = await createServer({
  // ...

  config: {
    logger: env<boolean>('DEVELOPMENT'),
  },
});
```
:::
