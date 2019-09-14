<template>
  <div class="FundraisingDetail-ctr">
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

    <div class="Fundrais-des-wrap">
      <div class="Fun-des-word">筹款详情...筹款详情...</div>
    </div>

    <div class="help-record-wrap">
      <p class="help-title">爱心帮助记录</p>
      <ul>
        <li v-for="(item,index) in 10" :key="index">
          <img class="help-item-img" src="../../image/we_icon.png" alt="">
          <span class="help-item-con">
            <p><span class='help-a'>屁屁 &nbsp;</span> <span>帮助了: 100元</span></p>
            <p><span class='help-a'>总爱心值: &nbsp;</span> <img class="help-a-img" src="../../image/my-wefale_icon.png" /><span>100元</span></p>
          </span>
        </li>
      </ul>
    </div>

    <div class="Fundr-share-btn">
      <span> <img src="../../image/shre_btn_icon.png" alt=""> <i>分享帮助</i> </span>
      <span>我也来帮助</span>
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
  name: 'FundraisingDetail',
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
