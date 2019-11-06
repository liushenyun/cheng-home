<template>
  <div class="FundraisingDetail-ctr">
    <div class="FundraisingDetail-con"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10">
      <div class="mine-top-outer">
        <div class="mine-info">
          <img :src="pageData.publisherImage" alt="">
          <span>
            <p>{{pageData.publisher}}</p>
            <p>{{pageData.title}}</p>
          </span>
          <i>·个人求助·</i>
        </div>
      </div>

      <div class="Fundrais-money-outer">
        <span>
          <p>【筹款目标】</p>
          <p>{{pageData.targetMoneyDesc}}元</p>
        </span>
        <span>
          <p>【已筹款】</p>
          <p>{{pageData.totalMoneyDesc}}元</p>
        </span>
      </div>

      <div class="Fundrais-des-wrap">
        <div class="Fun-des-word">{{pageData.description}}</div>
        <div class="Fun-des-imgs">
          <img v-for="(item, index) in pageData.medias" :key="index" :src="item.url" alt="">
        </div>
      </div>

      <div class="help-record-wrap">
        <p class="help-title">爱心帮助记录</p>
        <ul>
          <li v-for="(item,index) in pageList" :key="index">
            <img class="help-item-img" :src="item.headimage" alt="">
            <span class="help-item-con">
              <p><span class='help-a'>{{item.nickName}} &nbsp;</span> <span>帮助了: {{item.money}}元</span></p>
              <p><span class='help-a'>总爱心值: &nbsp;</span> <img class="help-a-img" src="../../image/my-wefale_icon.png" /><span> {{item.totalMoney}}</span></p>
            </span>
          </li>
          <p class="pu-no-data" v-if="pageList.length < 1">暂无数据</p>
        </ul>
      </div>

      <p v-show="loading" class="page-infinite-loading">
        <mt-spinner type="fading-circle"></mt-spinner>
        加载中
      </p>
    </div>
    <div class="Fundr-share-btn">
      <span @click="toShowPop"> <img src="../../image/shre_btn_icon.png" alt=""> <i>分享帮助</i> </span>
      <span @click="toFundraisingPayA">我也来帮助</span>
    </div>

    <div class="Fund-cert-outer" v-if="certShow">
      <div class="Fund-cert-inner">
        <div class="cert-close">
          <!-- <img src="../../image/" alt=""> -->
          <span @click="certShow = false">X</span>
        </div>
        <div class="cert-img">
          <img :src="certUrl" alt="">
        </div>
        <!-- <div class="cert-btn" @click="savePhoto">保存图片</div> -->
      </div>
    </div>


  </div>
</template>

<script>
import { beforeRouteLeave } from '@/common/js/mixin.js'
import {
  crowdfundingInfoApiF,
  crowdfundingRecordPageApiF,
  crowdfundingRecordCertApiF
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
      crowdfundingId: null,
      pageData: {
        medias: []
      },
      pageList: [],
      hasMoreData: false,
      loading: false,
      pageParams: {
        pageSize: 10,
        currentPage: 1
      },
      certUrl: '',
      certShow: false
    }
  },
  components: { },
  methods: {
    savePhoto() {
      let _self = this
      wechat.config(wechat.properties.interface.downloadImage, jsConfigApi(), function(r) {
        wx.downloadImage({
            serverId: _self.certUrl, // 需要下载的图片的服务器端ID，由uploadImage接口获得
            isShowProgressTips: 1, // 默认为1，显示进度提示
            success: function (res) {
              _self.$toast('保存成功')
              _self.certShow = false
            }
        })
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
          this.crowdfundingRecordPageApiFA()
        }, 0);
      }
    },
    crowdfundingRecordCertApiFA() {
      crowdfundingRecordCertApiF(this.crowdfundingId).then((result) => {
        this.certUrl = result
      }).catch((err) => {

      });
    },
    crowdfundingInfoApiFA() {
      crowdfundingInfoApiF(this.crowdfundingId).then((result) => {
        this.pageData = result
      }).catch((err) => {

      });
    },
    crowdfundingRecordPageApiFA() {
      crowdfundingRecordPageApiF({
        crowdfundingId: this.crowdfundingId,
        ...this.pageParams
      }).then((result) => {
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
    this.crowdfundingId = this.$route.params.id
    this.crowdfundingInfoApiFA()
    this.crowdfundingRecordPageApiFA()
    // this.crowdfundingRecordCertApiFA()
  }
}
</script>

<style lang="scss" scoped>
@import './index'
</style>
