---
title: Localization
---

# Localization

Web applications are often multi-language. Northle has many built-in localization features so you can easly support multiple languages without any additional libraries.

## Setting app locale

You can set the default app locale in `src/main.ts` file:

::: code src/main.ts
```ts
const server = await createServer({
  config: {
    locale: 'en',// [!code ++]
  },

  // ...
});
```
:::

To change app locale during the request, use the `Translator` service:

::: code src/users/user.controller.ts
```ts
import { Translator, Request } from '@northle/core';// [!code ++]

@Controller()
export class UserController {
  constructor(
    private translator: Translator,// [!code ++]
    private request: Request,
  ) {}

  // ...
}
```
:::

Then you'll be able to change app's locale during a request:

::: code src/users/user.controller.ts
```ts{12}
const userLocale = this.request.locale();

// Set locale from list
if (['de', 'en', 'fr', 'pl'].includes(userLocale)) {
  await this.translator.setRequestLocale(userLocale);
}
```
:::

## Translations

Translations are stored in `JSON` files inside `/lang` directory. It does not exist by default, but you can create it if you're using localization features.

For example, if your app supports Polish language with English as default, just create a new `lang/pl.json` file with translations. To get translated contents, import the `trans` function and pass the default message to it:

```ts
import { trans } from '@northle/core';

const message = trans('Hello World');
```

::: code lang/pl.json
```json
{
  "Hello World": "Witaj Świecie"
}
```
:::

## View translations

You can also display translated text directly in view templates using `trans` function:

::: code src/app/views/home.html
```svelte
<h1>{{ trans('Hello World') }}</h1>
```
:::
