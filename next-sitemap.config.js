const siteUrl = 'https://webcafe.africa';
module.exports = {
  siteUrl,
  exclude: ['/admin'],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
  sourceDir: './build',
};
