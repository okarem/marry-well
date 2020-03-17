const express = require('express');

const router = express.Router();
const user = require('./users');
const { fetchBudgetData, addBudgetDataItem } = require('./budget');
const { fetchStuffData, addStuffDataItem, updateStuffDataItem, deleteStuffDataItem } = require('./stuff');
const { addGuestsData } = require('./guests');

const createUser = require('./createUser');

router.get('/api/getBudget', fetchBudgetData);
router.post('/api/addBudgetItem', addBudgetDataItem);
router.get('/api/getStuff', fetchStuffData);
router.post('/api/addStuffItem', addStuffDataItem);
router.put('/api/updateStuffItem', updateStuffDataItem);
router.delete('/api/deleteStuffItem', deleteStuffDataItem);

router.post('/authenticate', user.authenticateUser);
router.post('/createUser', createUser.addUser);
router.post('/api/addGuests', addGuestsData);

module.exports = router;
