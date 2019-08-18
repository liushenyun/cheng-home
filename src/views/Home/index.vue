<template>
  <div class="home-tabbar home-ctr">
    <div class="home-wrap">
      <mt-tab-container  class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item :id="tabObj.a">
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
            <nav> <a class="active">成氏新闻</a> <a>成氏活动</a> </nav>
            <ul class="new-con">
              <li v-for="(item, index) in 10" :key="index">
                <img src='../../image/home_banner.png' />
                <p>活动名称活动名称活动...</p>
                <p><span>08/01 周四</span><span>深圳宝安</span></p>
              </li>
            </ul>
          </div>
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
import { apiNewsPageF } from '@/service/requestFun'
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
      }
    }
  },
  components: {
  },
  methods: {
      toNextA () {
          this.$router.push({
              name: 'HomeA'
          })
      },
      toClickA () {
        this.$router.push({
          name: 'MeetSummary'
        })
      }
  },
  watch: {
    selected: function (nVal, oVal) {
      document.title = nVal
      console.log(nVal, oVal)
    }
  },
  mounted () {
    this.$toast('提示信息')
    document.title = this.tabObj.a
      // this.$store.dispatch('showLoading', true)
      apiNewsPageF({
         pageSize: 30,
         currentPage: 1
      }).then((result) => {
        console.log(128, result)
      }).catch((err) => {
        
      });
      // apiNewsPageF(function(msg) { })
  }
}
</script>

<style lang="scss" scoped>
@import './index'
</style>
