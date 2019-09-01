<template>
  <div class="review-status-ctr">
      <div class="review-con">
        <img src="../../image/review_ing_icon.png" alt="">
        <div class="review-word">
          <p class="rw-p-1">《第六届世界成氏恳亲大会》</p>
          <p class="rw-p-2">已成功报名参会总人数：</p>
          <span class="rw-span-1"> {{pageData.total}} 人</span>
          <p class="rw-p-3">您所在的代表团成功报名人数：</p>
          <span class="rw-span-2">{{pageData.sameDelegationTotal}} 人</span>
          <p class="rw-p-4">团体报名请联系当地宗亲会
秘书处或筹备委员会秘书处</p>
        </div>
      </div>
  </div>
</template>

<script>
import dateFormat from '../../utils/dateFormat'
import { activityStatusApiF } from '@/service/requestFun'
// @ is an alias to /src
export default {
  name: 'ReviewStatus',
  data () {
    return {
      showShare: false,
      pageData: {
        sameDelegationTotal: 0,
        total: 0
      }
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
    activityStatusApiFA() {
      activityStatusApiF({
        activityId: 1
      }).then((result) => {
        let { total, sameDelegationTotal } = result
        this.pageData = {
          total,
          sameDelegationTotal
        }
      }).catch(() => {

      })
    }
  },
  beforeRouteLeave(to, from, next) {
    history.pushState(null, null, location.search.replace(/code/g, 'XX'))
    next()
  },
  mounted () {
    this.activityStatusApiFA()
  }
}
</script>

<style lang="scss" scoped>
@import './index'
</style>
