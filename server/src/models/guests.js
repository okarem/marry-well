const dbConnection = require('../database/db_connection');

exports.getGuestsData = (id, cb) => {
  dbConnection.query('SELECT * FROM guests where userid = $1', [id], cb);
};

exports.addGuestsItem = (userId, name, city, gender, status, cb) => {
  {
    dbConnection.query(
      'INSERT INTO guests (userId,name, city, gender, status) VALUES ($1,$2,$3,$4,$5)',
      [userId, name, city, gender, status],
      err => {
        if (err) return cb(err);
        return cb(null, 'New Guest Added');
      }
    );
  }
};
exports.updateGuestsItem = (guestid, name, city, gender, status, cb) => {
  dbConnection.query(
    'UPDATE guests SET name = $1, city = $2 ,gender=$3,status=$4 WHERE guestid = $5 ',
    [name, city, gender, status, guestid],
    err => {
      if (err) return cb(err);
      return cb(null, 'Guest Updated');
    }
  );
};

exports.deleteGuestsItem = (guestid, cb) => {
  dbConnection.query('DELETE FROM guests WHERE guestid = $1', [guestid], err => {
    if (err) return cb(err);
    return cb(null, 'Guest has been deleted');
  });
};
