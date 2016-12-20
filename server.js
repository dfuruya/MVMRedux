const path = require('path');
const express = require('express');
const webpack = require('webpack');
const bodyParser = require('body-parser');

const env = process.env.NODE_ENV || 'development';
console.log(`NODE_ENV is: ${env}`);
const config = require('./config.env')[env];
const PORT = config.port;
const routes = require('./server/routes');

const db = require('./server/db');

let app = express();
app.use(express.static('dist'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

if (env === 'development') {
  const webpackConfig = require(`./webpack.config.dev`);
  const compiler = webpack(webpackConfig);
  app.use(require('webpack-hot-middleware')(compiler));
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath, 
  }));
}

routes(app);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(PORT, (err) => {
  if (err) return console.error(err);
  console.log('Listening on port', PORT);
});
