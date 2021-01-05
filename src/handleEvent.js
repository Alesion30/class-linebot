const line = require('@line/bot-sdk');
const lineConfig = require('./config/line');
const client = new line.Client(lineConfig);

const handleEvent = (event) => {
  return client.replyMessage(event.replyToken, {
    type: 'text',
    text: 'テストメッセージ',
  });
};
module.exports = handleEvent;
