const line = require('@line/bot-sdk');
const lineConfig = require('../config/line');
const client = new line.Client(lineConfig);

/**
 * メッセージを送信する
 * @param {string} token - トークン
 * @param {string} message - メッセージ
 */
const replyTextMessage = (token, message) =>
  client.replyMessage(token, {
    type: 'text',
    text: message,
  });

module.exports = replyTextMessage;
