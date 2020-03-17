const dbConnection = require('../database/db_connection');

exports.getBudgetData = cb => {
  dbConnection.query('SELECT * FROM budget', (err, result) => {
    if (err) return cb(err);
    return cb(null, result.rows);
  });
};

exports.addBudgetItem = (userId, item, quantity, price, category, cb) => {
  dbConnection.query(
    'INSERT INTO budget (userId,item,quantity,price,category) VALUES ($1,$2,$3,$4,$5)',
    [userId, item, quantity, price, category],
    err => {
      if (err) return cb(err);
      return cb(null, 'New Item Added');
    }
  );
};
