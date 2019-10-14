<template>
  <div class="FundraisingDetail-ctr">
    <div class="FundraisingDetail-con"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10">
      <div class="mine-top-outer">
        <div class="mine-info">
          <div class="colorTxt" >
            <div class="color"></div>
            <div class="txt">{{pageData.title}}</div>
          </div>
        </div>
      </div>

      <div class="Fundrais-money-outer">
        <span>
          <p>【筹款目标】</p>
          <p>{{pageData.targetMoney}}元</p>
        </span>
        <span>
          <p>【已筹款】</p>
          <p>{{pageData.totalMoney}}元</p>
        </span>
        <span>
          <p>【已提现】</p>
          <p>{{pageData.totalWithdraw}}元</p>
        </span>
      </div>

      <div class="lineColor"></div>



      <div class="help-record-wrap">
        <p class="help-title">我的提现记录</p>

        <div class="Fundrais-des-wrap">
          <div class="Fun-des-word" v-for="(item,index) in pageList">
            <div class="Fun-des-text">
              <span class="left1">申请提现</span>
              <span class="right1">{{item.money}}</span>
            </div>
            <div class="Fun-des-text">
              <span class="left2">提现时间</span>
              <span class="right2">{{item.createTime}}</span>
            </div>
          </div>

        </div>

      </div>

    </div>

    <div class="Fundr-share-btn"  @click="applyWith">
      <div id="main">
        {{pageData.buttonText}}
      </div>

    </div>


    <mt-popup
      v-model="popupVisible"
      popup-transition="popup-fade">
      <div class="top">
        <div class="withColor"></div>
        <div class="withText">提现金额</div>
      </div>
      <div class="content">
        <p class="yuan">¥</p>
        <input type="number" v-model="allmoney">
      </div>
      <div class="bottom">
        <p class="okTxt">可提现金额 ¥ {{pageData.withdrawMoney}}</p>
        <p class="AllTxt">
                <button @click="AllWithdraw">全部提现</button>
            </p>
      </div>
      <div class="btnTxt" @click="cashOut">提现</div>
    </mt-popup>

  </div>
</template>

<script>
import { beforeRouteLeave } from '@/common/js/mixin.js'
import { MessageBox } from 'mint-ui' //引入弹框组件 没用到
import { Popup } from 'mint-ui'; //引入弹框Popup组件
import {
  crowdfundingInfoApiF,
  crowdfundingRecordPageApiF,
  crowdfundingRecordCertApiF,
    cashInfoApiF,
    withdrawListApiF,
    withdrawApiF
} from "@/service/requestFun.js"
import puGetSearch from '@/utils/puGetSearch'
import { jsConfigApi } from '../../service/apiUrl'
import wechat from '../../common/js/wechat'
// @ is an alias to /src
export default {
  name: 'FundraisingDetail',
  mixins: [beforeRouteLeave],
  data () {
    return {
        allmoney:null,
      crowdfundingId: null,
        buttonStatus:null,
        moneyId:null,
      pageData: {},
      pageList: [],
      hasMoreData: false,
      loading: false,
      pageParams: {
        pageSize: 10,
        currentPage: 1
      },
      certUrl: '',
      certShow: false,
      popupVisible:false
    }
  },
  components: { },
  methods: {
      applyWith () { //申请提现按钮弹框
        if (this.buttonStatus == 0){
            this.popupVisible = true;
        }else if(this.buttonStatus == 2){
            MessageBox.confirm('重新申请提现？').then(action => {
                this.popupVisible = true;
            });

        }else{
            this.popupVisible = false;
        }
      },
      AllWithdraw(){ //全部提现按钮 金额输入到input框
          this.allmoney = this.pageData.withdrawMoney;
      },
      cashOut(){  //点击提现按钮
          this.popupVisible = false;
          let Mid = null
          if (this.moneyId !== null){
              Mid = this.moneyId
          }
          if (this.allmoney == '' || this.allmoney == null){
              this.$toast("金额不能为空且必须大于0");
              return
          }
          withdrawApiF({
              crowdfundingId: this.crowdfundingId,
              money:this.allmoney,
              id: Mid
          }).then((result) => {
              this.$toast("提现申请成功！");
              this.pageList = [];
              this.withdrawListPage();
              this.pageData = {};  //重新申请提现 重新刷新调用接口
              this.cashInfo();
          }).catch((result) => {
              // this.$toast(result);
          })

      },
    toShowPop() {
      this.certShow = true
      this.crowdfundingRecordCertApiFA()
    },
    toFundraisingPayA() {
      this.$router.push({
        name: 'fundraisingPay',
        params: {
          id: this.crowdfundingId
        }
      })
    },
    loadMore() {
      if (this.hasMoreData) {
        this.loading = true
        setTimeout(() => {
          this.pageParams.currentPage += 1
          this.withdrawListPage()
        }, 0);
      }
    },
    crowdfundingRecordCertApiFA() {
      crowdfundingRecordCertApiF(this.crowdfundingId).then((result) => {
        this.certUrl = result
      }).catch((err) => {

      });
    },
      cashInfo() {
        cashInfoApiF(this.crowdfundingId).then((result) => {
        this.pageData = result
            this.buttonStatus = this.pageData.buttonStatus
            this.moneyId = result.id
      }).catch((err) => {

      });
    },
      withdrawListPage() {
        withdrawListApiF({
        crowdfundingId: this.crowdfundingId,
        ...this.pageParams
      }).then((result) => {
          console.log(result)
        this.loading = false
        let { totalPage, currentPage, data } = result
        this.pageList = this.pageList.concat(data)
        this.hasMoreData = !(totalPage <= currentPage)
      }).catch(() => {

      })
    }
  },

  watch: { },
  mounted () {
    this.crowdfundingId = this.$route.params.id  //拿到地址栏的id参数
    this.cashInfo()
    this.withdrawListPage()
  }
}
</script>

<style lang="scss" scoped>
@import './index'
</style>
