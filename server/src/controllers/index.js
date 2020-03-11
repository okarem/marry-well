const express = require('express');

const router = express.Router();
const user = require('./users');

router.post('/authenticate', user.authenticateUser);

module.exports = router;
