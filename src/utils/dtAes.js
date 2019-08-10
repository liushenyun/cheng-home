/**
 * Dtston AES加密  "每个项目需要有不同的key值"
 * @version 0.0.1
 * @example
 * aesEncrypt('123456') 加密
 * => 'Y+ahQX0nTjpYJeSHV00P0w=='
 * aesDecrypt('Y+ahQX0nTjpYJeSHV00P0w==') 解密
 * => '123456'
 */
import GibberishAES from './plugin/gibberish-aes';
let key = [50, 51, 102, 101, 102, 101, 99, 50, 97, 55, 99, 52, 97, 49, 101, 100, 101, 57, 101, 54, 48, 51, 51, 57, 57, 54, 51, 56, 99, 54, 55, 48];
// key = 'dslkdjslyewsafhladifew45'
const stringKey = key => key.map(v => String.fromCharCode(v)).join(''); // ascII码 => 字符串

let trueKey;
// eslint-disable-next-line
if ((typeof key) === 'string') {
  trueKey = key; // aesKey是字符串
} else {
  trueKey = stringKey(key); // aesKey是数组
}

// aes加密
const aesEncrypt = item => GibberishAES.aesEncrypt(item, trueKey).trim();
// aes解密
const aesDecrypt = item => GibberishAES.aesDecrypt(item, trueKey);

export {
  aesEncrypt,
  aesDecrypt
}
