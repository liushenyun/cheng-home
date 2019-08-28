import Vue from "vue"
import isEmpty from "../utils/isEmpty"
import dtIsPassword from "../utils/dtIsPassword"
import isPhone from '../utils/isPhone'
import isEmail from '../utils/isEmail'
/**
 * empty 为空验证
 * password 密码验证
 * phone 手机号验证
 * area [dt 地区验证]
 * email 邮箱验证
 * account 账号验证
 * phoneDim 手机号模糊查询【没用到】
 * greaterZero 正整数验证
 */
const RegConfig = {
  empty: {
    validate: vData => {
      return !isEmpty(vData);
    },
    con: '不能为空'
  },
  password: {
    validate: vData => {
      return dtIsPassword(vData);
    },
    con: '必须为6-18位字母或数组'
  },
  phone: {
    validate: vData => {
      return isPhone(vData);
    },
    con: '格式不正确'
  },
  area: {
    validate: vData => {
      if (vData === '' || vData === 0 || vData === '0') {
        return false;
      } else {
        return true;
      }
    },
    con: '必须选择'
  },
  email: {
    validate: vData => {
      return isEmail(vData);
    },
    con: '格式不正确'
  },
  account: { // 账号
    validate: vData => {
      return /^\w{3,15}$/.test(vData);
    },
    con: '为3到15位字母或数字'
  },
  phoneDim: {
    validate: vData => {
      return /^\d{1,11}$/.test(vData);
    },
    con: '必须为数字'
  },
  greaterZero: {
    validate: vData => {
      return /^[1-9]\d*$/.test(vData);
    },
    con: '必须为正整数'
  }
};

const Validate = (params) => {
  for (let key1 = 0; key1 < params.length; key1++) {
    let _item = params[key1]; // ['password', '126', '密码', 'trim|password']
    let _vCon = _item[1]; // 需要验证的内容
    let _vErrTip = _item[2]; // 错误提示的内容
    let _vRegArr = _item[3].split('|'); // 需要验证的规则
    for (let key2 = 0; key2 < _vRegArr.length; key2++) {
      let _vRegName = _vRegArr[key2]; // 验证规则名字
      /**
       * options 必须写在首位
       * 首先判断是否包含options
       * 如果是options就立刻判断空验证，如果为空跳出本次循环
       */
      if (_vRegName === 'options') { // 'options|empty|account'
        let _vEmptyReturn = RegConfig['empty'].validate(_vCon);
        if (!_vEmptyReturn) { // options选项时，如果为空就跳出判断
          break;
        }
      } else {
        let _vReturn = RegConfig[_vRegName].validate(_vCon);
        if (!_vReturn) {
          Vue.prototype.$toast(_vErrTip + RegConfig[_vRegName].con);
          return false;
        }
      }
    }
  }
  return true;
};
// const Validate = (params) => {
//   for (let key1 = 0; key1 < params.length; key1++) {
//     console.log(key1);
//     let _item = params[key1]; // ['password', '126', '密码', 'trim|password']
//     let _vCon = _item[1]; // 需要验证的内容
//     let _vErrTip = _item[2]; // 错误提示的内容
//     console.log(_item[3]);
//     let _vRegArr = _item[3].split('|'); // 需要验证的规则
//     for (let key2 = 0; key2 < _vRegArr.length; key2++) {
//       let _vRegName = _vRegArr[key2]; // 验证规则名字
//       if (_vRegName.includes('options')) {
//         let _vEmptyReturn = RegConfig['empty'].validate(_vCon);
//         console.log('54', _vEmptyReturn);
//         if (!_vEmptyReturn) { // options选项时，如果为空就跳出判断
//           break;
//         }
//       } else {
//         let _vReturn = RegConfig[_vRegName].validate(_vCon);
//         if (!_vReturn) {
//           Vue.prototype.$message.warning(_vErrTip + RegConfig[_vRegName].con);
//           return false;
//         }
//       }
//     }
//   }
//   return true;
// };
export default Validate
