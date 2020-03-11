const budgetDB = require('../budgetData.json');

exports.getBudgetData = () => {
  return budgetDB;
};
