---
title: Configuration
---

# Configuration

App configuration in Northle is stored in two main files: `src/main.ts` and `.env`.

## Environment Settings

The default Northle project contains a `.env` file. This is the place where database credentials and environment-specific settings should be stored. Northle automatically reads all `.env` variables. The default `.env` file looks like this:

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

::: warning
Remember that the `.env` file should always be ignored by version control systems like Git. It contains your app credentials that shouldn't be stored in a public repository.
:::

## Reading `.env` Variables

You can retrieve environment variables using `env` function:

```ts
import { env } from '@northle/core';

console.log(env('PORT')); // 8000
```

::: info
Note that `env` function automatically casts numbers and booleans. If you read variables using `process.env` object, data will always have string type.
:::

## Example `.env` File

Developers often use version control systems to work in teams. We should remember not to store any files like `.env` in repositories for security reasons (it contains database passwords and things like that). That's why we should exclude these files from version control and only publish an example `.env.example` file synced with the original one.

## App Configuration

Any other, app-specific configuration is passed into the `createServer` function in `src/main.ts` file. The file looks like this by default:

```ts
import { createServer } from '@northle/core';
import { AppModule } from './app/app.module';

const server = await createServer({
  config: {
    dev: {
      openBrowser: true,
    },
  },
  modules: [
    AppModule,
  ],
});

await server.start();
```

As you can see, we can pass configuration settings through `config` option. Available options are shown below:

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
