var path = require('path');

module.exports = {
  entry: path.join(process.cwd(), 'entry.js'),
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: './public/',
    filename: 'build.js'
  }
}