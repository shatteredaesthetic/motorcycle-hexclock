var path = require('path');

module.exports = {
  entry: [ "./src/main" ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "main.js",
    publicPath: 'dist'
  },
  module: {
    loaders: [{
      loader: 'babel-loader',
      include: [ path.resolve(__dirname, 'src') ],
      test: /\.js$/,
      query: {
        presets: [ "es2015" ]
      }
    }]
  }
};
