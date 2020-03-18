const bcrypt = require('bcrypt');
const { getUserByName, createNewUser } = require('../models/users');

exports.authenticateUser = (req, res) => {
  const { username, password } = req.body;

  getUserByName(username, (err, users) => {
    if (err) res.json(err.message);
    else if (user.length <= 0) {
      res.json('No User Was Found');
    } else {
      bcrypt
        .compare(password, users[0].hashedpassword)
        .then(hashCheck => (hashCheck ? res.json(users) : res.json({ status: 'Error', message: 'The password you entered is incorrect !' })))
        .catch(err => new Error(err.message));
    }
  });
};

exports.addUser = (req, res) => {
  const { username, password } = req.body;

  getUserByName(username, (err, users) => {
    if (err) res.json(err.message);
    else if (users.length > 0) {
      res.json('User Already Exists');
    } else {
      bcrypt
        .hash(password, 10)
        .then(hash => {
          createNewUser(username, hash, (err, result) => {
            if (err) res.json(err.message);
            res.json(result);
          });
        })
        .catch(err => res.josn(err.message));
    }
  });
};
