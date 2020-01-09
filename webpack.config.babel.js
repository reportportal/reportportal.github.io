import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackNotifierPlugin from 'webpack-notifier';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const root = path.join(__dirname, '/');
const defaultEnv = {
  dev: true,
  proxyDocumentation: false,
  production: false,
};

export default (env = defaultEnv) => ({
  entry: ['./src/application.js'],
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.[hash:6].js',
  },
  watch: env.dev,
  resolve: {
    alias: {
      modernizr: path.resolve(__dirname, '.modernizrrc'),
      router: path.resolve(__dirname, 'src/router'),
      pages: path.resolve(__dirname, 'src/views/pages'),
      components: path.resolve(__dirname, 'src/views/components'),
      utils: path.resolve(__dirname, 'src/utils'),
      common: path.resolve(__dirname, 'src/common'),
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
        test: /\.scss$/,
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
        test: /\.(gif|png|jpg|ttf|eot|svg|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: 'resources/[name].[hash:6].[ext]',
        },
      },
      {
        // include woff font on css
        test: /\.(woff)$/,
        loader: 'url-loader',
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
    new ExtractTextPlugin({ filename: '[name].[hash:6].css', allChunks: true }),
    new HtmlWebpackPlugin({ template: './src/index.jade' }),
    new webpack.HotModuleReplacementPlugin(),
    new WebpackNotifierPlugin({ skipFirstNotification: true }),
    new webpack.DefinePlugin({
      LOCAL_DOCUMENTATION: JSON.stringify(env.proxyDocumentation),
    }),
    ...env.production ? [
      new CleanWebpackPlugin([path.resolve(__dirname, 'dist')]),
      new CopyWebpackPlugin([
        { from: 'CNAME' },
        { from: 'sitemap.xml' },
        { from: 'google95cc3d56e1325c3b.html' },
        { from: 'src/404.html' },
      ]),
      new CompressionPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        threshold: 10240,
        minRatio: 0.8,
      }),
    ] : [],
  ],
  devtool: env.dev ? 'inline-source-map' : false,
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
    proxy: [
      ...env.proxyDocumentation ? [
        {
          path: '/documentation.html*',
          target: 'http://localhost:9020/',
          bypass(req, res, options) {
            console.log(`proxy url: ${req.url}`);
          },
        },
        {
          path: '/docs/Images/**',
          pathRewrite: { '^/docs': '' },
          target: 'http://localhost:9020/',
          bypass(req, res, options) {
            console.log(`proxy url: ${req.url}`);
          },
        },
      ] : [{}],
    ],
  },
});
