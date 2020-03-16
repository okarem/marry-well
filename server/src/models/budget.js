const fs = require('fs');
const path = require('path');
const dbConnection = require('../database/db_connection');
const BUDGET_PATH = path.resolve('./src/budget.json');
const dataCopy = require(BUDGET_PATH);

exports.getBudgetData = cb => {
  dbConnection.query('SELECT * FROM budget', (err, result) => {
    if (err) return cb(err);
    return cb(null, result.rows);
  });
};

exports.addBudgetItem = async (itemName, quantity, price, category) => {
  const result = insertToBudget(1, itemName, quantity, price, category, (err, res) => {
    if (err) {
      return err;
    }
    return res;
  });

  return new Promise((resolve, reject) => {
    const newItem = {
      itemName,
      quantity,
      price,
      category
    };

    const finalData = [...dataCopy, newItem];
    fs.promises
      .writeFile(BUDGET_PATH, JSON.stringify(finalData, null, 2))
      .then(() => resolve('Item has been added'))
      .catch(() => reject('Something went wrong'));
  });
};
