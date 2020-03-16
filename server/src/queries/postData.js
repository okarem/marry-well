const dbConnection = require('../database/db_connection');

const insertToBudget = (userId,item,quantity,price,category, cb) => {
    dbConnection.query(
        'INSERT INTO budget (userId,item,quantity,price,category) VALUES ($1,$2,$3,$4,$5)', [userId, item, quantity, price, category],
        (err, res) => {
            if (err) return cb(err);
            cb(null, res);
        }
    );
};





module.exports = {
    insertToBudget
  };