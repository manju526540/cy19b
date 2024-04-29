const { defineConfig } = require("cypress");
const { env } = require("process");

module.exports = defineConfig({
  e2e: {
    baseUrl:"https://opensource-demo.orangehrmlive.com",
    
    // viewportWidth : 1920,
     //viewportHeight : 1080,
     retries:{openMode:0},
     pageLoadTimeout:6000,
    defaultCommandTimeout:20000,
    watchforfilechanges:false,
    video:true,
  //  videocomprision: 51,
      videosFolder:"cypress/manju",

    setupNodeEvents(on, config) {

      env:{

          "username"; "stagingusernamer",
          "password"; "admin123"

      
      }

      // implement node event listeners here

    },

  },

});
