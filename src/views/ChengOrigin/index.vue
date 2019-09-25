<template>
  <div class="top">
    <div class="colorDiv">
        <img src="../../image/activitedListBackground.jpg">
        <span>[成氏来源] 郕国数百年兴衰史</span>
    </div>
  </div>
</template>

<script>
import dateFormat from '../../utils/dateFormat'
import { beforeRouteLeave } from '@/common/js/mixin.js'
// @ is an alias to /src
export default {
  name: 'DetailMain',
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
