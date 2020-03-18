const express = require('express');

const router = express.Router();
const { authenticateUser, addUser } = require('./users');
const { fetchStuffData, addStuffDataItem, updateStuffDataItem, deleteStuffDataItem } = require('./stuff');
const { fetchBudgetData, addBudgetDataItem, updateBudgetDataItem, deleteBudgetDataItem } = require('./budget');
const { addGuestsData,getGuestsData } = require('./guests');

router.get('/api/getBudget', fetchBudgetData);
router.post('/api/addBudgetItem', addBudgetDataItem);
router.put('/api/updateBudgetItem', updateBudgetDataItem);
router.delete('/api/deleteBudgetItem', deleteBudgetDataItem);

router.get('/api/getStuff', fetchStuffData);
router.post('/api/addStuffItem', addStuffDataItem);
router.put('/api/updateStuffItem', updateStuffDataItem);
router.delete('/api/deleteStuffItem', deleteStuffDataItem);

router.post('/api/addGuests', addGuestsData);
router.get('/api/getGuests', getGuestsData);

router.post('/authenticate', authenticateUser);
router.post('/createUser', addUser);

module.exports = router;
