const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: `Stefan's Portfolio`, // Navigation and Site Title

  siteUrl: 'stefan.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  // siteLogo: '/logos/logo-48.png', // Used for SEO and manifest
  siteDescription: `Stefan's Portfolio`,
   // siteLogo: '/logos/logo-48.png', // Used for SEO and manifest
  siteDescription: `Stefan's Portfolio`,

  siteFBAppID: '123456789', // Facebook App ID
  userTwitter: '@stefan', // Twitter Username
  ogSiteName: 'stefan', // Facebook Site Name
  ogLanguage: 'de_DE', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
