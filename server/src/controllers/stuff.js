const { getStuffData, addStuffItem } = require('../models/stuff');

exports.fetchStuffData = (req, res) => {
  let data = [];
  getStuffData((err, result) => {
    if (err) return err;
    res.json(result);
  });
};	

exports.addStuffDataItem = (req, res) => {
  const { itemName, category } = req.body.newData;
  addStuffItem(itemName, category)
    .then(message => res.send(message))
    .catch(err => res.send(err));
};
