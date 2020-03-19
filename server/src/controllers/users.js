const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { getUserByName, createNewUser } = require('../models/users');

exports.authenticateUser = (req, res) => {
  const { username, password } = req.body;

  getUserByName(username, (err, users) => {
    if (err) console.log(err.message);
    else if (users.length <= 0) {
      res.json('No User Was Found');
    } else {
      const userData = {
        userID: users[0].userid,
        userName: users[0].name
      };
      bcrypt
        .compare(password, users[0].hashedpassword)
        .then(hashCheck => {
          if (hashCheck) {
            jwt.sign(userData, process.env.JWT_SECRET, (err, token) => {
              if (err) console.log(err.message);
              res.cookie('usr', token);
              res.send({ status: 'success' });
            });
          } else {
            res.json('You have entered a wrong passwrod');
          }
        })
        .catch(err => new Error(err.message));
    }
  });
};

exports.addUser = (req, res) => {
  const { username, password } = req.body;

  getUserByName(username, (err, users) => {
    if (err) console.log(err.message);
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

exports.checkLogin = (req, res) => {
  if (req.cookies.usr) {
    jwt.verify(req.cookies.usr, process.env.JWT_SECRET, function(err, decoded) {
      if (err) {
        return res.status(403).send({ status: 'error', message: err });
      }
      return res.status(200).send({ status: 'success' });
    });
  } else {
    res.status(403).send({ status: 'error' });
  }
};
