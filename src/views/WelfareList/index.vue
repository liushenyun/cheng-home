<template>
  <div class="WelfareList-ctr">
    <div class="wel-con-outer" 
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10">
      <ul>
        <li v-for="(item, index) in pageList" :key="index" @click="toWelfareDetailA(item)">
          <div class="wel-item-top">
            <img class="wel-img" :src="item.mainImage" alt="">
            <span class="wel-con">
              <p class="wel-title">{{item.title}}</p>
              <div class="wel-tar-outer">
                <span><p>{{item.totalMoneyDesc}}元</p><p>【已筹款】</p>
                </span>
                <img src="" alt="">
                <span><p>{{item.targetMoneyDesc}}元</p><p>【筹款目标】</p></span>
              </div>
            </span>
          </div>
          <div class="wel-item-bottom">
            <img :src="item.publisherImage" alt="">
            <span class="wel-bottom-1">{{item.publisher}}</span>
            <span class="wel-bottom-2">发起</span>
            <span class="wel-bottom-3">【{{item.typeName}}】</span>
            <span class="wel-bottom-4">已帮助{{item.records}}次</span>
          </div>
        </li>
        <p class="pu-no-data" v-if="pageList.length < 1">暂无数据</p>
      </ul>
      <p v-show="loading" class="page-infinite-loading">
        <mt-spinner type="fading-circle"></mt-spinner>
        加载中
      </p>
    </div>
    
    <div class="wel-apply-btn" @click="toFundingApplyA">
      申请救助
    </div>
  </div>
</template>

<script>
import dateFormat from '../../utils/dateFormat'
import { crowdfundingPageApiF } from '../../service/requestFun.js'
// @ is an alias to /src
export default {
  name: 'WelfareList',
  data () {
    return {
      showShare: false,
      pageList: [],
      hasMoreData: false,
      loading: false,
      pageParams: {
        pageSize: 10,
        currentPage: 1
      },
    }
  },
  components: {  },
  methods: {
    toWelfareDetailA(item) {
      this.$router.push({
        path: 'fundraisingDetail/' + item.id
      })
    },
    toFundingApplyA() {
      this.$router.push({
        name: 'fundingApply'
      })
    },
    loadMore() {
      if (this.hasMoreData) {
        this.loading = true
        setTimeout(() => {
          this.pageParams.currentPage += 1
          this.crowdfundingPageApiFA()
        }, 0);
      }
    },
    crowdfundingPageApiFA() {
      crowdfundingPageApiF(this.pageParams).then((result) => {
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
    this.crowdfundingPageApiFA()
  }
}
</script>

<style lang="scss" scoped>
@import './index'
</style>
