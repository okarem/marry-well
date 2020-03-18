const dbConnection = require('../database/db_connection');

exports.getUserByName = (username, cb) => {
  dbConnection.query('SELECT * FROM users WHERE name = $1', [username], (err, result) => {
    if (err) return cb(err);
    return cb(null, result.rows);
  });
};

exports.createNewUser = (username, password, cb) => {
  dbConnection.query('INSERT INTO users (name, hashedpassword) VALUES($1,$2)', [username, password], err => {
    if (err) return cb(err);
    return cb(null, 'New User Created');
  });
};
