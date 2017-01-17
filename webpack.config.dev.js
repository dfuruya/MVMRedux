const path = require('path');
const webpack = require('webpack');

module.exports = {
  // dev tool for debugging
  devtool: 'inline-source-map',
  // entrypoint for bundling
  // if string, will load module
  // if array, will load all items, last one is exported
  entry: [
    // 'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
    // 'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './client/index',
  ],
  output: {
    // bundle output path & name
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    // specifies public URL of the bundle when referenced in the browser
    // publicPath: '/',
  },
  plugins: [
    // ensures consistent build hashes
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    // handles errors more cleanly
    new webpack.NoErrorsPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
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
        loaders: ['react-hot', 'babel-loader'],
      },
      // css
      {
        test: /\.styl$/,
        include: path.join(__dirname, 'client'),
        loader: 'style-loader!css-loader!stylus-loader',
      }
    ]
  },
  devServer: {
    contentBase: './dist',
    // hot: true,
    quiet: false,
    noInfo: false,
    publicPath: '/',
    stats: { colors: true },
    proxy: {
      '/api/*': {
        target: {
          host: 'localhost',
          protocol: 'http',
          port: 3000,
        },
        changeOrigin: true,
        secure: false
      }
    }
  },
};
