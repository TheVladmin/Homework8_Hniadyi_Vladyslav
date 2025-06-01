const { defineConfig } = require("cypress");
const {faker} = require("@faker-js/faker");
const { allureCypress } = require('allure-cypress/reporter')
const { platform, release, version } = require('node:os');

module.exports = defineConfig({
  reporter: 'mochawesome',
  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        environmentInfo: {
          os_platform: platform(),
          os_release: release(),
          os_version: version(),
          node_version: process.version,
        },
        resultsDir: "allure-results",
      })
      return config;
    },
    baseUrl: "https://api.clickup.com/api/v2",
    env: {
      token: 'pk_200518265_UYAI0U1ZG3E7VEGYIMB4VGQ1BZ7XQISV',
      team_id: '90151237972',
      goalName: faker.internet.username(),
      goalDescription: faker.internet.username(),
      goalName2: faker.internet.username(),
      goalDescription2: faker.internet.username(),
      goalName3: faker.internet.email(),
      goalDescription3: faker.internet.email(),
      goal_id: 'goal_1_id',
      allureLogCypress: false,
      allureReuseAfterSpec: true,
    }
  },
});

