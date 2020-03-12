const { getBudgetData, addBudgetItem } = require('../models/budget');

exports.fetchBudgetData = (req, res) => {
  res.json(getBudgetData());
};

exports.addBudgetDataItem = (req, res) => {
  const { itemName, quantity, price, category } = req.body.newData;
  addBudgetItem(itemName, quantity, price, category)
    .then(message => res.send(message))
    .catch(err => res.send(err));
};
