export default {
  outDir: './dist',
  title: 'Northle',
  lang: 'en-US',
  description: 'Modern, declarative framework for Node.js',
  head: [
    [
      'link', {
        rel: 'icon',
        href: '/logo.png',
      },
    ],
  ],
  themeConfig: {
    siteTitle: 'Northle',
    logo: '/logo.png',
    outlineTitle: 'Table of Contents',
    nav: [
      {
        text: 'Docs',
        link: '/docs/1.x/introduction/introducing-northle.html',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/northle/project-template',
      },
      {
        text: 'Version',
        items: [
          {
            text: '1.x alpha',
            link: '/docs/1.x/introduction/introducing-northle.md',
          },
        ],
      },
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/northle/project-template',
      },
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [
          {
            text: 'Introducing Northle',
            link: '/docs/1.x/introduction/introducing-northle.html',
          },
          {
            text: 'Getting Started',
            link: '/docs/1.x/introduction/getting-started.html',
          },
        ],
      },
      {
        text: 'Basics',
        items: [
          {
            text: 'Directory Structure',
            link: '/docs/1.x/basics/directory-structure.html',
          },
          {
            text: 'Configuration',
            link: '/docs/1.x/basics/configuration.html',
          },
          {
            text: 'Controllers and Routing',
            link: '/docs/1.x/basics/controllers-and-routing.html',
          },
          {
            text: 'Requests',
            link: '/docs/1.x/basics/requests.html',
          },
          {
            text: 'Responses',
            link: '/docs/1.x/basics/responses.html',
          },
          {
            text: 'Views',
            link: '/docs/1.x/basics/views.html',
          },
          {
            text: 'Dependency Injection',
            link: '/docs/1.x/basics/dependency-injection.html',
          },
          {
            text: 'Services',
            link: '/docs/1.x/basics/services.html',
          },
          {
            text: 'Session',
            link: '/docs/1.x/basics/session.html',
          },
          {
            text: 'Mail',
            link: '/docs/1.x/basics/mail.html',
          },
        ],
      },
      {
        text: 'Advanced',
        items: [
          {
            text: 'Localization',
            link: '/docs/1.x/advanced/localization.html',
          },
          {
            text: 'Encryption and Hashing',
            link: '/docs/1.x/advanced/encryption-and-hashing.html',
          },
          {
            text: 'Validation',
            link: '/docs/1.x/advanced/validation.html',
          },
          {
            text: 'CSRF Protection',
            link: '/docs/1.x/advanced/csrf-protection.html',
          },
          {
            text: 'Websockets',
            link: '/docs/1.x/advanced/websockets.html',
          },
          {
            text: 'Testing',
            link: '/docs/1.x/advanced/testing.html',
          },
        ],
      },
      {
        text: 'Database',
        items: [
          {
            text: 'Schema',
            link: '/docs/1.x/database/schema.html',
          },
          {
            text: 'Queries',
            link: '/docs/1.x/database/queries.html',
          },
        ],
      },
      {
        text: 'CRUD Tutorial',
        items: [
          {
            text: 'Getting Started',
            link: '/docs/1.x/crud-tutorial/getting-started.html',
          },
          {
            text: 'Creating Todos',
            link: '/docs/1.x/crud-tutorial/creating-todos.html',
          },
        ],
      },
      {
        text: 'Deployment',
        items: [
          {
            text: 'App Deployment',
            link: '/docs/1.x/deployment/app-deployment.html',
          },
        ],
      },
    ],
    editLink: {
      pattern: 'https://github.com/northle/docs/tree/main/:path',
      text: 'Contribute to this page',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022 Dominik Rajkowski'
    },
  },
  markdown: {
    theme: 'one-dark-pro',
  },
}