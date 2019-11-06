<template>
  <div class="public-welfare-ctr">
    <div class="pw-title">
      <div>
        <img src="../../image/welfar_word_bg_left.png" alt="">
      </div>

      <span>
        <p>成氏商城公益基金会</p>
        <p>CHENG MALL FOUNDATION</p>
      </span>
      <div>
        <img src="../../image/welfar_word_bg_right.png" alt="">
      </div>
    </div>

    <ul>
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
      <li @click="toWelfareListA">
        <span><p>公益项目</p><p>Funding application</p></span>
        <img src="../../image/welfare_apply_icon.png" alt="">
      </li>
    </ul>


  </div>
</template>

<script>
import dateFormat from '../../utils/dateFormat'
// @ is an alias to /src
export default {
  name: 'PublicWelfare',
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
        this.$toast('开发中...')
      // this.$router.push({
      //   name: 'welfareAction'
      // })

    },
    toWelfareListA() {
        this.$toast('开发中...')
      // this.$router.push({
      //   name: 'welfareList'
      // })
    }
  },
  watch: { },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
@import './index';
</style>
