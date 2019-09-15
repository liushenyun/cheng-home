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
  if (config.method === 'post' || config.method == 'POST') {
    if (config.headers && config.headers['Content-Type'] && config.headers['Content-Type'].indexOf('application/json') < 0) {
      config.data = qs.stringify(config.data)
    }
  }
  return config
}, (error) => {
  console.log(error);
});
const _closeLoading = () => { Store.dispatch('showLoading', false) };
const _openLoading = () => { Store.dispatch('showLoading', true) };

const fetchs = (options, fun) => {
  // Vue.prototype.$toast('454')
  let params = options.data || {}
  let _header = Object.assign({}, options.header)
  params = formatParams(params); // 参数序列化
  // if (url !== 'account/login') {
  //   let _accessToken = localStorage.getItem('Three-Access_Token');
  //   axios.defaults.headers['Access-Token'] = _accessToken;
  // } else {
  //   axios.defaults.headers['Access-Token'] = '';
  // }
  setTimeout(_openLoading, 0);
  // setTimeout(_closeLoading, 30000); // 防止接口报错，后台30s不返回数据，过30s后loading消失
  setTimeout(_closeLoading, 300); // 防止接口报错，后台30s不返回数据，过30s后loading消失
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
      headers: {
        UserAuthentication: getToken() || '',
        ..._header
      },
      ..._config
    })
      .then(response => {
        setTimeout(_closeLoading, 500);
        let { status, data } = response
        let errorCode = data.code === undefined ? 'none' : Number(data.code)
        let errMsg = data.msg
        let result = data.data
          console.log(errMsg, errorCode)
          // debugger
        if (status == 200) {
          if (errorCode == 0) {
             resolve(result)
          } else if (errorCode == 401) {
            getWeCodeA(APP_ID)
            reject(errMsg)
          } else if (errorCode == 403) {
            Store.dispatch('showScan', false)
            reject(errMsg)
          } else {
            reject(errMsg)
            Vue.prototype.$toast(errMsg)
          }
        } else {
          Vue.prototype.$toast('系统错误')
        }
      })
      .catch((error) => {
        reject(error)
      })
  })
}
export default fetchs;
