<template>
  <div class="sign-success-ctr">
    <div class="sign-success-wrap" @click='showShare=false'>
        <div class="sign-con">
          <img src="../../image/sign_success_icon.png" alt="">
          <p class="s-tip1">·报名成功·</p>
          <p class="s-tip2">您已成功报名该活动,点击<b @click.stop="toMineA">我的</b>添加行程信息</p>
          <div class="share-active-btn" @click.stop="showShare = true">分享活动</div>
          <div class="back-home" @click.stop="backHomeA">返回活动首页</div>
        </div>
        <div class="share-btn-s" v-if="showShare" @click.stop="">
          <span>
            <img src="../../image/friend_icon.png" alt="">
            <p>分享至好友</p>
          </span>
          <span>
            <img src="../../image/we_icon.png" alt="">
            <p>分享至朋友圈</p>
          </span>
        </div>
    </div>
  </div>
</template>

<script>
import dateFormat from '../../utils/dateFormat'
// @ is an alias to /src
export default {
  name: 'SignSuccess',
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
