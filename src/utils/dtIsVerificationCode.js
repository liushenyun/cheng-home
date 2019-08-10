/**
 * Dtston 验证码验证
 * @version 0.0.1
 * @param { String } code - '012456'
 * @returns { false || Strng } Returns false or '123456' or null
 * @example
 * 
 * isVerificationCode('4556')
 * => false
 */
let DT_CODE_REG = /^[a-zA-Z0-9]{6}$/ig;

function isVerificationCode(code) {
  let _code = code;
  if (_code === null || _code === undefined || _code === '') {
    return false;
  }
  return _code.match(DT_CODE_REG);
}

export default isVerificationCode
