<template>
  <div class="FundraisingPay-ctr">
    <div class="mine-top-outer">
      <div class="mine-info">
        <img src="../../image/we_icon.png" alt="">
        <span>
          <p>微信昵称</p>
          <p>筹款标题筹款标题筹款标题筹款标题</p>
        </span>
        <img src="../../image/mine_edit_icon.png" alt="">
      </div>
    </div>

    <div class="Fundrais-money-outer">

      <div class="Fundrais-money-inner">
        <p class="FM-title">选择帮助金额</p>
        <ul class="FM-money-wrap">
          <li>20元</li>
          <li>50元</li>
          <li>100元</li>
        </ul>
        <ul class="FM-money-wrap">
          <li>20元</li>
          <li class="active">50元</li>
          <li>100元</li>
        </ul>
        <div class="FM-input-conunt">
          <input class="pub-input" type="number" placeholder="输入其他金额" />
        </div>
      </div>
      <div class="FM-ni">
        <span>匿名支持</span>
        <mt-switch v-model="value">开关</mt-switch>
      </div>
      <div class="Fm-submit-btn">立即支持</div>
    </div>

  </div>
</template>

<script>
import { beforeRouteLeave } from '@/common/js/mixin.js'
import dateFormat from '../../utils/dateFormat'
import LinkageAddr from '@/components/linkageAddr/index.vue'
import {
  tripInfoApiF,
  tripCreateApiF,
  tripUpdateApiF } from "@/service/requestFun.js"
import puGetSearch from '@/utils/puGetSearch'
// import { LinkageTime, LinkageDate, LinkageAddr } from '@/components';
// @ is an alias to /src
export default {
  name: 'FundraisingPay',
  mixins: [beforeRouteLeave],
  data () {
    return {
      currentTap: 'GO',
      value: true
    }
  },
  components: { LinkageAddr },
  methods: {
    mtTitleA(f) {
      this.currentTap = f
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
