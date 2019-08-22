import { baseUrl, APP_ID } from '../config/index'
import axios from 'axios';
import Vue from 'vue';
import Store from '../store'
import qs from 'qs';
import formatParams from '../utils/formatParams';
// import { addCommonParams } from './paramsFormat'
import { getWeCodeA } from './requestFun'
import { getToken } from '../common/js/ut'
axios.defaults.baseURL = baseUrl;
axios.defaults.timeout = 50000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// 全局ajax请求拦截器
// POST传参序列化
axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
}, (error) => {
  console.log(error);
});
const _closeLoading = () => { Store.dispatch('showLoading', false) };
const _openLoading = () => { Store.dispatch('showLoading', true) };

const fetchs = (options, fun) => {
  // Vue.prototype.$toast('454')
  let params = options.data
  let _header = Object.assign({}, options.header)
  params = formatParams(params); // 参数序列化
  // if (url !== 'account/login') {
  //   let _accessToken = localStorage.getItem('Three-Access_Token');
  //   axios.defaults.headers['Access-Token'] = _accessToken;
  // } else {
  //   axios.defaults.headers['Access-Token'] = '';
  // }
  setTimeout(_openLoading, 0);
  setTimeout(_closeLoading, 3000); // 防止接口报错，后台30s不返回数据，过30s后loading消失
  let _config = {
    url: options.url,
    method: options.method || 'GET'
  }
  if (options.method == 'GET') {
    _config.params = params
  } else {
    _config.data = params
  }
  return new Promise((resolve, reject) => {
    axios({
      url: options.url,
      params: params,
      method: options.method || 'GET',
      headers: {
        UserAuthentication: getToken() || '',
        ..._header
      }
    })
      .then(response => {
        setTimeout(_closeLoading, 500);
        let { status, data } = response
        console.log(status, data)
        let errorCode = data.code === undefined ? 'none' : Number(data.code)
        let errMsg = data.msg
        let result = data.data

        console.log(errorCode, errMsg)
        if (status == 200) {
          if (errorCode == 0) {
             resolve(result)
          } else if (errorCode == 401) {
            // getWeCodeA(APP_ID)
            console.log('去登录')
          } else {
            Vue.prototype.$toast(errMsg)
            console.log('弹出', errMsg)
          }
        } else {
          console.log('系统错误')
        }
          // if (statusCode === 200) {
          //   if (errorCode == 0) {
          //     if (options.noOutData) {
          //       resolve(res.data)
          //     } else {
          //       resolve(res.data.data)
          //     }
          //   } else {
          //     miniPro.showToast(errMsg)
          //     reject(data)
          //   }
          // } else if (statusCode == 401) {
          //   Auth.getInstance().checkWebchatAuth(true, fun, true)
          // } else if (statusCode === 403) { // 未绑定需要绑定操作（手机号，验证码）
          //   miniPro.showToast('请先登录')
          //   setTimeout(() => {
          //     wepy.navigateTo({ url: '/pages/login/index' })
          //   }, TOAST_DURATION - 1000)
          //   reject(data)
          // } else if (statusCode === 400) {
          //   reject(data)
          //   // 解决置换token的时候再次返回400 isGettingToken 为true无法再次走登录流程
          //   wepy.setStorageSync('isGettingToken', false);
          //   if (data.error) {
          //     if (data.error === 'invalid_grant' || data.error === 'wechat.code.expire' || data.error === 'wechatToken.time.out') {
          //       Auth.getInstance().checkWebchatAuth(true, fun, true)
          //     } else if (data.error === 'mobile.bind') {
          //       miniPro.showToast('手机号已被占用，无法获取数据');
          //     }
          //   }
          // } else if (statusCode === 500 && data && data.status == 500) {
          //   reject(res.data)
          // } else {
          //   miniPro.showToast('加载失败')
          //   reject(res)
          // }
      })
      // , err => {
      //   console.log(48, err);
      //   reject(err)
      // })
      .catch((error) => {
        console.log(error)
        // console.log(52, error);
        // Vue.prototype.$message({
        //   message: '请求出错，可能是网络问题',
        //   position: 'middle',
        //   duration: 2000
        // });
        reject(error)
      })
  })
}
export default fetchs;
