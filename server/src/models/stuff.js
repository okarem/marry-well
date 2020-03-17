const dbConnection = require('../database/db_connection');

exports.getStuffData = cb => {
  dbConnection.query('SELECT * FROM items', cb)
};
exports.addStuffItem = (userId, itemDesc, itemCategory, cb) => {
  {
    dbConnection.query(
      'INSERT INTO items (userId,itemDesc,itemCategory) VALUES ($1,$2,$3,)',
      [userId, itemDesc, itemCategory],
      err => {
        if (err) return cb(err);
        return cb(null, 'New Item Added');
      }
    );
  };
};
