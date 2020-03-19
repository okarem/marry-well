const { getGuestsData, addGuestsItem, updateGuestsItem, deleteGuestsItem } = require('../models/guests');

exports.fetchGuestsData = (req, res) => {
  //console.log('inside guests.js', res.locals);
  getGuestsData(res.locals.user.userID, (err, result) => {
    if (err) console.log(err);
    res.json(result.rows);
  });
};

exports.addGuestsDataItem = (req, res) => {
  const { name, city, gender, status } = req.body.newData;
  addGuestsItem(3, name, city, gender, status, (err, result) => {
    if (err) return err.message;
    res.json(result.rows);
  });
};

exports.updateGuestsDataItem = (req, res) => {
  const { name, city, gender, status } = req.body.newData;
  updateGuestsItem(3, name, city, gender, status, (err, result) => {
    if (err) return err.message;
    res.json(result.rows);
  });
};

exports.deleteGuestsDataItem = (req, res) => {
  const { guestsid } = req.body;
  deleteGuestsItem(guestsid, (err, result) => {
    if (err) return err.message;
    res.json(result.rows);
  });
};
