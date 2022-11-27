---
title: Utilities
---

# Utilities

The framework comes with several predefined util functions that you can use in your app.

## Utility functions

| Function                       | Role                                                                                        |
| ------------------------------ | ------------------------------------------------------------------------------------------- |
| `csrfToken`                    | Get user's [security token](/docs/advanced/csrf-protection)                                 |
| `debounce(callback, timeout)`  | Delay function on multiple calls                                                            |
| `env(key, defaultValue)`       | Retrieve [environment config](/docs/basics/configuration#environment-configuration) entries |
| `range(start, end)`            | Generate array with numbers from given range                                                |
| `readJson(path)`               | Read and parse JSON file                                                                    |
| `runCommand(command, options)` | Execute shell command                                                                       |

Usage of these helpers is simple:

```ts
import { readJson } from '@northle/core';

const data = await readJson(path);
```

## Utility services

### Logger

Northle provides an utility `Logger` service that helps you debug your app with console messages.

```ts{1,5,9}
import { Logger, Service } from '@northle/core';

@Service()
export class UserService {
  constructor(private logger: Logger) {}

  public getUserInfo(user: User): void {
    if (!user.info) {
      this.logger.warn('Cannot retrieve user information');
    }

    // ...
  }
}
```

You can also use this service's counterpart functions:

```ts
import { log, logError, logInfo, logWarning } from '@northle/core';

log(message);
logError(message);
logInfo(message);
logWarning(message);
```

## Hooks

The framework comes with an alternative API for using services: React-inspired **hooks**.

```ts{1,5}
import { useSession } from '@northle/core';

// ...

const [session, setSession] = useSession();

const name = session('username');

setSession('email', email);
```
