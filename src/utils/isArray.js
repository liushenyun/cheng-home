/**
 * 判断是否为数组
 * @version 0.0.1
 * @param { any } value - '[]'or ...
 * @returns {boolean} Returns `true` if `value` is an Array, else `false`.
 * @example
 *
 * _isArray({})
 * // => false
 *
 * _isArray([1, 2, 3])
 * // => true
 *
 * _isArray(null)
 * // => true
 */
let _isArray = (value) => {
  return Array.isArray(value);
};
export default _isArray;
