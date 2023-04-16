const cucumber = require("cypress-cucumber-preprocessor").default;

const json = require('../data/shops.json');

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on('file:preprocessor', cucumber())
  console.log("on module exports")
  console.log('Your Cypress config is', config);
  console.log('Enviroments1 ------->>>>> ' + config.baseUrl)
  console.log('Enviroments ------->>>>> ' + config.env.shop)
  return config;
}