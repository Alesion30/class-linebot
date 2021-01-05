const express = require('express');

const router = express.Router();
router.get('/api', (req, res) => res.send('Hello, 授業マイスターAPI'));
router.get('/api/env', (req, res) => res.send(process.env));

module.exports = router;
