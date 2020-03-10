const bcrypt = require('bcrypt');
const { findByUsername } = require('../models/users');

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
};
