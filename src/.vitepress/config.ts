import Container from 'markdown-it-container';

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
    outlineTitle: 'Table of contents',
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
          {
            text: 'HTTP Client',
            link: '/docs/basics/http-client',
          },
        ],
      },
      {
        text: 'Advanced',
        items: [
          {
            text: 'Authentication',
            link: '/docs/advanced/authentication',
          },
          {
            text: 'Localization',
            link: '/docs/advanced/localization',
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
      pattern: 'https://github.com/northle/docs/tree/main/src/:path',
      text: 'Suggest changes',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022 Dominik Rajkowski'
    },
  },
  markdown: {
    theme: 'one-dark-pro',
    config: (markdown: any) => {
      const pattern = /^code\s+(.*)$/;

      markdown.use(Container, 'code', {
        validate: (params: string) => params.trim().match(pattern),
        render: (tokens: any[], id: string) => {
          const match = tokens[id].info.trim().match(pattern);

          return tokens[id].nesting === 1
            ? `<div class="snippet-wrapper">
                <div class="snippet-file">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>

                  ${match[1]}
                </div>`
            : '</div>\n';
        }
      })
    }
  },
}
