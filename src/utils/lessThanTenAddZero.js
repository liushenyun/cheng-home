/**
 * 判断值是否小于10，小于10前面补0
 */
function lessThanThenAdd(num) {
  let _num = num;
  if (_num < 10) {
    return '0' + _num;
  } else {
    return '' + _num
  }
}
export default lessThanThenAdd;
