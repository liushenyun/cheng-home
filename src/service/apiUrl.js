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

// 发送验证码
const codeSendApi = () => `${Domain}/common/code/send`

// 绑定手机号
const userBindApi = () => `${Domain}/api/user/bind`

// 获取用户信息
const userInfoApi = () => `${Domain}/api/user/info`

// 编辑用户信息
const userUpdateApi = () => `${Domain}/api/user/update`

// 上传实时播报内容
const broadcastUpdateApi = () => `${Domain}/api/activity/broadcast/update`

// 获取实时播报内容
const broadcastListApi = () => `${Domain}/api/activity/broadcast/list`

// 查看行程信息
const tripInfoApi = () => `${Domain}/api/activity/trip/info`

// 活动行程添加
const tripCreateApi = () => `${Domain}/api/activity/trip/create`

// 更新行程信息
const tripUpdateApi = () => `${Domain}/api/activity/trip/update`

// 资助申请【列表】
const crowdfundingPageApi = () => `${Domain}/api/crowdfunding/page`

// 资助申请【详情】
const crowdfundingInfoApi = () => `${Domain}/api/crowdfunding/info`

// 资助记录【列表】
const crowdfundingRecordPageApi = () => `${Domain}/api/crowdfunding/record/page`

// 我发起的资助申请【列表】
const crowdfundingPageLaunchedApi = () => `${Domain}/api/crowdfunding/page/launched`

// 我参与的资助申请【列表】
const crowdfundingPagePartApi = () => `${Domain}/api/crowdfunding/page/part`

// 资助申请【创建】
const crowdfundingCreateApi = () => `${Domain}/api/crowdfunding/create`

// 资助申请【更新】
const crowdfundingUpdateApi = () => `${Domain}/api/crowdfunding/update`

// 资助记录【支付】
const crowdfundingRecordCreateApi = () => `${Domain}/api/crowdfunding/record/create`

// 资助记录【获取捐赠证书】
const crowdfundingRecordCertApi = () => `${Domain}/api/crowdfunding/record/cert`

// 新闻详情
const newsInfoApi = () => `${Domain}/api/news/info`

// 获取活动详情
const activityInfoApi = () => `${Domain}/api/activity/info`

// /api/activity/info
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
  activityStatusApi,
  codeSendApi,
  userBindApi,
  userInfoApi,
  userUpdateApi,
  broadcastUpdateApi,
  broadcastListApi,
  tripInfoApi,
  tripCreateApi,
  tripUpdateApi,
  crowdfundingPageApi,
  crowdfundingInfoApi,
  crowdfundingRecordPageApi,
  crowdfundingPageLaunchedApi,
  crowdfundingPagePartApi,
  crowdfundingCreateApi,
  crowdfundingUpdateApi,
  crowdfundingRecordCreateApi,
  crowdfundingRecordCertApi,
  newsInfoApi,
  activityInfoApi
};
