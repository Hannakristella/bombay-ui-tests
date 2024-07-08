const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    //baseUrl: process.env.CYPRESS_BASE_URL || 'https://bombaylobby.com/',
    baseUrl: 'https://demo.live88.io/operator/live88demo/live88-lobby/fun',

    specPattern: 'cypress/integration/**/*.js',  

    setupNodeEvents(on, config) {
    },
    
    defaultCommandTimeout: 10000,
    watchForFileChanges: false,
    video: true,
  },
});
