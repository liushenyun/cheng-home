<template>
  <div class="home-tabbar home-ctr">
    <div class="home-wrap">
      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item
          class="mt-padding"
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="10"
          :id="tabObj.a"
        >
          <div class="h-banner" @click="toClickA">
            <img src="../../image/home_banner.png">
          </div>
          <div class="h-fun-wrap">
            <ul class="hf-ul-same">
              <li @click="toChengOriginA">
                <img src="../../image/h_btn-1.png">
                <p>成氏源流</p>
              </li>
              <li @click="toChengDistributionA">
                <img src="../../image/h_btn-2.png">
                <p>成氏分布</p>
              </li>
              <li @click="toFamilyTreeA">
                <img src="../../image/h_btn-3.png">
                <p>成氏族谱</p>
              </li>
              <li @click="toChengCelebrityA">
                <img src="../../image/h_btn-4.png">
                <p>成氏名人</p>
              </li>
            </ul>
            <ul class="hf-ul-same">
              <li @click="toClansmenAssociationA">
                <img src="../../image/h_btn-5.png">
                <p>宗亲总会</p>
              </li>
              <li @click="toPublicWelfareA">
                <img src="../../image/h_btn-6.png">
                <p>成氏公益</p>
              </li>
              <li @click="toInformationDisclosureA">
                <img src="../../image/h_btn-7.png">
                <p>信息公开</p>
              </li>
              <li @click="toCulturalResearchA">
                <img src="../../image/h_btn-8.png">
                <p>文化研究会</p>
              </li>
            </ul>
          </div>
          <div class="new-wrap">
            <nav>
              <a @click="tapActive('news')" :class="activeType == 'news'? 'active': ''">成氏新闻</a>
              <a @click="tapActive('activity')" :class="activeType == 'activity'? 'active': ''">
                成氏活动
                <img src="../../image/more.png" alt="" class="imgTxt" @click.stop="jumpList(activeType)">
                <!--跳转活动列表 -->
              </a>
            </nav>
            <ul class="new-con">
              <li
                v-for="(item, index) in pageList"
                :key="index"
                @click="toDetailA(activeType, item)"
              >
                <img :src="item.icon" alt="图片">
                <p>{{item.title}}</p>
                <p>
                  <span>{{item.date}}</span>
                  <span>{{item.location}}</span>
                </p>
              </li>
            </ul>
          </div>
          <p v-show="loading" class="page-infinite-loading">
            <mt-spinner type="fading-circle"></mt-spinner>加载中
          </p>
        </mt-tab-container-item>
        <mt-tab-container-item :id="tabObj.b">
          <div class="wait-wrap">
            <img src="../../image/wait_icon.jpg">
            <p>相关功能逐步开放</p>
            <p>·敬请期待·</p>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item :id="tabObj.c">
          <div class="wait-wrap">
            <img src="../../image/wait_icon.jpg">
            <p>相关功能逐步开放</p>
            <p>·敬请期待·</p>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item class="mine-mt-item" :id="tabObj.d">
          <div class="mine-top-outer">
            <div class="mine-info" @click="toEditInfo">
              <img :src="dPageParams.headimage" alt="">
              <span>
                <p>{{dPageParams.realName}}</p>
                <p>{{dPageParams.sex == 1 ? '男':'女'}} {{dPageParams.ancestral}}</p>
              </span>
              <img src="../../image/mine_edit_icon.png" alt="">
            </div>
          </div>
          <div class="mine-action-outer">
            <ul>
              <li @click="toMeetTripA">
                <img class="mine-li-img_a" src="../../image/mine_lu_ic.png" alt="">
                <b>我的行程</b>
                <img src="../../image/jin_tou_left_ic.png" alt="">
              </li>
              <li @click="toBindPhoneA">
                <img class="mine-li-img_b" src="../../image/mine_bind_ic.png" alt="">
                <b>绑定手机</b>
                <img src="../../image/jin_tou_left_ic.png" alt="">
              </li>
              <li @click="toMyPublicWelfareA">
                <img class="mine-li-img_c" src="../../image/my-wefale_icon.png" alt="">
                <b>我的公益</b>
                <img src="../../image/jin_tou_left_ic.png" alt="">
              </li>
              <li @click="toReleaseA" v-if="dPageParams.broadcast == 1">
                <img class="mine-li-img_d" src="../../image/la_ba_ic.png" alt="">
                <b>六大实时播报</b>
                <img src="../../image/jin_tou_left_ic.png" alt="">
              </li>
            </ul>
          </div>
          <!-- <div class="wait-wrap">
              <img src="../../image/wait_icon.jpg">
              <p>相关功能逐步开放</p>
              <p>·敬请期待·</p>
          </div>-->
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item :id="tabObj.a">
        <img v-if="selected == tabObj.a" slot="icon" src="../../image/tab_a_on.png">
        <img v-else slot="icon" src="../../image/tab_a_off.png">
        {{tabObj.a}}
      </mt-tab-item>
      <mt-tab-item :id="tabObj.b">
        <img v-if="selected == tabObj.b" slot="icon" src="../../image/tab_b_on.png">
        <img v-else slot="icon" src="../../image/tab_b_off.png">
        {{tabObj.b}}
      </mt-tab-item>
      <mt-tab-item :id="tabObj.c">
        <img v-if="selected == tabObj.c" slot="icon" src="../../image/tab_b_on.png">
        <img v-else slot="icon" src="../../image/tab_b_off.png">
        {{tabObj.c}}
      </mt-tab-item>
      <mt-tab-item :id="tabObj.d">
        <img v-if="selected == tabObj.d" slot="icon" src="../../image/tab_d_on.png">
        <img v-else slot="icon" src="../../image/tab_d_off.png">
        {{tabObj.d}}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
