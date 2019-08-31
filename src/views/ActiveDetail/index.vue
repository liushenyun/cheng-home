<template>
  <div class="active-detail-ctr">
    <div class="ac-img-wrap">
      <img src="../../image/home_banner.png" alt="">
      <p class="ac-name">活动名称活动名称活动活动名称活动名称活动名动 名称活动名称活动名...</p>
      <p class="ac-price">0元起</p>
    </div>
    <div class="ac-line"></div>
    <div class="ac-des">
      <p>2019/01/11-2019/10/01</p>
      <p>具体地点</p>
    </div>
    <div class="ac-line"></div>
    <div class="ac-detail">
      <p class="ac-detail-title">活动详情</p>
    </div>
    <div class="ac-btns-wrap">
      <div class="ac-btns-1">
        <span>
          <img src="../../image/ac_btn-icon.png" alt="">
          <p>活动</p>
        </span>
      </div>
      <div class="ac-btns-2">
        <span>
          <img src="../../image/shre_btn_icon.png" alt="">
          <p>分享</p>
        </span>
      </div>
      <div class="ac-btns-3" @click="singA">
        立即报名
      </div>
    </div>
  </div>
</template>

<script>
import dateFormat from '../../utils/dateFormat'
// @ is an alias to /src
export default {
  name: 'ActiveDetail',
  data () {
    return {
      showShare: false
    }
  },
  components: {  },
  methods: {
    backHomeA() {
      this.$router.push({
        name: 'home'
      })
    },
    toMineA() {
      this.$router.push({
        name: 'home',
        params: {
          selected: '个人中心'
        }
      })
    },
    singA() {
      console.log('立即报名')
    }
  },
  watch: { },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
@import './index'
</style>
