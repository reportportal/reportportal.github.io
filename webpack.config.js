const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModernizrWebpackPlugin = require('modernizr-webpack-plugin');

const root = path.join(__dirname, '/');

module.exports = {
    entry: './src/application.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    watch: true,
    resolve: {
        alias: {
            router: path.resolve(__dirname, 'src/router'),
            pages: path.resolve(__dirname, 'src/views/pages')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ["es2015", "stage-0"],
                    cacheDirectory: path.join(root, '.cache')
                }
            },
            {
                test: /\.jade$/,
                loader: 'jade-loader',
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader",
                    options: { sourceMap: true }
                }, {
                    loader: "sass-loader",
                    options: {
                        sourceMap: true,
                    }
                }, {
                    loader: "sass-resources-loader",
                    options: {
                        resources: path.resolve(__dirname, 'src/common/css/variables/**/*.scss')
                    }
                }]
            },
            {
                test: /\.css$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader",
                    options: { sourceMap: true }
                }]
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.jade'}),
        new webpack.HotModuleReplacementPlugin(),
        new ModernizrWebpackPlugin({
            options: ['setClasses'],
            "feature-detects": [
                "touchevents",
                "css/transforms"
            ]
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            _: 'underscore',
            Backbone: 'backbone',
            Epoxy: 'backbone.epoxy',
        })
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 9000,
        host: "0.0.0.0",
        hot: true,
        inline: true,
        stats: "errors-only",
        clientLogLevel: "error"
    }
};