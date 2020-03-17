const dbConnection = require('../database/db_connection.js');

const getitemsTable = cb => {
  dbConnection.query('SELECT * FROM items', (err, res) => {
    if (err) return cb(err);
    cb(null, res.rows);
  });
};

module.exports = getitemsTable;