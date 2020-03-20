const { getStuffData, addStuffItem, updateStuffItem, deleteStuffItem } = require('../models/stuff');

exports.fetchStuffData = (req, res) => {
  getStuffData(res.locals.user.userID, (err, result) => {
    if (err) console.log(err);
    res.json(result.rows);
  });
};

exports.addStuffDataItem = (req, res) => {
  const { itemdesc, itemcategory } = req.body.newData;
  addStuffItem(res.locals.user.userID, itemdesc, itemcategory, (err, result) => {
    if (err) return err.message;
    res.json(result);
  });
};

exports.updateStuffDataItem = (req, res) => {
  const { itemid, itemdesc, itemcategory } = req.body.newData;
  updateStuffItem(itemid, itemdesc, itemcategory, (err, result) => {
    if (err) return err.message;
    res.json(result);
  });
};

exports.deleteStuffDataItem = (req, res) => {
  const itemid = req.body.itemid;
  deleteStuffItem(itemid, (err, result) => {
    if (err) return err.message;
    res.json(result);
  });
};
