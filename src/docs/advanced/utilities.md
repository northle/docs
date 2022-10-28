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
