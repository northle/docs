---
title: Configuration
---

# Configuration

App configuration in Northle is stored in two main files: `src/main.ts` and `.env`.

## Environment configuration

Default Northle projects contain a file called `.env`. This file is the place where things like database credentials and environment-specific settings should be stored. Northle automatically reads all `.env` variables. The default `.env` file contains following variables:

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

Any other, app-specific configuration is passed into the `createServer` function in `src/main.ts` file. The configuration looks like this by default:

::: code src/main.ts
```ts{4-9}
import { createServer } from '@northle/core';
import { AppModule } from './app/app.module';

const server = await createServer({
  config: {
    dev: {
      openBrowser: true,
    },
  },

  // ...
});

await server.start();
```
:::

To customize app settings, pass configuration options through the `config` entry.

### Available options

Server options implement the following interface:

```ts
interface ServerOptions {
  config?: {
    contentSecurityPolicy?: Record<string, string | string[]> | boolean;
    envFile?: string;
    locale?: string;
    logger?: boolean;
    cors?: {
      allowedHeaders?: string | string[];
      methods?: string | string[];
      origin: string | boolean | RegExp | string[] | RegExp[];
      credentials: boolean;
      maxAge: Integer;
    };
    dev?: {
      openBrowser?: boolean;
    };
  };
  modules: Constructor[];
}
```
