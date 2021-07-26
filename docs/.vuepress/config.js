const path = require("path");

module.exports = {
  title: "cj0x39e",
  dest: path.resolve(__dirname, "../../dist"),
  themeConfig: {
    author: "cj0x39e",
  },
  head: [
    [
      "script",
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-7SC90XJ6N8",
        async: true,
      },
    ],
    [
      "script",
      {},
      `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-7SC90XJ6N8');
      `,
    ],
  ],
  plugins: [
    [
      "vuepress-plugin-zooming",
      {
        selector: ".theme-container img",
        delay: 1000,
        options: {
          bgColor: "black",
          zIndex: 10000,
        },
      },
    ],
    require("./md5-link"),
  ],
};
