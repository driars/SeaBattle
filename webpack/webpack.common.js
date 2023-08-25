const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebPackPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        // should use babel-loader for all ts js tsx and jsx files
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.(?:ico|gif|jpg|png|bmp)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(?:woff(?:2)?|eot|ttf|otf|svg)$/,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: '[name].[chunkhash:8].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './public/index.html'),
    }),
    new CleanWebpackPlugin(),
    new CopyWebPackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '..', './public/'),
          to: path.resolve(__dirname, '..', './build'),
          filter: async (resourcePath) => {
            if (path.basename(resourcePath) === 'index.html') return false
            return true
          },
        },
      ],
    }),
  ],
}
