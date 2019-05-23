const path = require('path')

module.exports = {
  devtool: 'eval',
  entry: './client/index.js',
  output: {
    path:path.resolve(__dirname, "public")
  },
  
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
