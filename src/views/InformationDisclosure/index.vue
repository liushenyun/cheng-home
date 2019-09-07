<template>
  <div class="InformationDisclosure-ctr">
    <div class="pw-title">
      <div>
        <img src="../../image/welfar_word_bg_left.png" alt="">
      </div>
      
      <span>
        <p>信息公开</p>
        <!-- <p>CHENG MALL FOUNDATION</p> -->
      </span>
      <div>
        <img src="../../image/welfar_word_bg_right.png" alt="">
      </div>
    </div>

    <p class="pw-sub-title">·公开 公正 透明 及时 有效 规范 共创美好未来·</p>

    <ul>
      <li @click="toWelfareIntroduceA">
        <span><p>基金会介绍</p><p>Foundation introduction</p></span>
        <img src="../../image/welfare_intro_icon.png" alt="">
      </li>
      <li @click="toWelfareIntroduceA">
        <span><p>基金会介绍</p><p>Foundation introduction</p></span>
        <img src="../../image/welfare_intro_icon.png" alt="">
      </li>
      <li @click="toWelfareIntroduceA">
        <span><p>基金会介绍</p><p>Foundation introduction</p></span>
        <img src="../../image/welfare_intro_icon.png" alt="">
      </li>
      <li @click="toWelfareIntroduceA">
        <span><p>基金会介绍</p><p>Foundation introduction</p></span>
        <img src="../../image/welfare_intro_icon.png" alt="">
      </li>
      <li @click="toWelfareInfoA">
        <span><p>信息公开</p><p>Information disclosure</p></span>
        <img src="../../image/welfare_info_icon.png" alt="">
      </li>
      <li @click="toWelfareActionA">
        <span><p>基金会行动</p><p>Foundation action</p></span>
        <img src="../../image/welfare_active_icon.png" alt="">
      </li>
      <li @click="toFundingApplyA">
        <span><p>资助申请</p><p>Funding application</p></span>
        <img src="../../image/welfare_apply_icon.png" alt="">
      </li>
    </ul>
    

  </div>
</template>

<script>
import dateFormat from '../../utils/dateFormat'
// @ is an alias to /src
export default {
  name: 'InformationDisclosure',
  data () {
    return {
      showShare: false
    }
  },
  components: {  },
  methods: {
    toWelfareIntroduceA() {
      this.$router.push({
        name: 'welfareIntroduce'
      })
    },
    toWelfareInfoA() {
      this.$router.push({
        name: 'welfareInfo'
      })
    },
    toWelfareActionA() {
      this.$router.push({
        name: 'welfareAction'
      })
    },
    toFundingApplyA() {
      this.$router.push({
        name: 'fundingApply'
      })
    }
  },
  watch: { },
  beforeRouteLeave(to, from, next) {
    history.pushState(null, null, location.search.replace(/code/g, 'XX'))
    next()
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
@import './index'
</style>
