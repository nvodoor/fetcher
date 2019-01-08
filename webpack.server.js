const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './server/start.js',

  target: 'node',

  externals: [nodeExternals()],

  output: {
    filename: 'server.js',
    path: __dirname
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  }
};