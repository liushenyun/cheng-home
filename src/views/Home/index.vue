<template>
  <div class="home-tabbar home-ctr">
    
      

      <div class="home-wrap">
        <mt-tab-container  class="page-tabbar-container" v-model="selected">
          <mt-tab-container-item
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="10" :id="tabObj.a">
              <div class="h-banner" @click="toClickA">
                <img src='../../image/home_banner.png' />
              </div>

              <div class="h-fun-wrap">
                <ul class="hf-ul-same">
                  <li><img src='../../image/h_btn-1.png' /><p>成氏源流</p></li>
                  <li><img src='../../image/h_btn-2.png' /><p>成氏分布</p></li>
                  <li><img src='../../image/h_btn-3.png' /><p>成氏族谱</p></li>
                  <li><img src='../../image/h_btn-4.png' /><p>成氏名人</p></li>
                </ul>
                <ul class="hf-ul-same">
                  <li><img src='../../image/h_btn-5.png' /><p>宗亲总会</p></li>
                  <li><img src='../../image/h_btn-6.png' /><p>成氏公益</p></li>
                  <li><img src='../../image/h_btn-7.png' /><p>信息公开</p></li>
                  <li><img src='../../image/h_btn-8.png' /><p>文化研究会</p></li>
                </ul>
              </div>

              <div class="new-wrap">
                <nav> <a @click="tapActive('news')" :class="activeType == 'news'? 'active': ''">成氏新闻</a> <a @click="tapActive('activity')" :class="activeType == 'activity'? 'active': ''">成氏活动</a> </nav>
                <ul class="new-con">
                  <li v-for="(item, index) in pageList" :key="index">
                    <img :src='item.icon' alt="图片" />
                    <p>{{item.title}}</p>
                    <p><span>{{item.date}}</span><span>{{item.location}}</span></p>
                  </li>
                </ul>
              </div>

              <p v-show="loading" class="page-infinite-loading">
                <mt-spinner type="fading-circle"></mt-spinner>
                加载中
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
          <mt-tab-container-item :id="tabObj.d">
            <div class="wait-wrap">
              <img src="../../image/wait_icon.jpg">
              <p>相关功能逐步开放</p>
              <p>·敬请期待·</p>
            </div>
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
import { apiNewsPageF, userIsloginApiF, activityPageApiF, loginApiF, activityPayApiF } from '@/service/requestFun'
import puGetSearch from '../../utils/puGetSearch'
import { setToken } from '../../common/js/ut'
export default {
  name: 'home',
  data () {
    return {
      selected: '走进成氏',
      tabObj: {
        a: '走进成氏',
        b: '成氏论坛',
        c: '寻根问祖',
        d: '个人中心'
      },
      activeType: 'news', // activity
      loading: false,
      pageList: [],
      hasMoreData: false,
      pageParams: {
        pageSize: 30,
        currentPage: 1
      }
    }
  },
  components: {
  },
  methods: {
      loadMore() {
        if (this.hasMoreData) {
          this.loading = true
          setTimeout(() => { this.pageParams.currentPage += 1 }, 0);
        }
      },
      toClickA () {
        this.$router.push({
          name: 'MeetSummary'
        })
      },
      tapActive(type) {
        if (this.activeType == type) { return } // activeType: 'news', // activity
        this.activeType = type
        this.pageParams.currentPage = 1
        this.pageList = []
        if (type == 'news') {
          this.apiNewsPageFA()
        } else if (type == 'activity') {
          this.activityPageApiFA()
        }
      },
      activityPageApiFA() {
        activityPageApiF(this.pageParams).then((result) => {
          this.loading = false
          let { totalPage, currentPage, data } = result
          this.pageList = this.pageList.concat(data)
          this.hasMoreData = !(totalPage <= currentPage)
        }).catch((err) => {
          this.loading = false
        });
      },
      apiNewsPageFA() {
        apiNewsPageF(this.pageParams).then((result) => {
          this.loading = false
          let { totalPage, currentPage, data } = result
          this.pageList = this.pageList.concat(data)
          this.hasMoreData = !(totalPage <= currentPage)
        }).catch((err) => {
          this.loading = false
        });
      }
  },
  watch: {
    selected: function (nVal, oVal) {
      document.title = nVal
    }
  },
  beforeRouteLeave(to, from, next) {
    history.pushState(null, null, location.search.replace(/code/g, 'XX'))
    next()
  },
  mounted () {
    document.title = this.tabObj.a
    // this.$store.dispatch('showLoading', true)
    this.apiNewsPageFA()
  }
}
</script>

<style lang="scss" scoped>
@import './index'
</style>
