// const fs = require('fs');
// const path = require('path');
const dbConnection = require('../database/db_connection');
// const STUFF_PATH = path.resolve('./src/stuff.json');
// const dataCopy = require(STUFF_PATH);

exports.getstuffData = cb => {
  dbConnection.query('SELECT * FROM stuff', (err, result) => {

    });
};
exports.addtuffItem = (userId, itemDesc, itemCategory, cb) => {
{
  dbConnection.query(
    'INSERT INTO stuff (userId,itemDesc,itemCategory) VALUES ($1,$2,$3,)',
	    [userId, itemDesc, itemCategory],
  err => {
    if (err) return cb(err);
    return cb(null, 'New Item Added');
}
  );
};
}
// exports.addStuffItem = async (itemName, category) => {
//   const result = insertToStuff(1, itemName, category, (err, res) => {
//     if (err) {
//       return err;
//     }
//     return res ;
//   });
//   return new Promise((resolve, reject) => {
//     const newItem = {
//       itemName,
//       category
//     };
//     const finalData = [...dataCopy, newItem];
//     fs.promises
//       .writeFile(STUFF_PATH, JSON.stringify(finalData, null, 2))
//       .then(() => resolve('Item has been added'))
//       .catch(() => reject('Something went wrong'));
//   });
// };
