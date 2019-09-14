<template>
  <div class="FundraisingPay-ctr">
    <div class="mine-top-outer">
      <div class="mine-info" @click="toEditInfo">
        <img src="../../image/we_icon.png" alt="">
        <span>
          <p>微信昵称</p>
          <p>筹款标题筹款标题筹款标题筹款标题</p>
        </span>
        <img src="../../image/mine_edit_icon.png" alt="">
      </div>
    </div>

    <div class="Fundrais-money-outer">
      <span>
        <p>【筹款目标】</p>
        <p>50000元</p>
      </span>
      <span>
        <p>【筹款目标】</p>
        <p>50000元</p>
      </span>
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
      currentTap: 'GO'
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
