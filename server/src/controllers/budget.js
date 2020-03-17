const { getBudgetData, addBudgetItem, updateBudgetItem, deleteBudgetItem } = require('../models/budget');

exports.fetchBudgetData = (req, res) => {
  getBudgetData((err, result) => {
    if (err) return err.message;
    res.json(result);
  });
};

exports.addBudgetDataItem = (req, res) => {
  const { item, quantity, price, category } = req.body.newData;

  addBudgetItem(3, item, quantity, price, category, (err, result) => {
    if (err) return err.message;
    res.json(result);
  });
};

exports.updateBudgetDataItem = (req, res) => {
  const { budgetid, item, quantity, price, category } = req.body.newData;
  updateBudgetItem(budgetid, item, quantity, price, category, (err, result) => {
    if (err) return err.message;
    res.json(result);
  });
};

exports.deleteBudgetDataItem = (req, res) => {
  const { budgetid } = req.body;
  deleteBudgetItem(budgetid, (err, result) => {
    if (err) return err.message;
    res.json(result);
  });
};
