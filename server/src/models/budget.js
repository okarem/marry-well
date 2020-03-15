const fs = require('fs');
const path = require('path');
const BUDGET_PATH = path.resolve('./src/budget.json');
const dataCopy = require(BUDGET_PATH);
const {
  insertToBudget
} = require("../queries/postData");

exports.getBudgetData = () => {
  const data = require(BUDGET_PATH);
  return data;
};


 

exports.addBudgetItem = async (itemName, quantity, price, category) => {
  //I added the call to the DB insert query inside the function that inserts data to Json file, 
  //so it is called once the API fitched from frontend
  //send userId hardcoded until we send it with the cookie
  const result = insertToBudget(1,itemName, quantity, price, category,(err, res) => {
    if (err) {
      return err;
    }
    return res;
  });
 
  
  return new Promise((resolve, reject) => {
    const newItem = {
      itemName,
      quantity,
      price,
      category
    };


    const finalData = [...dataCopy, newItem];
    fs.promises
      .writeFile(BUDGET_PATH, JSON.stringify(finalData, null, 2))
      .then(() => resolve('Item has been added'))
      .catch(() => reject('Something went wrong'));
  });
};
