/**
 * 判断是否为null
 * @version 0.0.1
 * @param { any } value - '[]'or ...
 * @returns {boolean} Returns `true` if `value` is an null, else `false`.
 * @example
 *
 * isNull({})
 * // => false
 *
 * isNull([1, 2, 3])
 * // => false
 *
 * isNull(null)
 * // => true
 */
let isNull = (value) => {
  return value === null;
};
export default isNull;
