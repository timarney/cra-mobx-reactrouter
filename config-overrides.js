const rewireMobX = require("react-app-rewire-mobx");
const rewirePreact = require("react-app-rewire-preact");

/* config-overrides.js */
module.exports = function override(config, env) {
  config = rewirePreact(rewireMobX(config, env));
  return config;
};
