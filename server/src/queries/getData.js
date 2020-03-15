const dbConnection = require("../database/db_connection");

const getGuestsTable = cb => {
  console.log('inside the sql query');
    dbConnection.query("SELECT * FROM guests;", (err, res) => {
      //if (err) console.log(err);
      if (res) 
        {console.log('success inside query', res.rows);
        return res.rows;
    }
    });
  };


  module.exports = {
    getGuestsTable
  };
  