/* eslint-disable */
/**
 * Created by Administrator on 2017/5/12.
 * 微信开发配置
 */
import fetch from '../../service/index';

const wechat = {};

wechat.properties = {
    appId:"wx19e86539dded8a42",
    debug: false,
    interface: {
        onMenuShareTimeline:'onMenuShareTimeline',
        onMenuShareAppMessage:'onMenuShareAppMessage',
        onMenuShareQQ:'onMenuShareQQ',
        onMenuShareWeibo:'onMenuShareWeibo',
        onMenuShareQZone:'onMenuShareQZone',
        startRecord:'startRecord',
        stopRecord:'stopRecord',
        onVoiceRecordEnd:'onVoiceRecordEnd',
        playVoice:'playVoice',
        pauseVoice:'pauseVoice',
        stopVoice:'stopVoice',
        onVoicePlayEnd:'onVoicePlayEnd',
        uploadVoice:'uploadVoice',
        downloadVoice:'downloadVoice',
        chooseImage:'chooseImage',
        previewImage:'previewImage',
        uploadImage:'uploadImage',
        downloadImage:'downloadImage',
        translateVoice:'translateVoice',
        getNetworkType:'getNetworkType',
        openLocation:'openLocation',
        getLocation:'getLocation',
        hideOptionMenu:'hideOptionMenu',
        showOptionMenu:'showOptionMenu',
        hideMenuItems:'hideMenuItems',
        showMenuItems:'showMenuItems',
        hideAllNonBaseMenuItem:'hideAllNonBaseMenuItem',
        showAllNonBaseMenuItem:'showAllNonBaseMenuItem',
        closeWindow:'closeWindow',
        scanQRCode:'scanQRCode',
        chooseWXPay:'chooseWXPay',
        openProductSpecificView:'openProductSpecificView',
        addCard:'addCard',
        chooseCard:'chooseCard',
        openCard:'openCard'
    }
};

/**
 * 开启配置
 * @param inter 调用的微信开发接口
 * @param url 后台获取参数的的接口
 */
wechat.config = function(inter, url, callback){
    fetch({
        url: url,
        method: 'GET',
        data: {url:location.href}
    }).then(resp => {
        console.log(63, resp, callback)
        const data = resp;
        wx.config({
            debug: wechat.properties.debug, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: wechat.properties.appId, // 必填，公众号的唯一标识
            timestamp: data.timestamp, // 必填，生成签名的时间戳
            nonceStr: data.nonceStr, // 必填，生成签名的随机串
            signature: data.signature,// 必填，签名，见附录1
            jsApiList: [inter] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });
        callback && callback(1111)
      })
      .catch(err => {

      })
    // request.getJson(url,{url:location.href},function(resp){
    //     const data = resp.data;
    //     wx.config({
    //         debug: wechat.properties.debug, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    //         appId: wechat.properties.appId, // 必填，公众号的唯一标识
    //         timestamp: data.timestamp, // 必填，生成签名的时间戳
    //         nonceStr: data.nonceStr, // 必填，生成签名的随机串
    //         signature: data.signature,// 必填，签名，见附录1
    //         jsApiList: inter // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    //     });
    // })
}

/**
 * 选择图片接口
 */
wechat.chooseImage = function(cb){
    wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
            var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
            console.log(localIds)
            cb(res);
        }
    });
};

/**
 * 上传图片
 * @param local_id
 * @param cb
 */
wechat.uploadImage = function(local_id,cb){

    wx.uploadImage({
        localId: local_id, // 需要上传的图片的本地ID，由chooseImage接口获得
        isShowProgressTips: 1, // 默认为1，显示进度提示
        success: function (res) {
            var serverId = res.serverId; // 返回图片的服务器端ID
            cb(serverId)
        }
    });
};


/**
 * 微信支付
 * @param resp
 * @param cb
 */
wechat.chooseWxPay = function(data,cb){
    const timeStamp = data.timeStamp;
    const nonceStr = data.nonceStr;
    const pg =  data.pg;
    const signType = data.signType;
    const paySign = data.paySign;
    wx.chooseWXPay({
        timestamp: timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
        nonceStr:nonceStr, // 支付签名随机串，不长于 32 位
        package: pg, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
        signType: signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
        paySign: paySign, // 支付签名
        success: function (res) {
            // 支付成功后的回调函数
            cb(res)
        }
    });
};

/**
 * 分享到朋友圈
 */
wechat.onMenuShareTimeline = function(res,confirmFun,cancelFun){

    var title = res.title;
    var link = res.link;
    var image = res.image;
    wx.onMenuShareTimeline({
        title: title, // 分享标题
        link: link, // 分享链接
        imgUrl: image, // 分享图标
        success: function () {
            confirmFun()
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
            cancelFun()
        }
    });
};


/**
 * 发送给朋友
 */
wechat.onMenuShareAppMessage = function(res,confirmFun,cancelFun){
    var title = res.title;
    var link = res.link;
    var image = res.image;
    var description = res.description;
    console.log(res);
    wx.onMenuShareAppMessage({
        title: title, // 分享标题
        desc: description, // 分享描述
        link: link, // 分享链接
        imgUrl: image, // 分享图标
        type: '', // 分享类型,music、video或link，不填默认为link
        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: function (res) {
            // 用户确认分享后执行的回调函数
            confirmFun(res);
        },
        cancel: function (res) {
            // 用户取消分享后执行的回调函数
            cancelFun(res);
        }
    });

};

export default wechat
