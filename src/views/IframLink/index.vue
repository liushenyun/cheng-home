<template>
  <div class="index" style="width:100%;height:100%">
      <iframe src="https://live.photoplus.cn/live/99609970?accessFrom=live#/livepp" frameborder="0" style="width:100%;height:100%;overflow:scroll"></iframe>
<!--     <iframe src="http://dev.chengmall.cn/login" frameborder="0" style="width:100%;height:100%;overflow:scroll"></iframe>-->
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
