var path = require("path");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, './bin'),
    filename: 'bundle.js',
    libraryTarget: 'umd',
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      include: [path.resolve(__dirname, "src")],
      query: {
        presets: ['es2015']
      }
    },
    ]
  }
};