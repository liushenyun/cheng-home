<template>
  <div class="WelfareList-ctr">
    <div class="wel-con-outer">
      <ul>
        <li v-for="(item, index) in 10" :key="index">
          <div class="wel-item-top">
            <img class="wel-img" src="../../image/niu_2.png" alt="">
            <span class="wel-con">
              <p class="wel-title">缮资助项目资助项目.</p>
              <div class="wel-tar-outer">
                <span>
                  <p>10000元</p>
                  <p>【已筹款】{{index}}</p>
                </span>
                <img src="" alt="">
                <span>
                  <p>10000元</p>
                  <p>【筹款目标】</p>
                </span>
              </div>
            </span>
          </div>
          <div class="wel-item-bottom">
            <img src="../../image/we_icon.png" alt="">
            <span class="wel-bottom-1">皮皮</span>
            <span class="wel-bottom-2">发起</span>
            <span class="wel-bottom-3">【个人求助】</span>
            <span class="wel-bottom-4">已帮助200次</span>
          </div>
        </li>
        <li></li>
      </ul>
    </div>

    <div class="wel-apply-btn" @click="toFundingApplyA">
      申请救助
    </div>
  </div>
</template>

<script>
import dateFormat from '../../utils/dateFormat'
// @ is an alias to /src
export default {
  name: 'WelfareList',
  data () {
    return {
      showShare: false
    }
  },
  components: {  },
  methods: {
    toFundingApplyA() {
      this.$router.push({
        name: 'fundingApply'
      })
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
