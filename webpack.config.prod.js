const path = require('path');
const webpack = require('webpack');

module.exports = {
  // dev tool for debugging
  devtool: 'inline-source-map',
  // entrypoint for bundling
  // if string, will load module
  // if array, will load all items, last one is exported
  entry: [
    './client/index',


  ],
  output: {
    // bundle output path & name
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    // specifies public URL of the bundle when referenced in the browser
    publicPath: '/dist/',
  },








  plugins: [
    // ensures consistent build hashes
    new webpack.optimize.OccurenceOrderPlugin(),
    // for the minified production build
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
  ],
  module: {
    // sets base path for module
    // context: path.join(__dirname, 'client'),
    loaders: [
      // js
      {
        // used to match extension
        test: /\.js$/,
        include: path.join(__dirname, 'client'),
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        // queries for es6 and react files
        query: {
          // presets: array of babel plugins
          presets: ['es2015', 'react'],
        },
      },
      // css
      {
        test: /\.styl$/,
        include: path.join(__dirname, 'client'),
        loader: 'style-loader!css-loader!stylus-loader',
      }
    ]
  },
};
