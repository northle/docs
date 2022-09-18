export default {
  outDir: './dist',
  title: 'Norther',
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
    siteTitle: 'Norther',
    logo: '/logo.png',
    outlineTitle: 'Table of Contents',
    nav: [
      {
        text: 'Docs',
        link: '/docs/1.x/introduction/northerjs-framework.html',
      },
      {
        text: 'Github',
        link: 'https://github.com/northerjs/norther',
      },
      {
        text: 'Version',
        items: [
          {
            text: '1.x alpha',
            link: '/docs/1.x/introduction/northerjs-framework.md',
          },
        ]
      },
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/northerjs/norther',
      },
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [
          {
            text: 'Introducing Norther',
            link: '/docs/1.x/introduction/introducing-norther.html',
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
            text: 'Views',
            link: '/docs/1.x/basics/views.html',
          },
          {
            text: 'Dependency Injection',
            link: '/docs/1.x/basics/dependency-injection.html',
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
      pattern: 'https://github.com/northerjs/docs/1.x/edit/main/docs/1.x/:path',
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