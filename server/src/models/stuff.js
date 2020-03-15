const fs = require('fs');
const path = require('path');
const STUFF_PATH = path.resolve('./src/stuff.json');
const dataCopy = require(STUFF_PATH);

exports.getstuffData = () => {
  const data = require(STUFF_PATH);
  return data;
};

exports.addStuffItem = async (itemName, category) => {
  return new Promise((resolve, reject) => {
    const newItem = {
      itemName,
      category
    };

    const finalData = [...dataCopy, newItem];
    fs.promises
      .writeFile(STUFF_PATH, JSON.stringify(finalData, null, 2))
      .then(() => resolve('Item has been added'))
      .catch(() => reject('Something went wrong'));
  });
};
