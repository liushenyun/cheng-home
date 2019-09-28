<template>
  <div class="top">
    <div class="indexDiv" v-infinite-scroll="loadMore"
         infinite-scroll-disabled="loading"
         infinite-scroll-distance="10">
      <div class="colorDiv" @click="jumpOriginInfo(item)" v-for="(item,index) in pageList" :class="{'background-even':index % 2 == 0}" > <!--如果偶数项加载不同的背景颜色类-->
        <div class="txt">
          <div class="book1"><img src="../../image/book.png"></div>
          <div class="originTxt">[{{item.typeName}}] {{item.title}}</div>
          <div class="jian1"><img src="../../image/jiantou.png"></div>
        </div>
      </div>
<!--      <div class="colorDiv">-->
<!--        <div class="txt">-->
<!--          <div class="book1"><img src="../../image/book.png"></div>-->
<!--          <div>[成氏来源] 郕国数百年兴衰史</div>-->
<!--          <div class="jian1"><img src="../../image/jiantou.png"></div>-->
<!--        </div>-->
<!--      </div>-->

    </div>

  </div>

</template>

<script>

import { beforeRouteLeave } from '@/common/js/mixin.js'
import { sourceListApiF } from "@/service/requestFun"; //成氏源流列表接口
import {dateFormat} from "../../utils/dateFormat";

export default {
  name: 'DetailMain',
  mixins: [beforeRouteLeave],
  data () {
      return {
          showShare: false,
          pageList: [],
          hasMoreData: false,
          loading: false,
          pageParams: {
              pageSize: 15,
              currentPage: 1
          }
      }
  },
  components: {  },
  methods: {
      initSourceList() {
          // let t = this;
          // let v = this;
          sourceListApiF(this.pageParams).then(result => {
                  this.loading = false
                  let { totalPage, currentPage, data } = result
                  this.pageList = this.pageList.concat(data)
                  this.hasMoreData = !(totalPage <= currentPage)
              }).catch();
      },
      loadMore() {
          if (this.hasMoreData) {
              this.loading = true
              console.log("加载更多")
              setTimeout(() => {
                  this.pageParams.currentPage += 1
                  this.initSourceList()
              }, 0);
          }
      },
      jumpOriginInfo(item){  //item参数 @click() 参数绑定相同  item in pageList
          let t = item.id;
          this.$router.push({
              path: `/ChengOriginInfo`,
              query: {
                  activityId: t //传id 路由跳转详情页activitedInfo
              }
          });

      },
    backHomeA () {
      this.$router.push({
        name: 'MeetSummary'
      })
    },
    toMineA() {
      this.$router.push({
        name: 'home',
        params: {
          selected: '个人中心'
        }
      })
    }
  },
  watch: { },
  beforeRouteLeave(to, from, next) {
    history.pushState(null, null, location.search.replace(/code/g, 'XX'))
    next()
  },
  mounted () {
      this.initSourceList();
  }
}
</script>

<style lang="scss" scoped>
@import './index';
</style>
