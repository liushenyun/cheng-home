util 工具函数
=========================
[TOC]


## 使用

##### 单独使用
```js

import isArray from '../util/isArray'
let a = [1,2,3]
isArray(a) // => true or false

```

##### 整体使用

```js
import { isArray } from '../util/index.js';
util.isArray([1,2,3])
```


## 注意事项
- 'deIsMac':文件夹前有dt是dtston特有的。'isArray':没有dt任何地方都可以使用
- 参考：https://github.com/lodash
- @version 进行版本说明。0.0.1是开发版本未在项目中使用，修改过就需要加1（例：0.0.2）   ；1.0.0是在项目中使用过，之后每次修改就需要加1（例：1.0.1）


## 功能列表(公共)
- isArray 【判断是不是数组 ok】
- isObject【判断是否为对象 ok 】
- isEmpty 【判断是否为空 ok】
- isNull 【判断是否为null ok】
- Throttle 【函数调频 ok】
- Debounce 【函数防抖 ok】
- isPhone 【判断是否为手机号 ok】
- lessThanTenAddZero 【判断值是否小于10，小于10前面补0 ok】
- getTodayDate 【获取今天日期 ok】
- getDateFromSomedayWithDistance(someday,n,type = '-') 【ok 获取某天日期前后的任意天数的日期】
- dateFormat 【日期格式化 ok】
- isEmail 【判断是否为邮箱 ok】
- formatParams 【格式化参数对象 ok】


## 功能列表（dt公用）
- dtIsMac 【判断Mac是否正确 ok】
- dtAes 【Aes加密 ok】- 【aesEncrypt（加密），aesDecrypt（解密）】
- dtIsVerificationCode 【验证码验证 ok】
- dtGetUid 【Dtston 微信登录获取uid、token ok】
- dtIsPassword 【Dt验证密码 ok】
- dtMqtt 【微信端 mqtt ok】
- dtPcAreaDataFitEle 【element-ui Cascader 级连地区筛选数据 ok】
- DtPCAreaDataPlus 【适应element-ui 联级选择器地区选择器的数据 ok】
- DtPCAreacodeText 【适应element-ui 根据编码可以获得省市区名字 ok】
- dtWechatOnly 【Dt 限制只能在微信里访问 ok】

## 单个说明

#### isArray
判断是不是数组
```js
/**
 * @param {string} [somebody=John Doe] - Somebody's name.
 */

/**
* @description 判断是不是数组
* @version 0.0.1
* @param { any } value - 传入需要判断的值
* @return { Boolean } true or false
* @example
 * isArray([1, 2, 3]);
 * // => true
 * 
 * isArray('abc');
 * // => false
*/
isArray(value)
```
#### isObject
判断是否为对象

```js
/**
 * 判断是否为对象
 * @version 0.0.1
 * @param { any } value - '[]'or ...
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * isObject({})
 * // => true
 *
 * isObject(Function)
 * // => true
 *
 * isObject(null)
 * // => false
 */
isObject(value)
```
#### isEmpty
判断是否为空 
```js
/**
 * 判断是否为空 
 * @version 0.0.1
 * @param { any } value - '[]'or ...
 * @returns {boolean} Returns `true` if `value` is an Array, else `false`.
 * @example
 *
 * isEmpty({})
 * // => false
 *
 * isEmpty('')
 * // => true
 */
isEmpty(value)
```
#### isNull
判断是否为null 
```js
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
 * isNull(null)
 * // => true
 */
 isNull(value)
```

#### Throttle
控制回调在特定时间调用的次数(每多少毫秒调用一次);
```js
/**
 * 函数节流
 * @version 1.0.1
 * @param { Function } func 要执行的函数
 * @oaram { number } [wait=0] - 500 多少毫秒执行一次
 * @oaram options 
 * @example  click事件  vue methods中
 * clickAll: Throttle(function(params) {
 *     console.log(454);
 *   }, 500),
 *
 */
throttle(func, wait, options);
```


