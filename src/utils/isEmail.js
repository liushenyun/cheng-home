/**
 * 判断是否为邮箱
 * @version 0.0.1
 * @param { any } value - '[]'or ...
 * @returns {boolean} Returns `true` if `value` is an Array, else `false`.
 * @example
 *
 * isEmail(12@qq.com)
 * // => true
 *
 * isEmail(123)
 * // => false
 */

const EMAIL_REG = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/i;
let isEmail = (email) => {
  if (email === null || email === undefined) {
    return false;
  }
  let _email = email;
  if (typeof _email !== 'string' && _email !== null) {
    _email = _email.toString();
  }

  return EMAIL_REG.test(_email);
}
export default isEmail;
