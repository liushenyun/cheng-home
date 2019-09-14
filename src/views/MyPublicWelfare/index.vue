<template>
  <div class="meet-trip-ctr">
    <div class="mt-form-wrap">
      <div class="mt-title">
        <p @click="mtTitleA('GO')" :class=" currentTap == 'GO' ? 'active' :''">·我参与的公益·</p>
        <p @click="mtTitleA('BACK')" :class=" currentTap == 'BACK' ? 'active' :''">·我发起的公益·</p>
      </div>

      <div class="meet-info-wrap">
        <ul>
          <li>
            <p>闫村祠堂修缮资助项目捐款人明细</p>
            <p>执行机构：一般是个人或当地宗亲会</p>
            <p>资助时间：2019年9月</p>
            <p>资助地点：闫村祠堂</p>
            <p>资金管理：成勇</p>
            <div class="dis-btn-wrap">
              <span><i>查看详细</i> <img src="../../image/dis_right_ic.png" alt=""></span>
              <span class="active"><i>查看详细</i> <img src="../../image/dis_right_ic.png" alt=""></span>
            </div>
          </li>
          <li>
            <p>闫村祠堂修缮资助项目捐款人明细</p>
            <p>执行机构：一般是个人或当地宗亲会</p>
            <p>资助时间：2019年9月</p>
            <p>资助地点：闫村祠堂</p>
            <p>资金管理：成勇</p>
            <div class="dis-btn-wrap">
              <span><i>查看详细</i> <img src="../../image/dis_right_ic.png" alt=""></span>
            </div>
          </li>
        </ul>
      </div>

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
  name: 'MyPublicWelfare',
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
