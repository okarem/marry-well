
const { addGuests } = require('../models/guests');


exports.addGuestsData = (req, res) => {
  const { name, city, gender, status } = req.body.newData;
  addGuests(name, city, gender, status,(err, result) => {
    if (err) return err;
    res.send(result);
  });
  //return res;
};
