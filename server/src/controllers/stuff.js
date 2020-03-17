const { getStuffData, addStuffItem } = require('../models/stuff');

exports.fetchStuffData = (req, res) => {
  getStuffData((err, result) => {
    if (err) console.log(err) ;
    res.json(result.rows);
  });
};	

exports.addStuffDataItem = (req, res) => {
  const { itemDesc, itemCategory } = req.body.newData;
  addStuffItem(3,itemDesc, itemCategory,(err, result) => {
    if (err) return err;
    return result;
  });
};
