import Vue from "vue";
import fetch from './index';
import packagePromise from './packagePromise'
import {
  newsPageApi,
  activityPageApi,
  loginApi, activityPayApi,
  activityApplyApi,
  sponsorDonationApi,
  activityReapplyApi,
  listParentApi,
  userIsloginApi,
  sponsorListApi
} from './apiUrl';
import Validate from './Validate';
import { aesEncrypt } from "../utils/dtAes";
import isEmpty from "../utils/isEmpty";
import { send } from './formdata';

/* ==== 用户http请求提示 =====  */
// const SuccessTips = (con, callbck, type = 'success') => {
//   Vue.prototype.$message({
//     showClose: true,
//     message: con,
//     duration: 1500,
//     type: type
//   });
//   setTimeout(() => {
//     callbck && callbck()
//   }, 1400);
// };

// 判断用户是否登陆和关注
const userIsloginApiF = (data = {}, fun) => packagePromise((resolve, reject) => {
  // debugger
  fetch({
    url: userIsloginApi(),
    method: 'GET',
    data: {}
  }, fun)
    .then(msg => {
      console.log(msg)
      // debugger
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 获取新闻列表
const apiNewsPageF = (data, fun) => packagePromise((resolve, reject) => {
  fetch({
    url: newsPageApi(),
    method: 'GET',
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 获取首页活动列表
const activityPageApiF = (data, fun) => packagePromise((resolve, reject) => {
  fetch({
    url: activityPageApi(),
    method: 'GET',
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 登录
const loginApiF = (data, fun) => packagePromise((resolve, reject) => {
  let isLogin = localStorage.getItem('PU-isLogin')
  console.log(1222, isLogin, Vue.prototype.$eventQueue)
  if (isLogin == 'YES') { return }
  localStorage.setItem('PU-isLogin', 'YES')
  // debugger
  fetch({
    url: loginApi(),
    method: 'GET',
    data
  }, fun)
    .then(msg => {
      console.log(msg)
      localStorage.setItem('PU-isLogin', 'NO')
      // debugger
      resolve(msg)
    })
    .catch(err => {
      console.log(err)
      // debugger
      localStorage.setItem('PU-isLogin', 'NO')
      reject(err)
    })
})

// 活动支付
const activityPayApiF = (data, fun) => packagePromise((resolve, reject) => {
  fetch({
    url: activityPayApi(),
    method: 'GET',
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 获取微信code
const getWeCodeA = (appid) => {
  let REDIRECT_URI = encodeURIComponent(location.href)
  // let REDIRECT_URI = 'http://testweixin.51vip.biz/mid'
  let url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`
  location.replace(url)
}

// 活动报名
const activityApplyApiF = (data) => packagePromise((resolve, reject) => {
  let _params = data
  console.log(124, _params)
  let vArr = [
    ['name', _params.name, '姓名', 'empty'],
    ['tel', _params.tel, '手机', 'empty|phone'],
    ['ancestral', _params.ancestral, '祖籍', 'empty'],
    ['residence', _params.residence, '现居地', 'empty'],
    ['delegationId', _params.delegationId, '代表团', 'empty']
  ]
  let _Validated = Validate(vArr);
  if (!_Validated) { return };
  fetch({
    url: activityApplyApi(),
    method: 'POST',
    header: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data
  })
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 捐款
const sponsorDonationApiF = (data) => packagePromise((resolve, reject) => {
  let _params = data
  console.log(124, _params)
  let vArr = [
    ['name', _params.name, '姓名', 'empty'],
    ['ancestral', _params.ancestral, '祖籍', 'empty'],
    ['residence', _params.residence, '现居地', 'empty'],
    ['tel', _params.tel, '电话', 'empty|phone'],
    ['amount', _params.amount, '金额', 'empty']
  ]
  let _Validated = Validate(vArr);
  if (!_Validated) { return };
  fetch({
    url: sponsorDonationApi(),
    method: 'POST',
    header: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data
  })
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})


// 重新报名
const activityReapplyApiF = (data, fun) => packagePromise((resolve, reject) => {
  fetch({
    url: activityReapplyApi(),
    method: 'POST',
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 活动支付
const listParentApiF = (type, fun) => packagePromise((resolve, reject) => {
  // let _params = {
  //   old_pwd: '2112',
  //   new_pwd: '212',
  //   re_pwd: 4545
  // };
  // let vArr = [
  //   ['old_pwd', _params.old_pwd, '旧密码', 'empty'],
  //   ['new_pwd', _params.new_pwd, '新密码', 'empty|password'],
  //   ['re_pwd', _params.re_pwd, '确认新密码', 'empty|password']
  // ]
  // let _Validated = Validate(vArr);
  // if (!_Validated) { return };

  fetch({
    url: listParentApi(),
    method: 'GET',
    data: {
      type: type
    }
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 捐款记录
const sponsorListApiF = () => packagePromise((resolve, reject) => {
  fetch({
    url: sponsorListApi(),
    method: 'GET',
    data: {}
  })
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

export {
  userIsloginApiF,
  // SuccessTips,
  apiNewsPageF,
  activityPageApiF,
  getWeCodeA,
  loginApiF,
  activityPayApiF,
  activityApplyApiF,
  sponsorDonationApiF,
  activityReapplyApiF,
  listParentApiF,
  sponsorListApiF
}
