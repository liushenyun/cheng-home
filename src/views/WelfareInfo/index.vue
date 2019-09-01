<template>
  <div class="sign-success-ctr">
    WelfareInfo
  </div>
</template>

<script>
import dateFormat from '../../utils/dateFormat'
// @ is an alias to /src
export default {
  name: 'WelfareInfo',
  data () {
    return {
      showShare: false
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
