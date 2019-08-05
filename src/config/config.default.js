/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  config.static = {
    prefix: '/',
    dir: process.cwd() + '/public'
  };
  config.rundir = process.cwd() + '/run';
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1565013658591_3761';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
