const classJsonData = require('../data/class.json');

/**
 * 授業データを取得
 * @param {string} week - 曜日
 * @return {object | null} - 授業データ
 */
const getClass = (week) => {
  let classDayData = null;
  switch (week) {
    case 'monday':
      classDayData = classJsonData.monday || null;
      break;
    case 'thuseday':
      classDayData = classJsonData.thuseday || null;
      break;
    case 'wednesday':
      classDayData = classJsonData.wednesday || null;
      break;
    case 'thursday':
      classDayData = classJsonData.thursday || null;
      break;
    case 'friday':
      classDayData = classJsonData.friday || null;
      break;
  }
  return classDayData || null;
};

module.exports = getClass;
