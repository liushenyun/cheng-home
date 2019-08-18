import { Domain } from '../config/index'

// 获取首页新闻列表
const newsPageApi = () => `${Domain}/api/news/page`

// 登录
const loginApi = () => `${Domain}/api/user/login`

// 获取jsapi配置
const jsConfigApi = () => `${Domain}/wx/js/config`

// 活动支付
const activityPayApi = () => `${Domain}/api/activity/pay`

export {
  newsPageApi,
  loginApi,
  jsConfigApi,
  activityPayApi
};
