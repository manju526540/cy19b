const { defineConfig } = require('cypress');
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl:"https://opensource-demo.orangehrmlive.com",

    
     //viewportWidth : 1920,
     //viewportHeight : 1080,
     retries:{openMode:1},
     pageLoadTimeout: 60000,
    defaultCommandTimeout:40000,
    //specPattern: "**/*.feature",
    watchforfilechanges: true,
    chromeWebSecurity: false,
    video:true,
    //  videocomprision: 51,
      videosFolder:"cypress/manju",
    //specPattern: "cypress/e2e/**/*.raju.js",

    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
      allureWriter(on, config);
      return config;

      on('task', {downloadFile})
      require('cypress-mochawesome-reporter/plugin')(on);

      env:{

        "username";"Admin",
        "password"; "admin123"
        "cookivalve";"orangehrm=fe5c665519bb1c7a6d9b6b75fb6b68d7"
      }
  


      

      // implement node event listeners here

    },

  },

});
