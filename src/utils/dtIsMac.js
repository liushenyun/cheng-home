/**
 * Dtston Mac验证
 * @version 0.0.1
 * @param { String } mac - 'EDS5444545AS'
 * @returns { String || null }  Returns mac字符串 例："EASD56SD9875"
 * @example
 * 
 * dtIsMac('ss')
 * => false
 * dtIsMac('EASD56SD9875')
 * => true
 */
let TD_MAC_REG = /^[a-zA-Z0-9]{12}$/ig;

function dtIsMac(mac) {
  let _mac = mac;
  if (_mac === null || _mac === undefined || _mac === '') {
    return false;
  }
  return _mac.match(TD_MAC_REG);
}

export default dtIsMac;
