const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const config = require('./config.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const cssModuleExtractor = new ExtractTextPlugin('css/modules.css');
const cssBaseExtractor =  new ExtractTextPlugin('css/base.css');

console.log('environment: ' + config.env);

const strips = config.env == 'production' ?  [
    'console.log',
    'console.info',
    'console.warn',
    'console.error',
    'console.assert'
  ] : [];

let webpackConfig = {
  context: path.resolve(__dirname, config.srcDir),
  entry: {
    'js/bundle.js': './js/index.jsx',
    'css/base.css': './css/index.scss',
  },
  output: {
    path: path.resolve(__dirname, config.dstDir),
    publicPath: config.dstDir,
    filename: '[name]',
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          configFile: './.eslintrc.js',
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
             loader: 'strip-loader',
             options: {
               strip: strips
             }
          },
          { loader: 'react-hot-loader' },
          { loader: 'babel-loader' },
        ],
      },
      {
        test: /\.scss$/,
        exclude: [
          /node_modules/,
          path.resolve(__dirname, config.srcDir + 'css')
        ],
        use: cssModuleExtractor.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                minimize: true,
              }

            },
            { loader: 'postcss-loader' },
            { loader: 'sass-loader' },
          ]
        })
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, config.srcDir + 'css'),
        use: cssBaseExtractor.extract({
          use: [
            { loader: 'css-loader',
              options: {
                minimize: true
              }
            },
            { loader: 'postcss-loader' },
            { loader: 'sass-loader' },
          ]
        })
      },
      {
        test: /\.(otf|png|jpg)$/,
        exclude: [
          /node_modules/,
          path.resolve(__dirname, config.srcDir + 'css'),
        ],
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: config.imgDir + '[name].[hash].[ext]',
              context: path.resolve(__dirname, config.srcDir),
              publicPath: '/'
            },
          },
        ]
      },
      {
        test: /\.(otf|png|jpg)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, config.srcDir, 'css'),
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[path][name].[hash].[ext]',
              context: path.resolve(__dirname, config.srcDir),
              publicPath: '/'
            },
          },
        ]
      }
    ]
  },
  resolve: {
    alias: {
      Common: path.resolve(__dirname, '../common/'),
    },
    modules: [
      path.resolve(__dirname, config.srcDir, 'js/'),
      'node_modules'
    ]
  },
  devServer: {
    inline: true,
    hot: true,
    publicPath: '/',
    contentBase: config.dstDir
  },
  devtool: config.env != 'production' ? '#inline-source-map' : false,
  node: {
    fs: 'empty'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(config.env),
      VERSION: JSON.stringify(config.version),
      PushSenderId: JSON.stringify(config.pushSenderId),
      EnablePush: JSON.stringify(config.enablePush)
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          require('autoprefixer')({
            browsers: ['last 2 versions']
          })
        ]
      }
    }),
    cssModuleExtractor,
    cssBaseExtractor,
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, config.srcDir, 'html/index.html'),
        filename: 'index.html',
        inject: false
      })
  ],
}

if(config.env == 'production'){
  webpackConfig['plugins'].push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      exclude: /apppot.js/
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin()
  );
}

module.exports = webpackConfig;
