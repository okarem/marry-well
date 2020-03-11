const { getBudgetData } = require('../models/budget');

exports.fetchBudgetData = (req, res) => {
  res.json(getBudgetData());
};

exports.addBudgetDataItem = (req, res) => {
  console.log(req.body);

  res.send('Hello');
};
