const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Testing if the server work !!!');
});

router.get('/test', (req, res) => {
  res.json({ name: 'Mahmod', age: 26 });
});
module.exports = router;
