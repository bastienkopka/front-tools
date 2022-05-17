const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const config = {
  entry : [
    path.resolve(__dirname, 'css/main.scss'),
    path.resolve(__dirname, 'js/main.js'),
  ],
  output: {
    filename: 'js/[name].min.js'
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-transform-runtime']
        }
      },
      {
        test: /\.(eot|ttf|woff|woff2|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options:{
              name: '[name].[ext]',
              outputPath: 'fonts'
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].min.css'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'images', to: 'images' }
      ]
    })
  ]
};

module.exports = config;