export default {
  title: 'Norther',
  lang: 'en-US',
  description: 'Modern, declarative framework for Node.js',
  themeConfig: {
    siteTitle: 'Norther',
    logo: '/logo.png',
    outlineTitle: 'Table of Contents',
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
        ]
      },
    ],
    editLink: {
      pattern: 'https://github.com/northerjs/docs/edit/main/docs/:path',
      text: 'Contribute to this page',
    },
  }
}