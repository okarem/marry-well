const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const bodyParser = require('body-parser');
const routes = require('./controllers');
require('dotenv').config();

const app = express();

var whitelist = ['http://localhost:3000', 'https://marry-well.netlify.com'];
var corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.options('include', cors(corsOptions));
app.use(cors(corsOptions));

app.set('port', process.env.PORT || 4000);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

module.exports = app;
