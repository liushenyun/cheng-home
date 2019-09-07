<template>
  <div class="BindPhone-ctr">
    <div class="bp-inner">
      <p class="bp-tip">绑定手机号</p>
      <div class="bp-input-wrap bp-tel">
        <img src="../../image/mine_bind_ic.png" alt="">
        <div class="dp-input_div">
          <input type="text" placeholder="请输入手机号">
        </div>
      </div>

      <div class="bp-input-wrap">
        <img src="../../image/mine_bind_ic.png" alt="">
        <div class="dp-input_div">
          <input type="text" placeholder="请输入验证码">
        </div>
        <span @click="toSendCodeA">{{codeText}}</span>
      </div>

      <div class="bp-btn">确定</div>
    </div>
  </div>
</template>

<script>
import dateFormat from '../../utils/dateFormat'
// @ is an alias to /src
export default {
  name: 'BindPhone',
  data () {
    return {
      showShare: false,
      codeText: '发送验证码',
      codeLock: false
    }
  },
  components: {  },
  methods: {
    toSendCodeA() {
      if (this.codeLock) {
        return
      }
      this.codeLock = true
      let time = 60
      let timer = setInterval(() => {
                    time--;
                    this.codeText = time + ' 秒';
                    if (time === 0) {
                        clearInterval(timer);
                        this.codeText = '重新获取';
                        this.codeLock = false
                    }
                }, 1000)

    },
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
