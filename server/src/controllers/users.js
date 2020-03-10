const bcrypt = require('bcrypt');
const { findByUsername } = require('../models/users');
// const jwt = require('jsonwebtoken');

exports.authenticateUser = (req, res) => {
  const { username, password } = req.body;

  findByUsername(username)
    .then(user => {
      bcrypt
        .compare(password, user.password)
        .then(hashCheck =>
          hashCheck
            ? res.json('Correct')
            : res.json({ status: 'Error', message: 'The password you entered is incorrect !', location: 'users_controller' })
        )

        .catch(err => new Error(err.message));
    })
    .catch(err => res.json(err.message));

  // bcrypt
  // .hash(password, 10)
  // .then(hash => console.log('Hash: ', hash))
  // .catch(err => console.log(err));

  // Testing the bcrypt hashing function if works compared to 123 and it should return true
};
