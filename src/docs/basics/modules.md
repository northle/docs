---
title: Modules
---

# Modules

The most basic pieces of Northle apps are modules. Module is a simple chunk of code in a separate directory in the `src/` folder. Each module should have a corresponding `.module.ts` file and represent single app feature part.

![Modules Scheme](./assets/modules.png)

## Module structure

Each module file has a similar structure:

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

### Imports

The `imports` field imports other modules into current one.

### Controllers

The `controllers` field defines a list of [controllers](/docs/basics/controllers-and-routes) associated with the module. This is required for proper route registering.

### Socket channels

Likewise, the `socketChannels` array declares websocket [channels](/docs/advanced/websocket).

### Importing controllers and channels

Every time you create new controller or a socket channel, you have to import and declare these classes in the proper field, for example:

::: code src/chat/chat.module.ts
```ts
import { Module } from '@northle/core';
import { ChatController } from './chat.controller';// [!code ++]
import { ChatChannel } from './chat.channel';// [!code ++]

@Module({
  imports: [],
  controllers: [
    ChatController,// [!code ++]
  ],
  socketChannels: [
    ChatChannel,// [!code ++]
  ],
})
export class ChatModule {}
```
:::

## Registering modules

Every module should be registered in the `src/main.ts` file in `modules` section like so:

::: code src/main.ts
```ts
import { AppModule } from './app/app.module';// [!code ++]
import { ChatModule } from './chat/chat.module';// [!code ++]

const server = await createServer({
  // ...

  modules: [
    AppModule,// [!code ++]
    ChatModule,// [!code ++]
  ],
});
```
:::
