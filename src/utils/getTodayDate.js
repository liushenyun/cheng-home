/**
 * 获取今天日期
 * @param { String } type - '-'||'.'
 * @returns { String } '2017-06-19'
 */
import lessThanTenAddZero from './lessThanTenAddZero';

function getTodayDate(type) {
  let _type = type || '-';
  let _day = new Date();
  let _year = _day.getFullYear();
  let _month = lessThanTenAddZero(_day.getMonth() + 1);
  let _date = lessThanTenAddZero(_day.getDate());
  return _year + _type + _month + _type + _date;
}
export default getTodayDate;
