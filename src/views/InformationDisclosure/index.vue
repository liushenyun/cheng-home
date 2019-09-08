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
      <li>
        <p>闫村祠堂修缮资助项目捐款人明细</p>
        <p>执行机构：一般是个人或当地宗亲会</p>
        <p>资助时间：2019年9月</p>
        <p>资助地点：闫村祠堂</p>
        <p>资金管理：成勇</p>
        <div class="dis-btn-wrap">
          <span>查看详细</span>
        </div>
      </li>
       <li>
        <p>闫村祠堂修缮资助项目捐款人明细</p>
        <p>执行机构：一般是个人或当地宗亲会</p>
        <p>资助时间：2019年9月</p>
        <p>资助地点：闫村祠堂</p>
        <p>资金管理：成勇</p>
        <div class="dis-btn-wrap">
          <span>查看详细</span>
        </div>
      </li>
    </ul>
    

  </div>
</template>

<script>
import { beforeRouteLeave } from '@/common/js/mixin.js'
import dateFormat from '../../utils/dateFormat'
// @ is an alias to /src
export default {
  name: 'InformationDisclosure',
  mixins: [beforeRouteLeave],
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
