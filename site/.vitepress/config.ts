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
      'link', {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      'link', {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true,
      },
      'link', {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Roboto+Mono:wght@400&display=swap',
      },
    ],
  ],
  cleanUrls: 'without-subfolders',
  themeConfig: {
    siteTitle: 'Northle',
    logo: '/logo.png',
    outlineTitle: 'Table of Contents',
    outline: 'deep',
    nav: [
      {
        text: 'Docs',
        link: '/docs/introduction/introducing-northle',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/northle/project-template',
      },
      {
        text: 'More',
        items: [
          {
            text: 'Team',
            link: '/team',
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
            link: '/docs/introduction/introducing-northle',
          },
          {
            text: 'Getting Started',
            link: '/docs/introduction/getting-started',
          },
        ],
      },
      {
        text: 'Basics',
        items: [
          {
            text: 'Directory Structure',
            link: '/docs/basics/directory-structure',
          },
          {
            text: 'Configuration',
            link: '/docs/basics/configuration',
          },
          {
            text: 'Modules',
            link: '/docs/basics/modules',
          },
          {
            text: 'Controllers and Routing',
            link: '/docs/basics/controllers-and-routing',
          },
          {
            text: 'Requests',
            link: '/docs/basics/requests',
          },
          {
            text: 'Responses',
            link: '/docs/basics/responses',
          },
          {
            text: 'Views',
            link: '/docs/basics/views',
          },
          {
            text: 'Dependency Injection',
            link: '/docs/basics/dependency-injection',
          },
          {
            text: 'Services',
            link: '/docs/basics/services',
          },
          {
            text: 'Session',
            link: '/docs/basics/session',
          },
          {
            text: 'Mail',
            link: '/docs/basics/mail',
          },
        ],
      },
      {
        text: 'Advanced',
        items: [
          {
            text: 'Localization',
            link: '/docs/advanced/localization',
          },
          {
            text: 'HTTP Client',
            link: '/docs/advanced/http-client',
          },
          {
            text: 'Encryption and Hashing',
            link: '/docs/advanced/encryption-and-hashing',
          },
          {
            text: 'Validation',
            link: '/docs/advanced/validation',
          },
          {
            text: 'CSRF Protection',
            link: '/docs/advanced/csrf-protection',
          },
          {
            text: 'Websockets',
            link: '/docs/advanced/websockets',
          },
          {
            text: 'Testing',
            link: '/docs/advanced/testing',
          },
        ],
      },
      {
        text: 'Database',
        items: [
          {
            text: 'Schema',
            link: '/docs/database/schema',
          },
          {
            text: 'Queries',
            link: '/docs/database/queries',
          },
        ],
      },
      {
        text: 'CRUD Tutorial',
        items: [
          {
            text: 'Getting Started',
            link: '/docs/crud-tutorial/getting-started',
          },
          {
            text: 'Creating Todos',
            link: '/docs/crud-tutorial/creating-todos',
          },
        ],
      },
      {
        text: 'More',
        items: [
          {
            text: 'Style Guide',
            link: '/docs/more/style-guide',
          },
          {
            text: 'Deployment',
            link: '/docs/more/deployment',
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
