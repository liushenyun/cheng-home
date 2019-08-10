/**
 * 只允许在微信端登录，在已进入调用次方法即可
 * @version 0.0.1
 * @example
 * weChatOnly();
 */
const weChatOnly = () => {
  if (navigator.userAgent.match(/MicroMessenger/i) != 'MicroMessenger') {
    window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=APPID&redirect_uri=REDIRECT_URI&response_type=code&scope=SCOPE&state=STATE&connect_redirect=1#wechat_redirect';
  }
}

export default weChatOnly;
