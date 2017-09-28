const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (env) {
  return {
    entry: {
      index: './docs-src/index.js',
    },
    output: {
      path: path.join(__dirname, 'docs'),
      filename: `js/[name].js`,
    },
    devtool: 'sourcemap',
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './docs-src/index.html',
      }),
    ],
  };
};
