// Add code below to connect to your database
const pg = require('pg');
const Pool = pg.Pool;
// const {POOL} = require("pg");
const url = require('url');
require('dotenv').config();

if (!process.env.DB_URL) throw new Error('Envinroment: variable DB_URL must be set');

const params = url.parse(process.env.DB_URL);
const user = params.auth.split(':')[0];
const password = params.auth.split(':')[1];

const options = {
  host: params.hostname,
  port: params.port,
  database: params.pathname.split('/')[1],
  max: process.env.MAX_CONNECTIONS || 2,
  user,
  password,
  ssl: params.hostname !== 'localhost'
};

module.exports = new Pool(options);
