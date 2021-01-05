const express = require('express');

const router = express.Router();
router.get('/api', (req, res) => {
  res.send('Hello, 授業マイスターAPI');
});

module.exports = router;