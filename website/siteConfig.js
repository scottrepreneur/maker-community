/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Community Development', // Title for your website.
  full_title: 'Fostering growth in the Dai ecosystem',
  tagline: 'Fostering growth in the Dai ecosystem',
  url: 'https://community-development.makerdao.com', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'mkr-comm',
  organizationName: 'makerdao',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: 'governance', label: 'Governance' },
    { doc: 'risk', label: 'Risk' },
    { doc: 'faqs', label: 'FAQs' },
    { doc: 'contributing', label: 'Contribute!' },
    { languages: true },
  ],
  translationRecruitingLink: 'https://makerdao.crowdin.com/maker-community-development',

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/mkr-logo.png',
  footerIcon: 'img/mkr-logo.png',
  favicon: 'img/mkr-logo.png',

  /* Colors for website */
  colors: {
    primaryColor: '#1aaa9b',
    secondaryColor: '#f5b13d',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  algolia: {
    apiKey: process.env.ALGOLIA_KEY,
    indexName: 'maker-comm-dev',
    algoliaOptions: {} // Optional, if provided by Algolia
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  // copyright: `Copyright © ${new Date().getFullYear()} MakerDAO`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,
  // Remove 'docs' from documentation URL
  docsUrl: '',
  // Adds Edit button to docs
  editUrl: 'https://github.com/makerdao/community/tree/master/',
  

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
