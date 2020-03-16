const dbConnection = require('../database/db_connection');

const getitemsTable = cb => {
  console.log('inside the sql query');
  dbConnection.query('SELECT * FROM items;', (err, res) => {
    if (err) return err;
    if (res) {
      return res.rows;
    }
  });
};

module.exports = {
  getitemsTable
};