// @ is an alias to /src
import { beforeRouteLeave } from "@/common/js/mixin.js";
import {
  apiNewsPageF,
  userIsloginApiF,
  activityPageApiF,
  loginApiF,
  activityPayApiF,
  userInfoApiF
} from "@/service/requestFun";
import puGetSearch from "../../utils/puGetSearch";
import { setToken } from "../../common/js/ut";
export default {
  name: "home",
  mixins: [beforeRouteLeave],
  data() {
    return {
      selected: this.$route.params.selected || "走进成氏",
      tabObj: {
        a: "走进成氏",
        b: "成氏论坛",
        c: "寻根问祖",
        d: "个人中心"
      },
      activeType: "news", // activity
      loading: false,
      pageList: [],
      hasMoreData: false,
      pageParams: {
        pageSize: 30,
        currentPage: 1
      },
      dPageParams: {
        headimage: "",
        realName: "",
        province: "",
        city: "",
        sex: "", // 1 男
        broadcast: null
      }
    };
  },
  components: {},
  methods: {
    toDetailA(type, item) {
      if(item.id == 1){
        this.$router.push({
            path: `/meetSummary`
          });
      } else {
        this.$router.push({
            path: `/activitedInfo`,
            query: {
              activityId: item.id //传id 路由跳转详情页activitedInfo
            }
          });
      }
      // switch (item.id) {
      //   case "news":
      //     this.$router.push({
      //       path: `/detailA/${type}/${item.id}`
      //     });
      //     break;
      //   case "activity": //获取活动详情数据
      //     this.$router.push({
      //       path: `/activitedInfo`,
      //       query: {
      //         activityId: item.id //传id 路由跳转详情页activitedInfo
      //       }
      //     });
      //     break;
      // }
    },
    jumpList(type) {   //点击按钮跳转不同的页面
      switch (type) {
        case "news":
          // alert("跳转新闻页面");
          break;
        case "activity": //获取活动详情数据
          this.$router.push({
            name: "activitedList"
          });
          break;
      }
    },
    toMyPublicWelfareA() {
      this.$router.push({
        name: "myPublicWelfare"
      });
    },
    toChengOriginA() {
      this.$router.push({
        name: "chengOrigin"
      });
    },
    toChengDistributionA() {
      this.$router.push({
        name: "chengDistribution"
      });
    },
    toFamilyTreeA() {
      this.$router.push({
        name: "familyTree"
      });
    },
    toChengCelebrityA() {
      this.$router.push({
        name: "chengCelebrity"
      });
    },
    toClansmenAssociationA() {
      this.$router.push({
        name: "clansmenAssociation"
      });
    },
    toCulturalResearchA() {
      this.$router.push({
        name: "culturalResearch"
      });
    },
    toInformationDisclosureA() {
      this.$router.push({
        name: "informationDisclosure"
      });
    },
    toMeetTripA() {
      this.$router.push({
        name: "meetTrip"
      });
    },
    toBindPhoneA() {
      this.$router.push({
        name: "bindPhone"
      });
    },
    toEditInfo() {
      this.$router.push({
        name: "mineInfo"
      });
    },
    toReleaseA() {
      this.$router.push({
        name: "release"
      });
    },
    toPublicWelfareA() {
      this.$router.push({
        name: "publicWelfare"
      });
    },
    loadMore() {
      if (this.hasMoreData) {
        this.loading = true;
        setTimeout(() => {
          this.pageParams.currentPage += 1;
        }, 0);
      }
    },
    toClickA() {
      this.$router.push({
        name: "meetSummary"
      });
    },
    tapActive(type) {
      if (this.activeType == type) {
        return;
      } // activeType: 'news', // activity
      this.activeType = type;
      this.pageParams.currentPage = 1;
      this.pageList = [];
      if (type == "news") {
        this.apiNewsPageFA();
      } else if (type == "activity") {
        this.activityPageApiFA();
      }
    },
    activityPageApiFA() {
      activityPageApiF(this.pageParams)
        .then(result => {
          this.loading = false;
          let { totalPage, currentPage, data } = result;
          this.pageList = this.pageList.concat(data);
          this.hasMoreData = !(totalPage <= currentPage);
        })
        .catch(err => {
          this.loading = false;
        });
    },
    apiNewsPageFA() {
      apiNewsPageF(this.pageParams)
        .then(result => {
          this.loading = false;
          let { totalPage, currentPage, data } = result;
          this.pageList = this.pageList.concat(data);
          this.hasMoreData = !(totalPage <= currentPage);
        })
        .catch(err => {
          this.loading = false;
        });
    },
    userInfoApiFA() {
      userInfoApiF()
        .then(result => {
          this.dPageParams = result;
        })
        .catch(() => {});
    }
  },
  watch: {
    selected: {
      handler(nVal, oVal) {
        let { a, b, c, d } = this.tabObj;
        document.title = nVal;
        if (nVal == a) {
          this.pageList = [];
          this.apiNewsPageFA();
        }

        if (nVal == d) {
          this.userInfoApiFA();
        }
      },
      immediate: true
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
@import "./index";
</style>
