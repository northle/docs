---
title: Websockets
---

# Websockets

Modern applications often need an established two-way server connection for receiving real-time data. The best option for that purpose is using Websocket connection. Northle provides a powerful channel API for dealing with websockets.

## Broadcasting channels

First though, you should be introduced to a concept of broadcasting channels. Channel is a single class used for transmitting events with authorization logic.

::: code src/chat/chat.channel.ts
```ts
import { Authorizer, Channel } from '@northle/core';

@Channel('chat/:id')
export class ChatChannel implements Authorizer {
  public passesUser(): boolean {
    return true;
  }
}
```
:::

String argument passed to decorator is channel name with dynamic parameter. The `passesUser` method is used to determine whether authenticated user is authorized to join the channel on the client side.

## Emitting events on server

Emitting events on the server side can be done using `Broadcaster` service:

::: code src/chat/chat.controller.ts
```ts
import { Controller, Broadcaster } from '@northle/core'; // [!code ++]

@Controller()
export class ChatController {
  constructor(private broadcaster: Broadcaster) {} // [!code ++]
}
```
:::

To emit events with some payload use `emit` method:

```ts
this.broadcaster.emit('message', `chat/${chatId}`);
```

## Creating chat app

We can create an example chat app. Let's define some routes:

::: code src/chat/chat.controller.ts
```ts
@Controller()
export class ChatController {
  constructor(private broadcaster: Broadcaster) {}

  @Route.Get('/chat')
  public index() {
    return view('./views/chat');
  }

  @Route.Post('/chat')
  public store() {
    const { message } = this.request.data;

    this.broadcaster.emit('message', 'chat/1', message);

    return null;
  }
}
```
:::

## Receiving events in browser

Now we are able to receive broadcasts on the client side using [socket.io](https://socket.io) library. The example implementation you can see below:

::: code src/chat/views/index.html
```html
<main>
  <h1>Chat app</h1>

  <form id="chat-form">
    <input type="text" name="message" placeholder="Enter your message...">

    <button>Send</button>
  </form>
</main>

<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.5.2/socket.io.min.js"></script>

<script>
  const socket = io();
  const chatId = 1;

  const form = document.querySelector('#chat-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);

    fetch('/chat', {
      method: 'post',
      body: data,
    });
  });

  socket.on(`chat/${chatId}/message`, (message) => {
    console.log(`Message: ${message}`);
  });
</script>
```
:::

Open the browser's console and write something. Incoming messages should be logged to console.

If you're using NPM, you can install `socket.io` package:

```shell
$ npm install socket.io-client
```

```ts
import { io } from 'socket.io-client';
```
