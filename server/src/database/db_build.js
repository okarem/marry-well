const fs = require('fs');

const dbConnection = require('./db_connection');
const initQuery = fs.readFileSync(`${__dirname}/db_build.sql`).toString();

const runDbBuild = (() => {
  dbConnection.query(initQuery, (error, result) => {
    if (error) throw error;
    console.log('DB tables created, with: ', result);
  });
})();

module.exports = runDbBuild;
