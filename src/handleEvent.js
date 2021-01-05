const replyTextMessage = require('./lib/replyTextMessage');
const getClass = require('./lib/getClass');

const handleEvent = (event) => {
  // テキストメッセージ以外の時、何もしない
  if (event.type !== 'message' || event.message.type !== 'text') {
    return Promise.resolve(null);
  }

  const requestMessage = event.message.text; // 受信メッセージ
  let message = ''; // 送信メッセージ

  const containOfText = (text) => requestMessage.indexOf(text) >= 0;
  if (containOfText('時間割')) {
    let classData = null;
    if (containOfText('月曜')) {
      classData = getClass('monday');
      message += '[月曜の時間割]\n';
    } else if (containOfText('火曜')) {
      classData = getClass('thuseday');
      message += '[火曜の時間割]\n';
    } else if (containOfText('水曜')) {
      classData = getClass('wednesday');
      message += '[水曜の時間割]\n';
    } else if (containOfText('木曜')) {
      classData = getClass('thursday');
      message += '[木曜の時間割]\n';
    } else if (containOfText('金曜')) {
      classData = getClass('friday');
      message += '[金曜の時間割]\n';
    }
    for (let i = 1; i <= 6; i++) {
      if (classData && classData[i])
        message += `${i}時間目: ${classData[i]['name']}\n`;
    }
    message = message.slice(0, -1);
  }

  if (!message)
    message =
      '適切なワードを入れてください。\n例えば、\n「月曜の時間割教えて」\n「次の教室教えて」\nなど';

  return replyTextMessage(event.replyToken, message);
};
module.exports = handleEvent;