#### Debounce
事件触发时不会立即激活回调，相反会等待一定得时间并检查相同的事件是否会再次触发。如果是，重置定时器，并再次等待。如果再等待期间没有发生相同事件，就会立即激活回调。（常用在input里）
```js
/**
 * 函数防抖
 * @version 1.0.1
 * @param { Function } func 要执行的函数
 * @poaram { number } [wait=0] - 500 多少毫秒执行一次
 * @param { Object } [ options = {} ] - 可选对象
 * @poaram { boolean } [options.leading=false] - (false)触发500ms执行 || (true)触发后立即执行而后过500ms再次触发
 * @poaram { number } [options.maxWait] - 2000  最多等多久需要触发一次
 * @poaram { boolean } [options.trailing=true] - 最后是否触发
 * @example  click事件  vue methods中
 * clickAll: debounce(function(params) {
 *     console.log(454);
 *   }, 500),
 *
 */

debounce(func, wait, options)
```
#### isPhone
判断是否为手机号 
```js
/**
 * 判断是否为手机号
 * @version 1.0.1
 * @param { any } value - '[]'or ...
 * @returns {boolean} Returns `true` if `value` is an null, else `false`.
 * @example
 *
 * isPhone({})
 * // => null
 *
 * isPhone(13828758660)
 * // => ["13828758660"]
 */
 isPhone(value)
```
#### lessThanTenAddZero
判断数值是否小于0，小于0在前面补0 
```js
/**
 * 判断数值是否小于0，小于0在前面补0 
 * @version 1.0.1
 * @param { Number||number-string } num - 1 or '8' or 10
 * @returns { String } Returns '01' or '12'
 * @example
 *
 * lessThanTenAddZero(10)
 * // => '10'
 *
 * lessThanTenAddZero(2)
 * // => '02'
 */
 lessThanTenAddZero(num)
```

#### getTodayDate
获取今天日期
```js
/**
 * 获取今天日期
 * @version 1.0.1
 * @param { String } type - '-'||'.'||...
 * @returns { String } Returns '2017-02-06'
 * @example
 *
 * getTodayDate()
 * // => '2017-02-06'
 *
 * getTodayDate('.')
 * // => '2017.02.06'
 */
 getTodayDate(num)
```

#### getDateFromSomedayWithDistance
获取某天日期前后的任意天数的日期
```js
/**
 * 获取某天日期前后的任意天数的日期
 * @version 1.0.1
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
 getDateFromSomedayWithDistance('2017-11-23',3,'.')
```


#### dateFormat
格式化日期
```js
/**
 * 格式化日期
 * @version 1.0.1
 * @param { Date Object } date 日期对象 new Date() || new Date('2016-09-02') || new Date(1512347715000)【时间戳必须是毫秒】....
 * @param { String } fmt 返回格式 'yyyy-MM-dd hh:mm:ss' || 'yyyy.MM.dd' || ...
 * @returns { String } 返回的日期 "2017-12-04 08:35:15" || "2017-12-04" || ...
 * @example
 * dateFormat(new Date(), 'yyyy-MM-dd')
 * => "2017-12-07"
 * dateFormat(new Date('2016-09-02'), 'yyyy.MM.dd hh:mm:ss')
 * => "2016.09.02 08:00:00"
 * dateFormat(new Date(1512347715000), 'yyyy-MM-dd hh:mm:ss')
 * => "2017-12-04 08:35:15"
 */
dateFormat(new Date(1512347715000), 'yyyy-MM-dd hh:mm:ss')
```


#### isEmail
格式化日期
```js
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
isEmail('123@qq.com')
```
#### formatParams
格式化参数对象
```js
/**
 * 格式化参数对象，去掉参数对象value为空的属性
 * @param { Object } params - { 'device_id': '', 'mac': 'EASF450'  }
 * @returns { Object } - { 'mac': EASF450 }
 * @example
 * formatParams({ 'device_id': '', 'mac': 'EASF450'  })
 * // => { 'mac': 'EASF450' }
 */
formatParams({ 'device_id': '', 'mac': 'EASF450'  })
```


