import Vue from "vue";
import fetch from './index';
import packagePromise from './packagePromise'
import { newsPageApi, loginApi, activityPayApi } from './apiUrl';
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

// 登录
const loginApiF = (data, fun) => packagePromise((resolve, reject) => {
  fetch({
    url: loginApi(),
    method: 'GET',
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 活动支付
// 登录
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
  let url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`
  window.open(url)
}

export {
  // SuccessTips,
  apiNewsPageF,
  getWeCodeA,
  loginApiF,
  activityPayApiF
}
