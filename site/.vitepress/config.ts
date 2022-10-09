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
  cleanUrls: 'without-subfolders',
  themeConfig: {
    siteTitle: 'Northle',
    logo: '/logo.png',
    outlineTitle: 'Table of Contents',
    nav: [
      {
        text: 'Docs',
        link: '/docs/1.x/introduction/introducing-northle',
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
            link: '/docs/1.x/introduction/introducing-northle',
          },
          {
            text: 'Getting Started',
            link: '/docs/1.x/introduction/getting-started',
          },
        ],
      },
      {
        text: 'Basics',
        items: [
          {
            text: 'Directory Structure',
            link: '/docs/1.x/basics/directory-structure',
          },
          {
            text: 'Configuration',
            link: '/docs/1.x/basics/configuration',
          },
          {
            text: 'Controllers and Routing',
            link: '/docs/1.x/basics/controllers-and-routing',
          },
          {
            text: 'Requests',
            link: '/docs/1.x/basics/requests',
          },
          {
            text: 'Responses',
            link: '/docs/1.x/basics/responses',
          },
          {
            text: 'Views',
            link: '/docs/1.x/basics/views',
          },
          {
            text: 'Dependency Injection',
            link: '/docs/1.x/basics/dependency-injection',
          },
          {
            text: 'Services',
            link: '/docs/1.x/basics/services',
          },
          {
            text: 'Session',
            link: '/docs/1.x/basics/session',
          },
          {
            text: 'Mail',
            link: '/docs/1.x/basics/mail',
          },
        ],
      },
      {
        text: 'Advanced',
        items: [
          {
            text: 'Localization',
            link: '/docs/1.x/advanced/localization',
          },
          {
            text: 'Encryption and Hashing',
            link: '/docs/1.x/advanced/encryption-and-hashing',
          },
          {
            text: 'Validation',
            link: '/docs/1.x/advanced/validation',
          },
          {
            text: 'CSRF Protection',
            link: '/docs/1.x/advanced/csrf-protection',
          },
          {
            text: 'Websockets',
            link: '/docs/1.x/advanced/websockets',
          },
          {
            text: 'Testing',
            link: '/docs/1.x/advanced/testing',
          },
        ],
      },
      {
        text: 'Database',
        items: [
          {
            text: 'Schema',
            link: '/docs/1.x/database/schema',
          },
          {
            text: 'Queries',
            link: '/docs/1.x/database/queries',
          },
        ],
      },
      {
        text: 'CRUD Tutorial',
        items: [
          {
            text: 'Getting Started',
            link: '/docs/1.x/crud-tutorial/getting-started',
          },
          {
            text: 'Creating Todos',
            link: '/docs/1.x/crud-tutorial/creating-todos',
          },
        ],
      },
      {
        text: 'Deployment',
        items: [
          {
            text: 'App Deployment',
            link: '/docs/1.x/deployment/app-deployment',
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