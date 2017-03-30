import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackNotifierPlugin from 'webpack-notifier';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';

const root = path.join(__dirname, '/');
const defaultEnv = {
  dev: true,
  production: false,
};

export default (env = defaultEnv) => ({
  entry: ['./src/application.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.[hash:6].js',
  },
  watch: env.dev,
  resolve: {
    alias: {
      modernizr: path.resolve(__dirname, '.modernizrrc'),
      router: path.resolve(__dirname, 'src/router'),
      pages: path.resolve(__dirname, 'src/views/pages'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { babelrc: false, presets: [['es2015', { modules: false }]], cacheDirectory: path.join(root, '.cache') },
      },
      {
        test: /\.jade$/,
        loader: 'jade-loader',
      },
      {
        include: path.resolve(__dirname, 'src/common/css/fonts/fonts.scss'),
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.scss$/,
        exclude: path.resolve(__dirname, 'src/common/css/fonts/'),
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { sourceMap: env.dev } },
            { loader: 'sass-loader', options: { sourceMap: env.dev } },
            { loader: 'sass-resources-loader', options: { resources: path.resolve(__dirname, 'src/common/css/variables/**/*.scss') } },
          ],
        }),
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader'],
        }),
      },
      {
        test: /\.(svg|gif|png|jpg)$/,
        exclude: path.resolve(__dirname, 'src/common/css/fonts/'),
        loader: 'url-loader',
        options: {
          limit: env.dev ? null : 1000,
          name: 'resources/[name].[hash:6].[ext]',
        },
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)/,
        include: path.resolve(__dirname, 'src/common/css/fonts/'),
        loader: 'file-loader?',
        options: {
          name: 'fonts/[name].[hash:6].[ext]',
        },
      },
      {
        test: /\.modernizrrc.js$/,
        loader: 'modernizr-loader',
      },
      {
        test: /\.modernizrrc(\.json)?$/,
        loader: 'modernizr-loader!json-loader',
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({ filename: '[name].[hash:6].css', disable: env.dev }),
    new HtmlWebpackPlugin({ template: './src/index.jade' }),
    new webpack.HotModuleReplacementPlugin(),
    new WebpackNotifierPlugin({ skipFirstNotification: true }),
    ...env.production ? [new CleanWebpackPlugin([path.resolve(__dirname, 'dist')])] : [],
  ],
  devtool: env.dev ? 'inline-source-map' : false,
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8080,
    host: '0.0.0.0',
    hot: true,
    inline: true,
    watchOptions: {
      aggregateTimeout: 200,
      poll: 1000,
    },
  },
});
