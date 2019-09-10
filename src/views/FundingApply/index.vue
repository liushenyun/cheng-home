<template>
  <div class="FundingApply-ctr">
    <div class="FA_top-wrap">
      <div class="pw-title">
        <div> <img src="../../image/welfar_word_bg_left.png" alt=""> </div>
        
        <span> <p>资助申请</p>
          <!-- <p>CHENG MALL FOUNDATION</p> -->
        </span>
        <div><img src="../../image/welfar_word_bg_right.png" alt=""></div>
      </div>
      <p class="pw-sub-title">·实事求是 敬畏公益 永怀感恩之心·</p>
    </div>
    
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
      showShare: false,
      loading: false,
      hasMoreData: true
    }
  },
  components: {  },
  methods: {
    loadMore() {
      if (this.hasMoreData) {
        this.loading = true
        setTimeout(() => { this.pageParams.currentPage += 1 }, 0);
      }
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
