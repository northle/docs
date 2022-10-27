---
title: Authorization
---

# Authorization

Along with authentication, Northle ships with additional security API for authorizing user actions. Authorization system in Northle is based on **gates**.

## Creating gates

To create new gate, the best option is to use CLI:

```shell
$ north make gate user
```

This command will generate a brand new gate in `src/users/user.gate.ts` file.
