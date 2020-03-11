const express = require('express');

const router = express.Router();
const user = require('./users');
const { fetchBudgetData, addBudgetDataItem } = require('./budget');

router.get('/api/getBudget', fetchBudgetData);
router.post('/api/addBudgetItem', addBudgetDataItem);
router.post('/authenticate', user.authenticateUser);

module.exports = router;
