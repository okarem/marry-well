const express = require('express');

const router = express.Router();
const user = require('./users');
const { fetchBudgetData, addBudgetDataItem, updateBudgetDataItem, deleteBudgetDataItem } = require('./budget');
const { fetchStuffData, addStuffDataItem } = require('./stuff');
const { addGuestsData } = require('./guests');

const createUser = require('./createUser');

/*--- Budget REST-API handlers ---*/
router.get('/api/getBudget', fetchBudgetData);
router.post('/api/addBudgetItem', addBudgetDataItem);
router.put('/api/updateBudgetItem', updateBudgetDataItem);
router.delete('/api/deleteBudgetItem', deleteBudgetDataItem);

/*--- Stuff REST-API handlers ---*/
router.get('/api/getStuff', fetchStuffData);
router.post('/api/addStuffItem', addStuffDataItem);

router.post('/authenticate', user.authenticateUser);
router.post('/createUser', createUser.addUser);
router.post('/api/addGuests', addGuestsData);

module.exports = router;
