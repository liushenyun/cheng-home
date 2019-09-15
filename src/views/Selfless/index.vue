<template>
  <div class="selfless-ctr">
    <p class="self-titp">赞助第六届世界成氏恳亲大会,所有捐赠及金额去向将在赞助公示中向全族人公示。</p>
    <div class="s-input-wrap"><input v-model="params.name" class="s-input"  placeholder="请输入捐赠人姓名(不填默认为匿名捐赠）" type="text" name="" id=""></div>
    <div class="s-input-wrap"><input v-model="params.ancestral"  class="s-input"  placeholder="请输入捐赠人祖籍" type="text" name="" id=""></div>
    <div class="s-input-wrap"><input v-model="params.residence"  class="s-input"  placeholder="请输入捐赠人现居城市" type="text" name="" id=""></div>
    <div class="s-input-wrap"><input v-model="params.tel"  class="s-input" maxlength="11"  placeholder="请输入联系电话" type="number" name="" id=""></div>
    <div class="s-input-wrap"><input v-model="params.amount"  class="s-input"  placeholder="请输入捐赠金额" type="number" name="" id=""></div>
    <div class="self-btn" @click="selfSubmitA">立即捐赠</div>
  </div>
</template>

<script>
import dateFormat from '../../utils/dateFormat'
import { sponsorDonationApiF } from '@/service/requestFun.js'
import { jsConfigApi } from '../../service/apiUrl'
import wechat from '../../common/js/wechat'
// @ is an alias to /src
export default {
  name: 'Selfless',
  data () {
    return {
      params: {
        name: '', // 姓名
        name: '', // 姓名
        ancestral: '', // 祖籍
        residence: '', // 现居地
        tel: '', // 电话
        amount: '' // 金额
      }
    }
  },
  components: {},
  methods: {
    selfSubmitA() {
      let _this = this
      wechat.config(wechat.properties.interface.chooseWXPay, jsConfigApi(), function(r) {
        
        sponsorDonationApiF(_this.params).then((result) => {
          wechat.chooseWxPay(result, function (res) {
              _this.$router.push({
                name: 'sponsor'
              })
          })
        }).catch((err) => {
          
        });
      })
    }
  },
  watch: { },
  beforeRouteLeave(to, from, next) {
    history.pushState(null, null, location.search.replace(/code/g, 'XX'))
    next()
  },
  mounted () {
    document.title = '无私奉献'
  }
}
</script>

<style lang="scss" scoped>
@import './index'
</style>
