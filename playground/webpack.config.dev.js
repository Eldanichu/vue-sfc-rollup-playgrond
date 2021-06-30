const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    app: [
      './main.js'
    ]
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '',
    chunkFilename: 'js/[name].js',
  },
  devServer: {
    contentBase: path.join(__dirname, '/public/'),
    inline: true,
    hot: true,
    publicPath: '/',
    compress: true,
    port: 9000,
    historyApiFallback: true,
    overlay: true,
    watchOptions: {
      poll: true
    }
  },
  devtool: 'source-map',
  resolve: {
    alias: {
      '@': path.join(__dirname, '/src'),
      vue$: 'vue/dist/vue.runtime.esm.js'
    },
    extensions: [
      '.mjs',
      '.js',
      '.jsx',
      '.vue',
      '.json',
      '.wasm'
    ],
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              // you can also read from a file, e.g. `variables.scss`
              // use `prependData` here if sass-loader version = 8, or
              // `data` if sass-loader version < 8
            }
          },
          "postcss-loader"
        ]
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              // sass-loader version >= 8
              sassOptions: {
                indentedSyntax: true
              }
            }
          },
          "postcss-loader"
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          hotReload: true
        }
      },
      // this will apply to both plain `.js` files
      // AND `<script>` blocks in `.vue` files
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      // this will apply to both plain `.css` files
      // AND `<style>` blocks in `.vue` files
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              // implementation: require('sass')
            }
          },
          "postcss-loader"
        ]
      },
    ]
  },
  optimization: {
    minimize: true,
    sideEffects: false,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'My App',
      filename: 'index.html',
      template: path.join(__dirname, '/public/index.html'),
      showErrors: true,
      inject: true,
      cache: false,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"',
        BASE_URL: '""'
      }
    })
  ]
};