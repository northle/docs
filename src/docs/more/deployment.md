---
title: Deployment
---

# Deployment

When your app is ready for production, it may be a time to deploy it on the server. You only have to set few things before you release the app.

## Server Requirements

To deploy your application on server, it has to satisfy Node version requirements:

- Node.js v18.3.0+

## Configuration

The most important thing you must change in confugiration is `DEVELOPMENT` option in `.env` file. By default, this option is set to `true`. It is responsible for displaying useful error messages during development.

```
DEVELOPMENT=false
```

::: warning
In production, this option should always be set to `false`. Otherwise, sensitive information about your code may leak.
:::

After changing the configuration, run the following command to generate new encryption key:

```shell
$ npm run key:generate
```

::: details Using pnpm or Yarn
```shell
$ pnpm run key:generate
$ yarn key:generate
```
:::

Now your app can be safely deployed on the web.
