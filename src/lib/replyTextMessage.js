const line = require('@line/bot-sdk');
const lineConfig = require('../config/line');
const client = new line.Client(lineConfig);

const replyTextMessage = (token, message) =>
  client.replyMessage(token, {
    type: 'text',
    text: message,
  });

module.exports = replyTextMessage;
