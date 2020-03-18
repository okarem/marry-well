const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const bodyParser = require('body-parser');
const routes = require('./controllers');
require('dotenv').config();

const app = express();

app.set('port', process.env.PORT || 4000);
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

module.exports = app;
