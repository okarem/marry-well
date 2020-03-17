const { getStuffData, addStuffItem } = require('../models/stuff');

exports.fetchStuffData = (req, res) => {
  let data = [];
  getStuffData((err, result) => {
    if (err) return err;
    res.json(result);
  });
};	

exports.addStuffDataItem = (req, res) => {
  const { itemDesc, itemCategory } = req.body.newData;
  addStuffItem(3,itemDesc, itemCategory,(err, result) => {
    if (err) return err;
    return result;
  });
};
