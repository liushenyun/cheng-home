<template>
  <div class="BindPhone-ctr">
    <div class="bp-inner">
      <p class="bp-tip">绑定手机号</p>
      <div class="bp-input-wrap bp-tel">
        <img class="bp-phone-img" src="../../image/bind_phone_icon.png" alt="">
        <div class="dp-input_div">
          <input type="text" maxlength="11" v-model="params.phone" placeholder="请输入手机号">
        </div>
      </div>

      <div class="bp-input-wrap">
        <img class="bp-code-img" src="../../image/bind_code_icon.png" alt="">
        <div class="dp-input_div">
          <input type="text" v-model="params.code" maxlength="6" placeholder="请输入验证码">
        </div>
        <span @click="toSendCodeA">{{codeText}}</span>
      </div>

      <div class="bp-btn" @click="submitA">确定</div>
    </div>
  </div>
</template>

<script>
import { beforeRouteLeave } from '@/common/js/mixin.js'
import dateFormat from '../../utils/dateFormat'
import { codeSendApiF, userBindApiF } from '../../service/requestFun.js'
// @ is an alias to /src
export default {
  name: 'BindPhone',
  mixins: [beforeRouteLeave],
  data () {
    return {
      showShare: false,
      codeText: '发送验证码',
      codeLock: false,
      params: {
        phone: '',
        code: ''
      }
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
      this.codeSendApiFA()
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
    userBindApiFA() {
      userBindApiF({
        phone: this.params.phone,
        code: this.params.code
      }).then(() => {
        this.$toast('手机号绑定成功')
        setTimeout(() => {
          this.$router.go(-1)
        }, 1500);
      }).catch(() => {})
    },
    codeSendApiFA() {
      codeSendApiF({
        phone: this.params.phone
      }).then(() => {
        this.$toast('验证码发送成功')
      }).catch(() => {})
    },
    backHomeA() {
      this.$router.push({
        name: 'MeetSummary'
      })
    },
    submitA() {
      this.userBindApiFA()
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
@import './index'
</style>
