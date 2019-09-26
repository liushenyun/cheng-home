import Vue from "vue";
import fetch from './index';
import packagePromise from './packagePromise'
import {
  newsPageApi,
  activityPageApi,
  loginApi, activityPayApi,
  activityApplyApi,
  sponsorDonationApi,
  activityStatusApi,
  activityReapplyApi,
  listParentApi,
  userIsloginApi,
  sponsorListApi,
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
  activityInfoApi,
  activityListApi,
  sourceListApi,
  sourceInfoApi,
  familyTreeApi
} from './apiUrl';
import Validate from './Validate';
import { aesEncrypt } from "../utils/dtAes";
import isEmpty from "../utils/isEmpty";
import { send } from './formdata';
import formatParams from '../utils/formatParams';

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
  if (isLogin == 'YES') { return }
  localStorage.setItem('PU-isLogin', 'YES')
  // debugger
  fetch({
    url: loginApi(),
    method: 'GET',
    data
  }, fun)
    .then(msg => {
      localStorage.setItem('PU-isLogin', 'NO')
      // debugger
      resolve(msg)
    })
    .catch(err => {
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
  let vArr = [
    ['name', _params.name, '姓名', 'empty'],
    ['tel', _params.tel, '手机', 'empty|phone'],
    ['idcard', _params.idcard, '身份证', 'empty'],
    ['ancestral', _params.ancestral, '祖籍', 'empty'],
    ['residence', _params.residence, '现居地', 'empty'],
    ['delegationId', _params.delegationId, '代表团', 'empty']
  ]
  let _Validated = Validate(vArr);
  if (!_Validated) { return };
  fetch({
    url: activityApplyApi(),
    method: 'post',
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
  let vArr = [
    // ['name', _params.name, '姓名', 'empty'],
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

// 获取活动的审核状态
const activityStatusApiF = (data) => packagePromise((resolve, reject) => {
  fetch({
    url: activityStatusApi(),
    method: 'GET',
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

// 发送验证码
const codeSendApiF = (data, fun) => packagePromise((resolve, reject) => {
  let _params = data
  let vArr = [
    ['phone', _params.phone, '电话', 'empty|phone']
  ]
  let _Validated = Validate(vArr);
  if (!_Validated) { return };
  fetch({
    url: codeSendApi(),
    method: 'POST',
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 绑定手机号
const userBindApiF = (data, fun) => packagePromise((resolve, reject) => {
  let _params = data
  let vArr = [
    ['phone', _params.phone, '电话', 'empty|phone'],
    ['code', _params.code, '验证码', 'empty']
  ]
  let _Validated = Validate(vArr);
  if (!_Validated) { return };
  fetch({
    url: userBindApi(),
    method: 'POST',
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 获取用户信息
const userInfoApiF = () => packagePromise((resolve, reject) => {
  fetch({
    url: userInfoApi(),
    method: 'GET',
    data: {}
  })
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 编辑用户信息
const userUpdateApiF = (data, fun) => packagePromise((resolve, reject) => {
  let params = formatParams(data)
  let formData = new FormData();
  for (let [key, value] of Object.entries(params)) {
    if (!(key == 'headImageFile' && (value == 'null' || !value))) {
      formData.append(key, value)
    }
  }
  fetch({
    url: userUpdateApi(),
    method: 'POST',
    header: {
      // 'Content-Type': 'multipart/form-data'
    },
    data: formData
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 上传实时播报内容
const broadcastUpdateApiF = (data, fun) => packagePromise((resolve, reject) => {
  let _params = data
  let vArr = [
    ['content', _params.content, '发布内容', 'empty']
  ]
  let _Validated = Validate(vArr);
  if (!_Validated) { return };
  let params = formatParams(data)
  let formData = new FormData();
  for (let [key, value] of Object.entries(params)) {
    formData.append(key, value)
  }
  fetch({
    url: broadcastUpdateApi(),
    method: 'POST',
    data: formData
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 获取实时播报内容
const broadcastListApiF = (activityId) => packagePromise((resolve, reject) => {
  fetch({
    url: broadcastListApi(),
    method: 'GET',
    data: {
      activityId
    }
  })
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 查看行程信息
const tripInfoApiF = (activityId) => packagePromise((resolve, reject) => {
  fetch({
    url: tripInfoApi(),
    method: 'GET',
    data: {
      activityId
    }
  })
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 活动行程添加
const tripCreateApiF = (data, fun) => packagePromise((resolve, reject) => {
  // let _params = data
  // let vArr = [
  //   ['phone', _params.phone, '电话', 'empty|phone'],
  //   ['code', _params.code, '验证码', 'empty']
  // ]
  // let _Validated = Validate(vArr);
  // if (!_Validated) { return };
  fetch({
    url: tripCreateApi(),
    method: 'POST',
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 更新行程信息
const tripUpdateApiF = (data, fun) => packagePromise((resolve, reject) => {
  // let _params = data
  // let vArr = [
  //   ['phone', _params.phone, '电话', 'empty|phone'],
  //   ['code', _params.code, '验证码', 'empty']
  // ]
  // let _Validated = Validate(vArr);
  // if (!_Validated) { return };
  fetch({
    url: tripUpdateApi(),
    method: 'POST',
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 资助申请【列表】
const crowdfundingPageApiF = (data) => packagePromise((resolve, reject) => {
  fetch({
    url: crowdfundingPageApi(),
    method: 'GET',
    data
  })
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 资助申请【详情】
const crowdfundingInfoApiF = (crowdfundingId) => packagePromise((resolve, reject) => {
  fetch({
    url: crowdfundingInfoApi(),
    method: 'GET',
    data: {
      crowdfundingId
    }
  })
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 资助记录【列表】
const crowdfundingRecordPageApiF = (data) => packagePromise((resolve, reject) => {
  fetch({
    url: crowdfundingRecordPageApi(),
    method: 'GET',
    data
  })
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 我发起的资助申请【列表】
const crowdfundingPageLaunchedApiF = (data) => packagePromise((resolve, reject) => {
  fetch({
    url: crowdfundingPageLaunchedApi(),
    method: 'GET',
    data
  })
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 我参与的资助申请【列表】
const crowdfundingPagePartApiF = (data) => packagePromise((resolve, reject) => {
  fetch({
    url: crowdfundingPagePartApi(),
    method: 'GET',
    data
  })
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 资助申请
const crowdfundingApplyApi = (data, fun) => packagePromise((resolve, reject) => {
  let _params = data
  let _url = null
  if (_params.id) {
    _url = crowdfundingUpdateApi()
  } else {
    delete _params.id
    _url = crowdfundingCreateApi()
  }
  let vArr = [
    ['targetMoney', _params.targetMoney, '目标金额', 'empty'],
    ['title', _params.title, '标题', 'empty'],
    ['originator', _params.originator, '发起人/单位', 'empty'],
    ['description', _params.description, '描述', 'empty']
  ]
  let _Validated = Validate(vArr);
  if (!_Validated) { return };
  let params = formatParams(data)
  let formData = new FormData();
  for (let [key, value] of Object.entries(params)) {
    formData.append(key, value)
  }
  fetch({
    url: _url,
    method: 'POST',
    data: formData
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 资助记录【支付】
const crowdfundingRecordCreateApiF = (data) => packagePromise((resolve, reject) => {
  let _params = data
  let vArr = [
    ['money', _params.money, '金额', 'empty']
  ]
  let _Validated = Validate(vArr);
  if (!_Validated) { return };
  fetch({
    url: crowdfundingRecordCreateApi(),
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

// 资助记录【获取捐赠证书】
const crowdfundingRecordCertApiF = (crowdfundingId) => packagePromise((resolve, reject) => {
  fetch({
    url: crowdfundingRecordCertApi(),
    method: 'GET',
    data: {
      crowdfundingId
    }
  })
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// // 新闻详情
const newsInfoApiF = (newsId) => packagePromise((resolve, reject) => {
  fetch({
    url: newsInfoApi(),
    method: 'GET',
    data: {
      newsId
    }
  })
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})

// 获取活动详情
const activityInfoApiF = (activityId) => packagePromise((resolve, reject) => {
  fetch({
    url: activityInfoApi(),
    method: 'GET',
    data: {
      activityId
    }
  })
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})
// 获取活动列表
const activityListApiF = (data, fun) => packagePromise((resolve, reject) => {
  fetch({
    url: activityListApi(),
    method: 'GET',
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})
// 获取成氏源流 列表
const sourceListApiF = (data, fun) => packagePromise((resolve, reject) => {
  fetch({
    url: sourceListApi(),
    method: 'GET',
    data
  }, fun)
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})
// 获取成氏源流 详情页
const sourceInfoApiF = (sourceId) => packagePromise((resolve, reject) => {
  fetch({
    url: sourceInfoApi(),
    method: 'GET',
    data :{
      sourceId
    }
  })
    .then(msg => {
      resolve(msg)
    })
    .catch(err => reject(err))
})
// 获取成氏族谱 列表
const familyTreeApiF = (data, fun) => packagePromise((resolve, reject) => {
  fetch({
    url: familyTreeApi(),
    method: 'GET',
    data
  }, fun)
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
  activityStatusApiF,
  activityReapplyApiF,
  listParentApiF,
  sponsorListApiF,
  codeSendApiF,
  userBindApiF,
  userInfoApiF,
  userUpdateApiF,
  broadcastUpdateApiF,
  broadcastListApiF,
  tripInfoApiF,
  tripCreateApiF,
  tripUpdateApiF,
  crowdfundingPageApiF,
  crowdfundingInfoApiF,
  crowdfundingRecordPageApiF,
  crowdfundingPageLaunchedApiF,
  crowdfundingPagePartApiF,
  crowdfundingApplyApi,
  crowdfundingRecordCreateApiF,
  crowdfundingRecordCertApiF,
  newsInfoApiF,
  activityInfoApiF,
  activityListApiF,
  sourceListApiF,
  sourceInfoApiF,
  familyTreeApiF
}
