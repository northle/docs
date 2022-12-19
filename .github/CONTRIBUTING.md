<div align="center">
  <img src="../.github/logo-full.png" width="220">

  <h1>Northle Docs Contributing Guide</h1>

  <p align="center">A short instruction guide for contributing to Northle.js framework docs.</p>

  <h4>
    <a href="../README.md">Documentation</a>
    <span> · </span>
    <a href="CONTRIBUTING.md">Contributing</a>
  </h4>
</div>

<!-- omit in toc -->
### 📓 Table of Contents

- [Creating Pull Requests](#creating-pull-requests)
- [Development Setup](#development-setup)

## Creating Pull Requests

Contributing in this repository is based on GitHub's [Pull Requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests). Before creating a pull request, please read through the following rules:

- Always provide a short description to your pull request. You can also open an [Issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues) before working on it.
- Commit messages must follow a specific convention - they must be short and first letter must be uppercased, for example: `git commit -m "Add feature x"`.

## Development Setup

You need to clone the docs repository and install its dependencies:

```shell
$ git clone https://github.com/northle/docs.git

$ cd docs
$ npm install
$ npm run start:dev
```

After this, run `npm run start:dev`. Docs site will be available on `http://localhost:5173`.
