const path = require('path');

module.exports = {
  mode: 'development', //REMOVE FOR PROD
  entry: ['./src/index.js', './src/page-load.js'],
  devtool: 'inline-source-map', //REMOVE FOR PROD
  devServer: { //REMOVE FOR PROD
    contentBase: './dist', //REMOVE FOR PROD
  }, //REMOVE FOR PROD
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};