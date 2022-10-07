---
title: Localization
---

# Localization

Web applications are often multi-language. Northle has many built-in localization features so you can easly support multiple languages without any additional libraries.

## Setting App Locale

You can set the default app locale in `src/main.ts` file:

```ts{3}
const server = await createServer({
  config: {
    locale: 'en',
  },
  // ...
});
```

To change app locale during the request, use the `Translator` service:

```ts{1,6}
import { Translator, Request } from '@northle/core';

@Controller()
export class UserController {
  constructor(
    private translator: Translator,
    private request: Request,
  ) {}

  // ...
}
```

Then you'll be able to change app's locale during a request:

```ts{12}
const userLocale = this.request.locale();

// Set locale from list
if (['de', 'en', 'fr', 'pl'].includes(userLocale)) {
  this.translator.setLocale(userLocale);
}
```

## Translations

Translations are stored in `JSON` files inside `/lang` directory. It does not exist by default, but you can create it if you're using localization features.

For example, if your app supports Polish language with English as default, just create a new `lang/pl.json` file with translations. To get translated contents, import the `trans` function and pass the default message to it:

```ts
import { trans } from '@northle/core';

const message = trans('Hello World');
```

```json
// lang/pl.json
{
  "Hello World": "Witaj Świecie"
}
```

## View Translations

You can also display translated text directly in view templates using `trans` function:

```html
<h1>{trans('Hello World')}</h1>
```