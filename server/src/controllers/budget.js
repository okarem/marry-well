const { getBudgetData, addBudgetItem } = require('../models/budget');

exports.fetchBudgetData = (req, res) => {
  let data = [];
  getBudgetData((err, result) => {
    if (err) return err;
    res.json(result);
  });
};

exports.addBudgetDataItem = (req, res) => {
  const { item, quantity, price, category } = req.body.newData;

  addBudgetItem(3, item, quantity, price, category, (err, result) => {
    if (err) return err;
    return result;
  });
};
