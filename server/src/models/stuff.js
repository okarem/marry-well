const dbConnection = require('../database/db_connection');

exports.getStuffData = (id, cb) => {
  dbConnection.query('SELECT * FROM items where userid = $1', [id], cb);
};

exports.addStuffItem = (userid, itemdesc, itemcategory, cb) => {
  {
    dbConnection.query('INSERT INTO items (userid,itemdesc,itemcategory) VALUES ($1,$2,$3)', [userid, itemdesc, itemcategory], err => {
      if (err) return cb(err);
      return cb(null, 'New Item Added');
    });
  }
};

exports.updateStuffItem = (itemid, itemdesc, itemcategory, cb) => {
  dbConnection.query('UPDATE items SET itemdesc = $1, itemcategory = $2  WHERE itemid = $3 ', [itemdesc, itemcategory, itemid], err => {
    if (err) return cb(err);
    return cb(null, 'Item Updated');
  });
};

exports.deleteStuffItem = (itemid, cb) => {
  dbConnection.query('DELETE FROM items WHERE itemid = $1', [itemid], err => {
    if (err) return cb(err);
    return cb(null, 'Item has been deleted');
  });
};
