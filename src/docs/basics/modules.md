---
title: Modules
---

# Modules

The most basic piece of Northle application are modules. Module is a simple class responsible for organizing code and dividing it into smaller chunks. Each module should represent one app feature.

![Modules Scheme](./assets/modules.png)

## Module structure

Each module has a similar structure:

::: code src/posts/post.module.ts
```ts
import { Module } from '@northle/core';

@Module({
  imports: [],
  controllers: [],
  socketChannels: [],
})
export class PostModule {}
```
:::

### `imports`

The `imports` field declares other modules that are included.

### `controllers`

The `controllers` field defines a list of HTTP [controllers](/docs/basics/controllers-and-routing) associated with the module. This is required for proper route registering.

### `socketChannels`

Likewise, the `socketChannels` array declares websocket [channels](/docs/advanced/websockets).

Therefore, every time you create new controller or socket channel, you have to import and declare these classes in the proper field, for example:

::: code src/chat/chat.module.ts
```ts{2,3,8,11}
import { Module } from '@northle/core';
import { ChatController } from './chat.controller';
import { ChatChannel } from './chat.channel';

@Module({
  imports: [],
  controllers: [
    ChatController,
  ],
  socketChannels: [
    ChatChannel,
  ],
})
export class ChatModule {}
```
:::

## Module registration

Every module should be registered in the `src/main.ts` file like so:

::: code src/main.ts
```ts{1,2,8,9}
import { AppModule } from './app/app.module';
import { ChatModule } from './chat/chat.module';

const server = await createServer({
  // ...

  modules: [
    AppModule,
    ChatModule,
  ],
});
```
:::
