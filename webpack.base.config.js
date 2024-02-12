const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const resolve = require('resolve');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// const publicPath = "/reactjs/template/";
const isEnvDevelopment = process.env.NODE_ENV === 'development';
// const publicPath = isEnvDevelopment ? '/' : './';
const publicPath = '/';

// Make sure any symlinks in the project folder are resolved:
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = {
  mode: 'development',
  //  externals: {
  //   // require("jquery") is external and available
  //   //  on the global var jQuery
  //   "jquery": "jQuery"
  // },
  entry: {
    app: './src/index.js',
  },
  output: {
    // The build folder.
    path: resolveApp('build'),
    // Generated JS file names (with nested folders).
    // There will be one main bundle, and one file per asynchronous chunk.
    // We don't currently advertise code splitting but Webpack supports it.
    filename: 'static/js/[name].[hash:8].js',
    chunkFilename: 'static/js/[name].[hash:8].chunk.js',
    // We inferred the "public path" (such as / or /my-project) from homepage.
    publicPath: publicPath,
    hotUpdateChunkFilename: 'hot/hot-update.js',
    hotUpdateMainFilename: 'hot/hot-update.json',
  },
  devServer: {
    contentBase: './src/index.js',
    host: 'localhost',
    compress: true,
    port: 8002, // port number
    historyApiFallback: true,
    quiet: true,
  },
  externals: {
    // global app config object
    config: JSON.stringify({
      apiUrl: '',
      imageapiUrl: '',

      publicPath: publicPath,
    }),
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      Assets: path.resolve(__dirname, 'src/assets/'),
    },
    modules: [path.join(__dirname, 'js/helpers'), 'node_modules'],
  },
  module: {
    rules: [
      {
        // config for es6 jsx
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        // config for sass compilation
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000',
      },
      //  { // config for fonts
      //    test: /\.(woff|woff2|eot|ttf|otf)$/,
      //    use: [
      //      {
      //        loader: 'file-loader',
      //        options: {
      //          outputPath: 'fonts',
      //        }
      //      }
      //    ],
      //  }
    ],
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  performance: {
    hints: process.env.NODE_ENV === 'production' ? 'warning' : false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
      favicon: './public/favicon.ico',
    }),
    new MiniCssExtractPlugin({
      // plugin for controlling how compiled css will be outputted and named
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css',
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
  ],
};
