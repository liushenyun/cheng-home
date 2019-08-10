/**
 * 判断登录密码是否正确
 * @version 0.0.1
 * @param { Any } psd - 1382875
 * @returns { String || null }
 * [^A-Za-z0-9_]
 */
const DT_PSD_REG = /^\w{6,18}$/
let dtIsPassword = (psd) => {
  if (psd === null || psd === undefined) {
    return false;
  }
  let _psd = psd;
  if (typeof _psd !== 'string' && _psd !== null) {
    _psd = _psd.toString();
  }

  return _psd.match(DT_PSD_REG);
}
export default dtIsPassword;
