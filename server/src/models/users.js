const data = require('../sampleData.json');

exports.findByUsername = username =>
  new Promise((resolve, reject) => {
    data.forEach(user => {
      if (user.username === username) {
        resolve(user);
      }
    });

    reject(new Error('No user was found'));
  });
