module.exports = {
  siteUrl: "https://atelier.com.uy",
  generateRobotsTxt: true,
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  transform: async (config, url) => {
    if (url === "/") {
      return {
        loc: url,
        changefreq: "daily",
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }
    // Configuración por defecto para las demás URLs
    return {
      loc: url,
      changefreq: "daily",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};
