const fsExtra = require('fs-extra');
const baseConfig = require('./webpack.base.config.js');
const mainConfig = require('./webpack.main.config.js');

const isEnvDevelopment = process.env.NODE_ENV === 'development';
if (!isEnvDevelopment) fsExtra.emptyDirSync('./build');

module.exports = isEnvDevelopment
  ? baseConfig
  : [baseConfig, mainConfig];
