const { getStuffData, addStuffItem } = require('../models/stuff');

exports.fetchStuffData = (req, res) => {
  res.json(getStuffData());
};

exports.addStuffDataItem = (req, res) => {
  const { itemName, category } = req.body.newData;
  addStuffItem(itemName, category)
    .then(message => res.send(message))
    .catch(err => res.send(err));
};
