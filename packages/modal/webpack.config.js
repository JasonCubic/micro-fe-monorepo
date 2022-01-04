const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const packageJson = require('./package.json');

function getWebpackConfig(env, options) {
  const isDevelopmentMode = options?.mode === 'development';
  const webpackConfig = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      publicPath: 'http://localhost:9093/',
    },
    resolve: {
      extensions: ['.vue', '.js', '.json'],
      alias: {
        vue: 'vue/dist/vue.esm-bundler.js',
      },
    },
    devServer: {
      port: 9093,
      historyApiFallback: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
      },
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            reactivityTransform: true,
          },
        },
        {
          // images
          test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
          type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: 4 * 1024, // 4kb
            },
          },
        },
        {
          // do not base64-inline SVGs.
          // https://github.com/facebookincubator/create-react-app/pull/1180
          test: /\.(svg)(\?.*)?$/,
          type: 'asset/resource',
        },
        {
          // media
          test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
          type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: 4 * 1024, // 4kb
            },
          },
        },
        {
          // fonts
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
          type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: 4 * 1024, // 4kb
            },
          },
        },
        {
          test: /\.(css|s[ac]ss)$/i,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    [
                      'tailwindcss',
                      {
                        // tailwindcss options
                        content: ['../*/src/**/*.{html,js,vue}'],
                        theme: {
                          extend: {},
                        },
                        plugins: [],
                      },
                    ],
                    [
                      'autoprefixer',
                      {
                        // autoprefixer options
                      },
                    ],
                  ],
                },
              },
            },
          ],
        },
      ],
    },
    optimization: {
      minimize: !isDevelopmentMode,
      minimizer: ['...', new CssMinimizerPlugin()],
    },
    plugins: [
      new VueLoaderPlugin(),
      new ModuleFederationPlugin({
        name: 'modal',
        filename: 'remoteEntry.js',
        remotes: {},
        exposes: {
          './ModalTemplate': './src/components/ModalTemplate.vue',
        },
        shared: packageJson.dependencies,
      }),
      new MiniCssExtractPlugin({
        filename: isDevelopmentMode ? '[name].css' : '[name].[contenthash].css',
        chunkFilename: isDevelopmentMode ? '[id].css' : '[id].[contenthash].css',
      }),
      new HtmlWebPackPlugin({
        template: './src/index.html',
      }),
      new CopyPlugin({
        patterns: [{ from: '**/*', context: path.resolve(__dirname, './public') }],
      }),
    ],
  };
  if (!isDevelopmentMode) {
    webpackConfig.plugins.push(new CleanWebpackPlugin());
  }
  return webpackConfig;
}

module.exports = getWebpackConfig;
