const express = require('express');

const router = express.Router();
const user = require('./users');
const { fetchBudgetData, addBudgetDataItem } = require('./budget');
const createUser = require('./createUser');

router.get('/api/getBudget', fetchBudgetData);
router.post('/api/addBudgetItem', addBudgetDataItem);
router.post('/authenticate', user.authenticateUser);
router.post('/createUser', createUser.addUser);

module.exports = router;
