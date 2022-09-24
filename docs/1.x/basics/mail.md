---
title: Mail
---

# Mail

Northle provides a fluent interface for sending emails from your application.

## Configuration

All configuration needed for mailing is stored in the `.env` variables:

```
MAIL_HOST="smtp.gmail.com"
MAIL_PORT=587
MAIL_ACCOUNT=your_account@email.com
MAIL_PASSWORD=
```

## Sending Emails

First, we need to inject mailer to the controller or service:

```ts{5}
import { Mailer } from '@northle/core';

@Controller()
export class MailController {
  constructor(private mailer: Mailer) {}

  // ...
}
```

To send an email, use mailer's `send` method:

```ts{7-11}
@Controller()
export class MailController {
  // ...

  @Route.Post('/send')
  public async sendEmail() {
    await this.mailer.send({
      to: 'recipient@email.com',
      subject: 'Test email',
      text: 'This is a test email.',
    });
  }
}
```
