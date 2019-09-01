import { Domain } from '../config/index'
// 判断用户是否登陆和关注
const userIsloginApi = () => `${Domain}/api/user/islogin`

// 获取首页新闻列表
const newsPageApi = () => `${Domain}/api/news/page`

// 获取首页活动列表
const activityPageApi = () => `${Domain}/api/activity/page`

// 登录
const loginApi = () => `${Domain}/api/user/login`

// 获取jsapi配置
const jsConfigApi = () => `${Domain}/wx/js/config`

// 活动支付
const activityPayApi = () => `${Domain}/api/activity/pay`

// 活动报名
const activityApplyApi = () => `${Domain}/api/activity/apply`

// 重新报名
const activityReapplyApi = () => `${Domain}/api/activity/reapply`

// 获取代表团
const listParentApi = () => `${Domain}/common/dictionary/list/parent`

// 捐款
const sponsorDonationApi = () => `${Domain}/api/sponsor/donation`

// 捐款记录
const sponsorListApi = () => `${Domain}/api/sponsor/list`

// 获取活动的审核状态
const activityStatusApi = () => `${Domain}/api/activity/status`

export {
  userIsloginApi,
  newsPageApi,
  activityPageApi,
  loginApi,
  jsConfigApi,
  activityPayApi,
  activityApplyApi,
  activityReapplyApi,
  listParentApi,
  sponsorListApi,
  sponsorDonationApi,
  activityStatusApi
};
