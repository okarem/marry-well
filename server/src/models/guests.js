const dbConnection = require('../database/db_connection');

exports.getGuestsData = cb => {
  dbConnection.query('SELECT * FROM guests', cb)
};
exports.addGuestsItem = (userId,name, city, gender, status, cb) => {
  {
    dbConnection.query(
      'INSERT INTO items (userId,name, city, gender, status) VALUES ($1,$2,$3,$4,$5)',
      [userId, name, city, gender, status],
      err => {
        if (err) return cb(err);
        return cb(null, 'New Item Added');
      }
    );
  };
};
exports.updateGuestsItem = (guestsid, name, city, gender, status, cb) => {
  dbConnection.query(
    'UPDATE guests SET name = $1, city = $2 ,gender=$3,status=$4, WHERE guestsid = $5 ',
    [ name, city, gender, status,guestsid],
    err => {
      if (err) return cb(err);
      return cb(null, 'Item Updated');
    }
  );
};

exports.deleteGuestsItem = (guestsid, cb) => {
  dbConnection.query('DELETE FROM guests WHERE guestsid = $1', [guestsid], err => {
    if (err) return cb(err);
    return cb(null, 'Item has been deleted');
  });
};