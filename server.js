const path = require('path');
const app = require('express')();
const webpack = require('webpack');
const webpackFile = process.env.NODE_ENV
const webpackConfig = require(`./webpack.config.${webpackFile}`);

const compiler = webpack(webpackConfig);

const PORT = process.env.PORT || 8080;

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath, 
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Listening on port ', PORT);
});