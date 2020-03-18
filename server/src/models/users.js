const data = require('../sampleData.json');
const fs = require('fs');
const path = require('path');

const USERS_PATH = path.resolve('./src/sampleData.json');
const temp = require(USERS_PATH);

const checkIfUserExists = username => !!data.filter(user => user.username === username).length;

exports.findByUsername = username =>
  new Promise((resolve, reject) => {
    data.forEach(user => {
      if (user.username === username) {
        resolve(user);
      }
    });

    reject(new Error('No user was found'));
  });

exports.createUser = async (username, password) =>
  new Promise((resolve, reject) => {
    const newUser = {
      username,
      password
    };

    const newJson = [...temp, newUser];

    if (checkIfUserExists(username)) {
      return reject(new Error('User already exists in our database'));
    }

    fs.writeFile(USERS_PATH, JSON.stringify(newJson, null, 2), err => {
      if (err) reject(err);

      resolve('User has been added');
    });
  });
