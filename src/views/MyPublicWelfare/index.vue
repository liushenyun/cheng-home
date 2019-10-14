<template>
  <div class="meet-trip-ctr">
    <div class="mt-form-wrap">
      <div class="mt-title">
        <p @click="mtTitleA('GO')" :class=" currentTap == 'GO' ? 'active' :''">·我参与的公益·</p>
        <p @click="mtTitleA('BACK')" :class=" currentTap == 'BACK' ? 'active' :''">·我发起的公益·</p>
      </div>

      <div class="meet-info-wrap" v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10">
        <ul>
          <li v-for="(item, index) in pageList" :key="index">
            <p>{{item.title}}</p>
            <p>执行机构：{{item.originator}}</p>
            <p>创建时间：{{item.createTime}}</p>
            <p>发起人：{{item.publisher}}</p>
            <p>类型：{{item.typeName}}</p>
            <p v-if="currentTap == 'BACK'">状态：{{item.statusDesc}}({{item.refuseReason}})</p>
            <div class="dis-btn-wrap">
              <span @click="toFunDetailA(item)"><i>查看详细</i> <img src="../../image/dis_right_ic.png" alt=""></span>
              <span @click="toFundingApplyA(item)" v-if="currentTap == 'BACK' && item.status == 3" class="active"><i>重新审核</i> <img src="../../image/dis_right_ic.png" alt=""></span>
              <span v-if="currentTap == 'GO'" class="active"><i>我的证书</i> <img src="../../image/dis_right_ic.png" alt=""></span>
            </div>
          </li>
          <p class="pu-no-data" v-if="pageList.length < 1">暂无数据</p>
        </ul>
        <p v-show="loading" class="page-infinite-loading">
          <mt-spinner type="fading-circle"></mt-spinner>
          加载中
        </p>
      </div>

    </div>

  </div>
</template>

<script>
import { beforeRouteLeave } from '@/common/js/mixin.js'
import {
  crowdfundingPageLaunchedApiF,
  crowdfundingPagePartApiF } from "@/service/requestFun.js"
import puGetSearch from '@/utils/puGetSearch'
// @ is an alias to /src
export default {
  name: 'MyPublicWelfare',
  mixins: [beforeRouteLeave],
  data () {
    return {
      currentTap: 'GO',
      pageList: [],
      hasMoreData: false,
      loading: false,
      pageParams: {
        pageSize: 10,
        currentPage: 1
      }
    }
  },
  components: {  },
  methods: {
    mtTitleA(f) {
      this.currentTap = f
      this.pageList = []
      this.hasMoreData = false
      this.loading = false
      this.pageParams.currentPage = 1
      if (this.currentTap == 'GO') {
        this.crowdfundingPagePartApiFA()
      } else if (this.currentTap == 'BACK') {
        this.crowdfundingPageLaunchedApiFA()
      }
    },
    loadMore() {
      if (this.hasMoreData) {
        this.loading = true
        setTimeout(() => {
          this.pageParams.currentPage += 1
          if (this.currentTap == 'GO') {
            this.crowdfundingPagePartApiFA()
          } else if (this.currentTap == 'BACK') {
            this.crowdfundingPageLaunchedApiFA()
          }
        }, 0);
      }
    },
    crowdfundingPageLaunchedApiFA() { // 我发起的
      crowdfundingPageLaunchedApiF(this.pageParams).then((result) => {
        this.dealData(result)
      }).catch(() => {

      })
    },
    crowdfundingPagePartApiFA() { // 我参与的
      crowdfundingPagePartApiF(this.pageParams).then((result) => {
        this.dealData(result)
      }).catch(() => {

      })
    },
    dealData(result) {
      this.loading = false
      let { totalPage, currentPage, data } = result
      this.pageList = this.pageList.concat(data)
      this.hasMoreData = !(totalPage <= currentPage)
    },
    toFunDetailA(item) {
      this.$router.push({
          name: 'myfundraising',
          params: {
              id: item.id
          }
          // path: `/myfundraising`,
          // query:{
          //     id: item.id
          // }
      })
    },
    toFundingApplyA(item) {
      this.$router.push({
        name: 'fundingApply',
        params: {
          id: item.id
        }
      })
    }
  },

  watch: { },
  mounted () {
    this.crowdfundingPagePartApiFA()
  }
}
</script>

<style lang="scss" scoped>
@import './index'
</style>
