const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-transform-runtime'],
        }
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].min.css',
    }),
  ]
};

module.exports = config;