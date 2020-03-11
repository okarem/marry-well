const express = require('express');

const router = express.Router();
const user = require('./users');
const createUser = require('./createUser');

router.post('/authenticate', user.authenticateUser);
router.post('/createUser', createUser.addUser);

module.exports = router;
