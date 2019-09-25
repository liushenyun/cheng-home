<template>
  <div class="index">
    <div class="top">
      <div class="img">
        <img src="../../image/home_banner.png">
      </div>
      <div class="txt">
        {{info.name}}
        <span>
          <img src="../../image/activited_money.png" alt="">
          <span class="img_text">{{info.cost}}元起</span>
        </span>
      </div>
      <div class="color_div"></div>
    </div>
    <div class="top1">
      <div class="txt1">
        <p class="t1">
          <img class="img1" src="../../image/time.png" alt="">
          <label>{{info.startTime}}-{{info.endTime}}</label>
        </p>
        <p class="t2">
          <img class="img2" src="../../image/address.png" alt="">
          <label>{{info.location}}</label>
        </p>
      </div>
      <div class="color_div"></div>
    </div>
    <div class="bottom">
      <div class="txt2">
        <p class="info_text">
          <img src="../../image/time.png" alt="">
          <label>{{info.description}}</label>
        </p>
      </div>
      <div class="bottom_index">
        <div class="huodong bottom-button">
          <p class="b_1">
            <img src="../../image/activited.png" alt="">
          </p>
          <p class="b_text">活动</p>
        </div>
        <!-- <div class="share">
               <p class="b_1"><img src="../../image/share.png" alt=""></p>
               <p class="b_text">分享</p>
        </div>-->
        <div class="bao bottom-button" @click="jumpForm">{{buttonText}}</div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { beforeRouteLeave } from "@/common/js/mixin.js";
import { activityInfoApiF, activityStatusApiF } from "@/service/requestFun";
import puGetSearch from "../../utils/puGetSearch";
import { setToken } from "../../common/js/ut";
import dateFormat from "../../utils/dateFormat";
import wechat from "../../common/js/wechat";
import { jsConfigApi } from "../../service/apiUrl";
import { Domain } from "../../config";

// import { beforeRouteLeave } from '@/common/js/mixin.js'
// import { apiNewsPageF, userIsloginApiF, activityPageApiF, loginApiF, activityPayApiF, userInfoApiF } from '@/service/requestFun'
// import puGetSearch from '../../utils/puGetSearch'
// import { setToken } from '../../common/js/ut'
export default {
  name: "home",
  mixins: [beforeRouteLeave],
  data() {
    return {
      info: {},
      pageData: {
        status: "0", // 0-未报名 2-待审核3-审核通过，4-审核拒绝
        refuseReason: "",
        pay: false, // 是否需要支付
        applyId: null
      },
      statusInfo:{},
      buttonText:''
    };
  },
  components: {},
  methods: {
    jumpForm() {
      let router = this.$route;
      let id = router.query.activityId;
      let status = this.statusInfo.status;
      let pay = this.statusInfo.pay;
      
      if (status == 0) {
        this.$router.push({
          name: "sign",
          params:{
            activityId:id
          }
        });
      } else if (status == 2) {
        this.$router.push({
          name: "reviewStatus"
        });
      } else if (status == 3) {
        if (pay) {
          this.payA();
        } else {
          this.$router.push({
            name: "signSuccess",
            query:{activityId:id}
          });
        }
      } else if (status == 4) {
        this.$router.push({
          name: "sign",
          params: {
            applyId: this.statusInfo.applyId,
            activityId:id
          }
        });
      } else if (status == 5) {
        this.$router.push({
          name: "signSuccess",
          query:{activityId:id}
        });
      }

    },
    initInfo() {
      let router = this.$route;
      let id = router.query.activityId; //这里拿到上一个页面传过来的参数id值  接id
      let t = this;
      if (id != null) {
        activityInfoApiF(id)
          .then(res => {
            let start = res.startTime;
            res.startTime = dateFormat(new Date(start), "yyyy/MM/dd");
            let end = res.endTime;
            res.endTime = dateFormat(new Date(end), "yyyy/MM/dd");
            t.info = res;
            t.shareInit(res);
          })
          .catch();
      }
    },
    initStatus() {
      let router = this.$route;
      let id = router.query.activityId;
      let t = this;
      if (id != null) {
        activityStatusApiF({activityId:id})
          .then(res => {
            // t.info = res;
            let _obj = {
              0: "立即报名",
              2: "审核中",
              3: "立即支付" ,
              4: "审核不通过，立即报名",
              5: "报名成功"
            };
            t.statusInfo = res;
            t.pay = res.pay;
            if(res.status == 3){
              t.buttonText = res.pay ? _obj[res.status] : '报名成功';    
            }else{
                t.buttonText = _obj[res.status];
            }
          })
          .catch();
      }
    },
    shareInit(data) {
      let link = Domain;
      if (data.id === 1) {
        link = Domain + "/meetSummary";
      } else {
        link = Domain + "/activitedInfo?activityId=" + data.id + "";
      }
      wechat.config(
        wechat.properties.interface.updateTimelineShareData,
        jsConfigApi(),
        function(r) {
          wx.ready(function() {
            let param = {
              title: data.name,
              link: link,
              imgUrl: data.icon,
              desc: data.description
            };

            wechat.updateTimelineShareData(param); //分享朋友圈
            wechat.updateAppMessageShareData(param); //分享给好友
          });
        }
      );
    },
     payA() {
      let _this = this;
      wechat.config(
        wechat.properties.interface.chooseWXPay,
        jsConfigApi(),
        function(r) {
          activityPayApiF({
            activityApplyId: _this.statusInfo.applyId
          })
            .then(result => {
              let data = result;
              wechat.chooseWxPay(data, function(res) {
                if (res.errMsg === "chooseWXPay:ok") {
                  _this.$router.push({
                    name: "signSuccess"
                  });
                }
              });
            })
            .catch(err => {});
        }
      );
    },
  },
  mounted() {
    this.initInfo();
    this.initStatus();
  },
  created() {}
};
</script>

<style lang="scss" scoped>
@import "./index";
</style>
