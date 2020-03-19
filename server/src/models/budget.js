const dbConnection = require('../database/db_connection');

exports.getBudgetData = (id,cb) => {
  dbConnection.query('SELECT * FROM budget where userid = $1', [id], (err, result) => {
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

exports.updateBudgetItem = (budgetid, item, quantity, price, category, cb) => {
  dbConnection.query(
    'UPDATE budget SET item = $1, quantity = $2, price = $3, category = $4 WHERE budgetid = $5 ',
    [item, quantity, price, category, budgetid],
    err => {
      if (err) return cb(err);
      return cb(null, 'Item Updated');
    }
  );
};

exports.deleteBudgetItem = (budgetid, cb) => {
  dbConnection.query('DELETE FROM budget WHERE budgetid = $1', [budgetid], err => {
    if (err) return cb(err);
    return cb(null, 'Item has been deleted');
  });
};
