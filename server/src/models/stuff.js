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
exports.updateStuffItem = (stuffid, itemDesc, itemCategory, cb) => {
  dbConnection.query(
    'UPDATE items SET itemDesc = $1, itemCategory = $2 , WHERE stuffid = $3 ',
    [itemDesc, itemCategory, stuffid],
    err => {
      if (err) return cb(err);
      return cb(null, 'Item Updated');
    }
  );
};

exports.deleteStuffItem = (stuffid, cb) => {
  dbConnection.query('DELETE FROM items WHERE stuffid = $1', [stuffid], err => {
    if (err) return cb(err);
    return cb(null, 'Item has been deleted');
  });
};