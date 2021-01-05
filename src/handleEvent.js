const replyTextMessage = require('./lib/replyTextMessage');

const handleEvent = (event) => {
  // テキストメッセージ以外の時、何もしない
  if (event.type !== 'message' || event.message.type !== 'text') {
    return Promise.resolve(null);
  }

  let message = 'テストメッセージ';
  return replyTextMessage(event.replyToken, message);
};
module.exports = handleEvent;
