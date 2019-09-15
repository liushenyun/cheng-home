/**
 * 获取某天日期前后的任意天数的日期
 * @version 0.0.1
 * @param { string }
 * @param { DateString }  someday - 某天的日期  例： 2017-1-30 || 2017.1.30 || 2017/1/30 || new Date()【代表今天】
 * @param { Number }  n 任意天数的值 正值：someday之后的日期  负值：someday之前的日期
 * @param { String } [type] 日期连接符
 * @returns { String } Returns 日期字符串 例：2017-11-13 2017.02.06
 * @example
 * getDateFromSomedayWithDistance('2017-11-23',3,'.')
 * => 2017.11.26
 * getDateFromSomedayWithDistance('2017.11.23',-3)
 * => 2017-11-20
 */
import lessThanTenAddZero from './lessThanTenAddZero';

function getDateFromSomedayWithDistance(someday, n, type = '-') {
  let _type = type || '-';
  let _someday = someday || new Date();
  let _n = Number(n);
  let getDates = new Date(_someday); // 2017-1-30 || 2017.1.30 || 2017/1/30 || new Date();
  let setDay = getDates.setDate(getDates.getDate() + _n);
  let trueDay = new Date(setDay);
  let _year = trueDay.getFullYear();
  let _month = lessThanTenAddZero(trueDay.getMonth() + 1);
  let _date = lessThanTenAddZero(trueDay.getDate());
  return _year + _type + _month + _type + _date;
}

export default getDateFromSomedayWithDistance
