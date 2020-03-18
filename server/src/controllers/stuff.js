const { getStuffData, addStuffItem,updateStuffItem, deleteStuffItem  } = require('../models/stuff');
 
exports.fetchStuffData = (req, res) => {
  getStuffData((err, result) => {
    if (err) console.log(err) ;
    res.json(result.rows);
  });
};	

exports.addStuffDataItem = (req, res) => {
  const { itemDesc, itemCategory } = req.body.newData;
  addStuffItem(3,itemDesc, itemCategory,(err, result) => {
    if (err) return err.message;
    res.json(result.rows);
  });
};

exports.updateStuffDataItem = (req, res) => {
  const { itemDesc, itemCategory } = req.body.newData;
  updetStuffItem(3,itemDesc, itemCategory,(err, result) => {
    if (err) return err.message;
    res.json(result.rows);
  });
};

exports.deleteStuffDataItem = (req, res) => {
  const { stuffid } = req.body;
  deleteStuffItem(stuffid, (err, result) => {
    if (err) return err.message;
    res.json(result.rows);
  });
};	
