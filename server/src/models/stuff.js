const dbConnection = require('../database/db_connection');

exports.getstuffData = cb => {
  dbConnection.query('SELECT * FROM stuff', (err, result) => {

  });
};
exports.addtuffItem = (userId, itemDesc, itemCategory, cb) => {
  {
    dbConnection.query(
      'INSERT INTO stuff (userId,itemDesc,itemCategory) VALUES ($1,$2,$3,)',
      [userId, itemDesc, itemCategory],
      err => {
        if (err) return cb(err);
        return cb(null, 'New Item Added');
      }
    );
  };
};
