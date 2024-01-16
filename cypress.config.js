const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    projectId: "sxocxy",
    video: true,
    setupNodeEvents(on, config) {
    },
    baseUrl: "https://backoffice-homo.connx.com.br/"
  },
    "viewportWidth": 1720,
    "viewportHeight": (1080*0.8435),
});
