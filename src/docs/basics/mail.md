---
title: Mail
---

# Mail

Northle provides a fluent interface for sending emails from your application.

## Configuration

The configuration required by mail service is stored in the `.env` variables:

::: code .env
```
MAIL_HOST="smtp.gmail.com"
MAIL_PORT=587
MAIL_ADDRESS=your_account@email.com
MAIL_PASSWORD=
```
:::

## Sending emails

First, you need to inject `Mailer` to your controller or a service:

::: code src/mail/mail.controller.ts
```ts
import { Mailer } from '@northle/core';// [!code ++]

@Controller()
export class MailController {
  constructor(private mailer: Mailer) {}// [!code ++]
}
```
:::

In order to send an email, use the `send` method:

::: code src/mail/mail.controller.ts
```ts
@Controller()
export class MailController {
  // ...

  @Route.Post('/send')
  public async sendEmail() {
    await this.mailer.send({// [!code ++]
      to: 'recipient@email.com',// [!code ++]
      subject: 'Test email',// [!code ++]
      text: 'This is a test email.',// [!code ++]
    });// [!code ++]
  }
}
```
:::