--------------
## dt单个说明

#### dtIsMac
Dtston Mac验证
```js
/**
 * Dtston Mac验证
 * @version 1.0.1
 * @param { String } mac - 'EDS5444545AS'
 * @returns { String || null }  Returns mac字符串 例："EASD56SD9875"
 * @example
 * 
 * dtIsMac('ss')
 * => false
 * dtIsMac('EASD56SD9875')
 * => true
 */
 dtIsMac('EASD56SD9875')
```

#### dtAes
Dtston AES加密
```js
/**
 * Dtston AES加密  "每个项目需要有不同的key值"
 * @version 1.0.1
 * @example
 * 
 * aesEncrypt('123456') 加密
 * => 'Y+ahQX0nTjpYJeSHV00P0w=='
 * 
 * aesDecrypt('Y+ahQX0nTjpYJeSHV00P0w==') 解密
 * => '123456'
 */
 aesEncrypt('123456');
 aesDecrypt('Y+ahQX0nTjpYJeSHV00P0w==')
```

#### dtIsVerificationCode
 Dtston 验证码验证
```js
/**
 * Dtston 验证码验证
 * @version 1.0.1
 * @param { String } code - '012456'
 * @returns { false || Strng } Returns false or '123456' or null
 * @example
 * 
 * isVerificationCode('4556')
 * => false
 */
 isVerificationCode('4556')
```

#### dtGetUid
Dtston 微信登录
```js
/**
 * Dtston getUidToken
 * @version 1.0.1
 * @returns { Object } args - {uid:'10004',token:'dsldkoe2987dasdkjhjk'}
 */
 let UserInfo = dtGetUid()
```
#### dtIsPassword
Dtston 判断登录密码是否正确

```js
/**
 * 判断登录密码是否正确
 * @version 0.0.1
 * @param { Any } psd - 1382875
 * @returns { String || null }
 * @example
 * dtIsPassword("dskjhh23786");
 * => true
 */
dtIsPassword('45445464dds');
```
#### dtMqtt
Dtston  wechat mqtt
```js
/**
 * Dtston  wechat mqtt
 * @version 1.0.1
 * 需要mqtt插件：npm install mqtt --sava
 * 测试地址：http://testfiles.ourslinks.com:8080/
 * 测试的时候可以:
 * 主题：dt2014/web/e0b94da08400
 * 要发送的消息结构：{"project":"yiannuo","type":"status","data":{"refrigerate_switch":"1","today_make_water":"20","total_make_water":"56","raw_water":100,"pure_water":80}}
 * import { closeSocket, openSocket } from "../utils/dtMqtt.js";
 * 方法：openSocket() =>连接mqtt
 * 方法：closeSocket() => 关闭mqtt 防止浪费资源
 */
openSocket("AB45sd56s587s55"); // 连接mqtt
closeSocket(); // 关闭mqtt
```

#### DtPCAreaDataPlus  DtPCAreacodeText
```js
/**
 * @version 1.0.1
 * 从后台获取地区参数转换成element-ui Cascader 级联选择器需要的数据格式
 * 参照 https://github.com/Plortinus/element-china-area-data
 * DtPCAreaDataPlus  完整数据格式 得到的是省市区编码
 * DtPCAreacodeText  可以根据省市区编码得到省市区名字
 */
 * 
 areaChange(value) {
    // 北京市 
    let code = value[0]; // 110000
    let text = DtPCAreacodeText[code]; // 北京
  }, 
```

### dtWechatOnly
只允许在微信端登录
```js
/**
 * 只允许在微信端登录，在已进入调用次方法即可
 * @version 1.0.1
 * @example
 * weChatOnly();
 */
weChatOnly();
```
