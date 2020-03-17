const express = require('express');

const router = express.Router();
const user = require('./users');
const { fetchBudgetData, addBudgetDataItem } = require('./budget');
const { fetchStuffData, addStuffDataItem } = require('./stuff');
const { addGuestsData,getGuestsData } = require('./guests');

const createUser = require('./createUser');

router.get('/api/getBudget', fetchBudgetData);
router.post('/api/addBudgetItem', addBudgetDataItem);
router.get('/api/getStuff', fetchStuffData);
router.post('/api/addStuffItem', addStuffDataItem);
router.post('/authenticate', user.authenticateUser);
router.post('/createUser', createUser.addUser);
router.post('/api/addGuests', addGuestsData);
router.get('/api/getGuests', getGuestsData);

module.exports = router;
