const replyTextMessage = require('./lib/replyTextMessage');

const handleEvent = (event) => {
  // テキストメッセージ以外の時、何もしない
  if (event.type !== 'message' || event.message.type !== 'text') {
    return Promise.resolve(null);
  }

  // 受信メッセージ
  const requestMessage = event.message.text;

  // 送信メッセージ
  let message = `受信メッセージ: ${requestMessage}`;

  return replyTextMessage(event.replyToken, message);
};
module.exports = handleEvent;
