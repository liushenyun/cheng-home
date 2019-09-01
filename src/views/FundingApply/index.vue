<template>
  <div class="sign-success-ctr">
    FundingApply
  </div>
</template>

<script>
import dateFormat from '../../utils/dateFormat'
// @ is an alias to /src
export default {
  name: 'FundingApply',
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
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
@import './index'
</style>
