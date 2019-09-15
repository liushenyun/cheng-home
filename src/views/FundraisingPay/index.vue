<template>
  <div class="FundraisingPay-ctr">
    <div class="mine-top-outer">
      <div class="mine-info">
        <img :src="pageData.publisherImage" alt="">
        <span>
          <p>{{pageData.publisher}}</p>
          <p>{{pageData.title}}</p>
        </span>
        <!-- <img src="../../image/mine_edit_icon.png" alt=""> -->
      </div>
    </div>

    <div class="Fundrais-money-outer">

      <div class="Fundrais-money-inner">
        <p class="FM-title">选择帮助金额</p>
        <ul class="FM-money-wrap">
          <li :class="pageParams.money == 20 ? 'active' : ''"  @click="toChoiceMoney(20)">20元</li>
          <li :class="pageParams.money == 50 ? 'active' : ''"  @click="toChoiceMoney(50)">50元</li>
          <li :class="pageParams.money == 100 ? 'active' : ''"  @click="toChoiceMoney(100)">100元</li>
        </ul>
        <ul class="FM-money-wrap">
          <li :class="pageParams.money == 200 ? 'active' : ''"  @click="toChoiceMoney(200)">200元</li>
          <li :class="pageParams.money == 500 ? 'active' : ''"  @click="toChoiceMoney(500)">500元</li>
          <li :class="pageParams.money == 1000 ? 'active' : ''"  @click="toChoiceMoney(1000)">1000元</li>
        </ul>
        <div class="FM-input-conunt">
          <input class="pub-input" type="number" v-model="pageParams.money" placeholder="输入其他金额" />
        </div>
      </div>
      <div class="FM-ni">
        <span>匿名支持</span>
        <mt-switch v-model="pageParams.anonymousFlag">开关</mt-switch>
      </div>
      <div class="Fm-submit-btn" @click="toSubmitA">立即支持</div>
    </div>

  </div>
</template>

<script>
import { beforeRouteLeave } from '@/common/js/mixin.js'
import {
  crowdfundingInfoApiF,
  crowdfundingRecordCreateApiF
} from "@/service/requestFun.js"
import puGetSearch from '@/utils/puGetSearch'
import { jsConfigApi } from '../../service/apiUrl'
import wechat from '../../common/js/wechat'
// @ is an alias to /src
export default {
  name: 'FundraisingPay',
  mixins: [beforeRouteLeave],
  data () {
    return {
      pageData: {},
      pageParams: {
        anonymousFlag: false,
        crowdfundingId: null,
        money: 500 
      }
    }
  },
  components: {  },
  methods: {
    toSubmitA() {
      let _this = this
      _this.pageParams.anonymousFlag = Number(_this.pageParams.anonymousFlag)
      wechat.config(wechat.properties.interface.chooseWXPay, jsConfigApi(), function(r) {
        crowdfundingRecordCreateApiF(_this.pageParams).then((result) => {
          wechat.chooseWxPay(result, function (res) {
              _this.$router.push({
                name: 'myPublicWelfare'
              })
          })
        }).catch((err) => {
          
        });
      })
    },
    toChoiceMoney(m){
      this.pageParams.money = m
    },
   crowdfundingInfoApiFA() {
      crowdfundingInfoApiF(this.pageParams.crowdfundingId).then((result) => {
        this.pageData = result
      }).catch((err) => {
        
      });
    },
  },
  
  watch: { },
  mounted () {
    this.pageParams.crowdfundingId = this.$route.params.id
    this.crowdfundingInfoApiFA()
  }
}
</script>

<style lang="scss" scoped>
@import './index'
</style>
