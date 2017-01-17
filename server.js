const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

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

routes(app);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(PORT, (err) => {
  if (err) return console.error(err);
  console.log(`Open client browser at (cmd + double-click): http://localhost:${env === 'development' ? 8080 : PORT}`)
});
