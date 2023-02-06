const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const root = path.join(__dirname, '/');
const defaultEnv = {
  NODE_ENV: 'development',
};

module.exports = ({ NODE_ENV: mode } = defaultEnv) => {
  const isProd = mode === 'production';

  return {
    mode,
    entry: ['./src/application.js'],
    output: {
      publicPath: '/',
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.[contenthash:6].js',
      assetModuleFilename: 'resources/[name].[contenthash:6][ext]',
      clean: true,
    },
    resolve: {
      extensions: ['.js', '.jsx', '.scss'],
      alias: {
        modernizr: path.resolve(__dirname, '.modernizrrc'),
        router: path.resolve(__dirname, 'src/router'),
        pages: path.resolve(__dirname, 'src/views/pages'),
        components: path.resolve(__dirname, 'src/views/components'),
        utils: path.resolve(__dirname, 'src/utils'),
        common: path.resolve(__dirname, 'src/common'),
        'react-components': path.resolve(__dirname, 'src/react-components'),
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          options: {
            cacheDirectory: path.join(root, '.cache'),
          },
        },
        {
          test: /\.(jade|pug)$/,
          loader: 'pug-loader',
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.(sa|sc)ss$/,
          exclude: path.resolve(__dirname, './src/react-components/'),
          use: [
            MiniCssExtractPlugin.loader,
            { loader: 'css-loader', options: { sourceMap: !isProd } },
            'sass-loader',
            {
              loader: 'sass-resources-loader',
              options: {
                resources: [
                  path.resolve(__dirname, 'src/common/css/variables/**/*.scss'),
                  path.resolve(__dirname, 'src/common/css/mixins.scss'),
                ],
              },
            },
          ],
        },
        {
          test: /\.(sa|sc)ss$/,
          include: path.resolve(__dirname, 'src/react-components/'),
          exclude: /node_modules/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[local]--[contenthash:base64:5]',
                },
                importLoaders: 1,
              },
            },
            'sass-loader',
            {
              loader: 'sass-resources-loader',
              options: {
                resources: [
                  path.resolve(__dirname, 'src/common/css/variables/**/*.scss'),
                  path.resolve(__dirname, 'src/common/css/mixins.scss'),
                ],
              },
            },
          ],
        },
        {
          test: /\.(gif|png|jpg|svg|woff|woff2|ttf|eot|md)$/,
          type: 'asset/resource',
        },
        {
          test: /.modernizrrc.js$/,
          loader: 'webpack-modernizr-loader',
        },
      ],
    },
    plugins: [
      new Dotenv(),
      new MiniCssExtractPlugin({ filename: '[name].[fullhash:6].css' }),
      new HtmlWebpackPlugin({
        template: './src/index.jade',
        favicon: './src/common/img/favicon.ico',
      }),
      new webpack.HotModuleReplacementPlugin(),
      new WebpackNotifierPlugin({ skipFirstNotification: true }),
      ...(isProd
        ? [
            new CleanWebpackPlugin(),
            new CopyWebpackPlugin({
              patterns: [
                { from: 'CNAME' },
                { from: 'sitemap.xml' },
                { from: 'sitemap-landing.xml' },
                { from: 'google95cc3d56e1325c3b.html' },
                { from: 'src/404.html' },
              ],
            }),
            new CompressionPlugin({
              filename: '[path][base].gz',
              algorithm: 'gzip',
              threshold: 10240,
              minRatio: 0.8,
            }),
          ]
        : []),
      new CopyWebpackPlugin({
        patterns: [{ from: 'src/resources', to: 'downloads' }],
      }),
    ],
    devtool: isProd ? false : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      historyApiFallback: {
        disableDotRule: true,
      },
      https: false,
      port: 9000,
      host: '0.0.0.0',
      hot: true,
      inline: true,
      watchOptions: {
        aggregateTimeout: 200,
        poll: 1000,
      },
    },
    optimization: {
      minimize: isProd,
      minimizer: isProd
        ? [
            new TerserPlugin({
              terserOptions: {
                format: {
                  comments: false,
                },
              },
              extractComments: false,
            }),
            new CssMinimizerPlugin(),
          ]
        : [],
    },
    performance: {
      hints: false,
    },
  };
};
