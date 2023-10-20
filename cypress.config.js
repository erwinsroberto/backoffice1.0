const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "sxocxy",
    video: true,
    setupNodeEvents(on, config) {
    },
    baseUrl: "https://backoffice-homo.connx.com.br/"
  },
    "viewportWidth": 1200,
    "viewportHeight": 800
});
