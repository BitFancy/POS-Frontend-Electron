const baseConfig = require("./webpack.base.config.js");

module.exports = {
  ...baseConfig,
  mode: 'production',
  target: 'electron-main',
  node: {
    __dirname: false,
  },
  entry: {
    'electron.main': './public/electron.js',
  },
  output: {
    ...baseConfig.output,
    filename: `static/js/[name].js`,
  },
};
