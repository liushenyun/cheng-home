<template>
  <div class="meet-summary-ctr">
    <p class="m-title">【第六届世界成氏恳亲大会】</p>
    <div class="m-time-wrap">
      <span>倒计时</span>
      <span>{{dateNum}}</span>
      <span>天</span>
    </div>
    <div class="m-title-1">
      <span>·同宗同心同荣·</span>
    </div>
    <div class="m-title-2">
      <span>赞助播报</span>
      <img src="../../image/z_b_icon.png">
    </div>
    <div class="line"></div>
    <div class="m-con-wrap">
      <div class="m-con-inner" @click="toP">
        <div class="m-con-left">
          <img src="../../image/niu_1.png">
        </div>
        <div class="m-con-right">
          <span>第六届世界成氏恳亲大会会议议程 》</span>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="m-con-wrap">
      <div class="m-con-inner">
        <div class="m-con-left">
          <img src="../../image/niu_2.png">
        </div>
        <div class="m-con-right" @click="jumpIfram">
          <span>六大现场视频/图片直播 》</span>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <ul class="m-btns-wrap">
      <li @click="toZHi">
        <img src="../../image/m_btns_1.png">
        <span>参会指南</span>
      </li>
      <li @click="toSponsor">
        <img src="../../image/m_btns_2.png">
        <span>赞助公示</span>
      </li>
      <li @click="toBroadcastA">
        <img src="../../image/m_btns_3.png">
        <span>实时播报</span>
      </li>
    </ul>
    <div class="m-btn-im m-btn-wu" @click="toSelflessA">无私奉献</div>
    <div class="m-btn-im" @click="toSignA">{{statusText}}</div>
  </div>
</template>

<script>
import dateFormat from "../../utils/dateFormat";
import puGetSearch from "../../utils/puGetSearch";
import {
  loginApiF,
  activityPayApiF,
  activityStatusApiF
} from "@/service/requestFun";
import { setToken } from "../../common/js/ut";
import { jsConfigApi } from "../../service/apiUrl";
import wechat from "../../common/js/wechat";
// @ is an alias to /src
export default {
  name: "MeetSummary",
  data() {
    return {
      dateNum: 0,
      pageData: {
        status: "0", // 0-未报名 2-待审核3-审核通过，4-审核拒绝
        refuseReason: "",
        pay: false, // 是否需要支付
        applyId: null
      }
    };
  },
  components: {},
  // beforeRouteLeave(to, from, next) {
  //   history.pushState(null, null, location.search.replace(/code/g, 'XX'))
  //   next()
  // },
  computed: {
    statusText: function() {
      let _status = this.pageData.status + "";
      let _pay = this.pageData.pay;
      let _obj = {
        "0": "立即报名",
        "2": "审核中",
        "3": _pay ? "立即支付" : "报名成功",
        "4": "审核不通过，立即报名",
        "5": "报名成功"
      };
      return _obj[_status];
    }
  },
  methods: {
    jumpIfram() {
      // this.$router.push({
      //   name: "IframLink"
      // });
        this.$toast("直播已结束！")
    },
    toBroadcastA() {
      this.$router.push({
        name: "broadcast"
      });
    },
    daysDistance(date1, date2) {
      let distance, tempDate, daysApart;
      date1 = Date.parse(date1);
      date2 = Date.parse(date2);
      //计算两个日期之间相差的毫秒数
      distance = date2 - date1;
      //取绝对值
      // distance = Math.abs(distance);
      //毫秒数除以一天的毫秒数,就的到了天数
      distance = Math.floor(distance / (24 * 3600 * 1000));
      return distance;
    },
    toP() {
      this.$router.push({
        name: "showImage"
      });
    },
    toSponsor() {
      this.$router.push({
        name: "sponsor"
      });
    },
    toZHi() {
      location.href = "https://mp.weixin.qq.com/s/28pD7gYzv3rk7Eg9dUzjRA";
    },
    payA() {
      let _this = this;
      wechat.config(
        wechat.properties.interface.chooseWXPay,
        jsConfigApi(),
        function(r) {
          activityPayApiF({
            activityApplyId: _this.pageData.applyId
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
    toSignA() {
      // let activity = 1;
      let { pay, status } = this.pageData;
      if (status == 0) {
        this.$router.push({
          name: "sign",
          params:{
            activityId:1
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
            query:{activityId:1}
          });
        }
      } else if (status == 4) {
        this.$router.push({
          name: "sign",
          params: {
            applyId: this.pageData.applyId
          }
        });
      } else if (status == 5) {
        this.$router.push({
          name: "signSuccess",
          query:{activityId:1}
        });
      }
    },
    toSelflessA() {
      this.$router.push({
        name: "selfless",
        params: {
          applyId: this.pageData.applyId
        }
      });
    },
    activityStatusApiFA() {
      activityStatusApiF({
        activityId: 1
      })
        .then(result => {
          let { pay, status, refuseReason, applyId } = result;
          this.pageData = {
            status,
            refuseReason,
            pay,
            applyId
          };
        })
        .catch(() => {});
    }
  },
  watch: {},
  mounted() {
    this.activityStatusApiFA();
    let _n = this.daysDistance(
      dateFormat(new Date(), "yyyy/MM/dd"),
      "2019/10/17"
    );
    this.dateNum = _n >= 0 ? _n : 0;
  }
};
</script>

<style lang="scss" scoped>
@import "./index";
</style>
