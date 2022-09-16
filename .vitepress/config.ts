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
      { text: 'Docs', link: '/docs/introduction/northerjs-framework.html' },
      { text: 'Github', link: 'https://github.com/northerjs/norther' },
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
          { text: 'NortherJS Framework', link: '/docs/introduction/northerjs-framework.html' },
          { text: 'Getting Started', link: '/docs/introduction/getting-started.html' },
        ]
      },
      {
        text: 'Basics',
        items: [
          { text: 'Directory Structure', link: '/docs/basics/directory-structure.html' },
          { text: 'Configuration', link: '/docs/basics/configuration.html' },
          { text: 'Controllers and Routing', link: '/docs/basics/controllers-and-routing.html' },
        ]
      },
    ],
    editLink: {
      pattern: 'https://github.com/northerjs/docs/edit/main/docs/:path',
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