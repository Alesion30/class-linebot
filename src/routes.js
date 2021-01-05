const express = require('express');
const handleEvent = require('./handleEvent');

// ルーティング
const router = express.Router();
router.get('/api', (req, res) => res.send('Hello, 授業マイスターAPI'));
router.get('/api/channelSecret', (req, res) =>
  res.send(process.env.channelSecret || '')
);
router.post('/api/webhook', (req, res) => {
  Promise.all(req.body.events.map(handleEvent)).then((result) =>
    res.json(result)
  );
});

module.exports = router;
