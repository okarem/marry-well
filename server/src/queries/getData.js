const dbConnection = require("../database/db_connection");

const getGuestsTable = cb => {
  console.log('inside the sql query');
    dbConnection.query("SELECT * FROM guests;", (err, res) => {
      if (err) return err;
      if (res){
        return res.rows;
    }
    });
  };


  module.exports = {
    getGuestsTable
  };
  