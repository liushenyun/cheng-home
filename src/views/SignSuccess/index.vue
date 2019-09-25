<template>
  <div class="sign-success-ctr">
    <div class="sign-success-wrap" @click="showShare=false">
      <div class="sign-con">
        <img src="../../image/sign_success_icon.png" alt="">
        <p class="s-tip1">·报名成功·</p>
        <p class="s-tip2">
          您已成功报名该活动,点击
          <b @click.stop="toMineA">我的</b>添加行程信息
        </p>
        <!-- <div class="share-active-btn" @click.stop="showShare = true">分享活动</div> -->
        <div class="back-home" @click.stop="backHomeA()">返回活动首页</div>
      </div>
      <!-- <div class="share-btn-s" v-if="showShare" @click.stop>
        <span>
          <img src="../../image/friend_icon.png" alt="">
          <p>分享至好友</p>
        </span>
        <span @click="share_quan">
          <img src="../../image/we_icon.png" alt="">
          <p>分享至朋友圈</p>
        </span>
      </div>-->
    </div>
  </div>
</template>

<script>
import dateFormat from "../../utils/dateFormat";
import { jsConfigApi } from "../../service/apiUrl";
import wechat from "../../common/js/wechat";
import { activityInfoApiF } from "@/service/requestFun";
import { Domain } from "../../config/index";
import { constants } from "fs";
// @ is an alias to /src
export default {
  name: "SignSuccess",
  data() {
    return {
      showShare: false,
      title: "",
      link: "",
      image: ""
    };
  },
  components: {},
  methods: {
    share(data) {
      //分享朋友圈
      wechat.config("updateTimelineShareData", jsConfigApi(), function(r) {
        wx.ready(function() {
          wechat.updateTimelineShareData({
            title: data.title, // 分享标题
            link: data.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: data.imgUrl, // 分享图标
            success: function() {
              // 设置成功
              console.log("成功");
            }
          });
        });
      });
    },
    shareInit() {
      let query = this.$route.query;
      let activityId = query.activityId;
      let t = this;

      if (activityId) {
        let link = Domain + "activitedInfo?activityId=" + activityId;
        if (activityId === 1) {
          link = Domain + "meetSummary";
        }
        activityInfoApiF(activityId).then(res => {
          let shareParam = {
            title: res.name,
            link: link,
            imgUrl: res.icon
          };
          t.share(shareParam);
        });
      }
    },
    backHomeA() {
      let query = this.$route.query;
      let activityId = query.activityId;      
      if(activityId == 1){
        this.$router.push({
        path: `/meetSummary`   
      })
      }else{
        this.$router.push({
        name: 'home'
      }) 
        
      }


    },
    toMineA() {
      this.$router.push({
        name: "home",
        params: {
          selected: "个人中心"
        }
      });
    }
  },
  watch: {},
  beforeRouteLeave(to, from, next) {
    history.pushState(null, null, location.search.replace(/code/g, "XX"));
    next();
  },
  mounted() {
    this.shareInit();
  }
};
</script>

<style lang="scss" scoped>
@import "./index";
</style>
