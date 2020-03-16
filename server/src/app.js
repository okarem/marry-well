const express = require('express');
const cors = require('cors');

const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./controllers');
require('dotenv').config();

console.log(require('dotenv').config());

const app = express();

app.set('port', process.env.PORT || 4000);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);

module.exports = app;
