
const { addGuests,getGuests } = require('../models/guests');


exports.addGuestsData = (req, res) => {
  const { name, city, gender, status } = req.body.newData;
  addGuests(name, city, gender, status,(err, result) => {
    if (err) return err;
    res.send(result);
  });
};


exports.getGuestsData = (req, res) => {
    getGuests((err, result) => {
      if (err) return err;
      res.send(result);
    });
  };

