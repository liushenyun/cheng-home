<template>
  <div class="index">
    <div class="top" v-for="val in info">
      <div class="img">
        <!-- <img src="../../image/activitedListBackground.jpg"> -->
        <div class="txt">
          <div class="txtColor"></div>
          <div class="activitedTxt">{{val.typeName}}</div>
        </div>
        <div v-for="list in val.list" class="forDiv" @click="jump(list)">
          <div class="topDiv">
            <img :src="list.banner">
          </div>
          <div class="topTxt">
            <p class="topdivTxt">{{ list.title }}</p>
            <div class="bottomTxt">
              <p class="leftTxt">{{list.location}}</p>
              <div class="rightTxt">{{ list.date }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import { beforeRouteLeave } from "@/common/js/mixin.js";
import { activityListApiF } from "@/service/requestFun"; //活动列表接口
import puGetSearch from "../../utils/puGetSearch";
import { setToken } from "../../common/js/ut";
import dateFormat from "../../utils/dateFormat";
import wechat from "../../common/js/wechat";
import { jsConfigApi } from "../../service/apiUrl";
import { Domain } from "../../config";
export default {
  name: "home",
  // mixins: [beforeRouteLeave],
  data() {
    return {
      info: []
    };
  },
  components: {},
  methods: {
    initList() {
      let t = this;
      let v = this;
      activityListApiF()
        .then(res => {
          t.info = res;
        })
        .catch();
    },
    jump(list) {
      console.log("数据list")
      console.log(list)
      if(list.id == 1){
        this.$router.push({
        path: `/meetSummary`  //六大活动页面
      }) }else{
        this.$router.push({
        path: `/activitedInfo`,
        query: {
          activityId: list.id //传id 路由跳转详情页activitedInfo
        }
      });
      }

    }
  },

  mounted() {
    this.initList();
  },
  created() {}
};
</script>

<style lang="scss" scoped>
@import "./index";
</style>
