const express = require('express');

const router = express.Router();
const { authenticateUser, addUser, checkLogin } = require('./users');
const { fetchStuffData, addStuffDataItem, updateStuffDataItem, deleteStuffDataItem } = require('./stuff');
const { fetchBudgetData, addBudgetDataItem, updateBudgetDataItem, deleteBudgetDataItem } = require('./budget');

const { fetchGuestsData, addGuestsDataItem, updateGuestsDataItem, deleteGuestsDataItem } = require('./guests');
const authCheck = require('./authCheck');

router.get('/api/getBudget', fetchBudgetData);
router.post('/api/addBudgetItem', addBudgetDataItem);
router.put('/api/updateBudgetItem', updateBudgetDataItem);
router.delete('/api/deleteBudgetItem', deleteBudgetDataItem);

router.get('/api/getStuff', authCheck, fetchStuffData);
router.post('/api/addStuffItem', addStuffDataItem);
router.put('/api/updateStuffItem', updateStuffDataItem);
router.delete('/api/deleteStuffItem', deleteStuffDataItem);

router.get('/api/getGuests', authCheck, fetchGuestsData);
router.post('/api/addGuestsItem ', addGuestsDataItem);
router.put('/api/updateGuestsItem', updateGuestsDataItem);
router.delete('/api/deleteGuestsItem', deleteGuestsDataItem);

router.post('/authenticate', authenticateUser);
router.post('/createUser', addUser);

router.get('/ifLoggedIn', checkLogin);

module.exports = router;
