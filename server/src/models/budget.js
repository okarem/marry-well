const fs = require('fs');
const path = require('path');
const BUDGET_PATH = path.resolve('./src/budget.json');
const dataCopy = require(BUDGET_PATH);

exports.getBudgetData = () => {
  const data = require(BUDGET_PATH);
  return data;
};

exports.addBudgetItem = async (itemName, quantity, price, category) => {
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
