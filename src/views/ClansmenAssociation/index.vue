<template>
  <div class="sign-success-ctr">
      <div class="wait-wrap">
        <img src="../../image/wait_icon.jpg">
        <p>相关功能逐步开放</p>
        <p>·敬请期待·</p>
      </div>
  </div>
</template>

<script>
import dateFormat from '../../utils/dateFormat'
import { beforeRouteLeave } from '@/common/js/mixin.js'

// @ is an alias to /src
export default {
  name: 'ClansmenAssociation',
  mixins: [beforeRouteLeave],
  data () {
    return {
      showShare: false
    }
  },
  components: {  },
  methods: {
    backHomeA() {
      this.$router.push({
        name: 'MeetSummary'
      })
    },
    toMineA() {
      this.$router.push({
        name: 'home',
        params: {
          selected: '个人中心'
        }
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
