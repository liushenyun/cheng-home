<template>
  <div class="top">
    <div class="selectDiv">
      <select  class="select" v-model="Country">
        <option v-for="item in CountryList">国</option>
<!--        <option >中国</option>-->
<!--        <option >美国</option>-->
      </select>
      <select  class="select" v-model="Province">
        <option  v-for="item in ProvinceList">省</option>
<!--        <option >广东省</option>-->
<!--        <option >湖南省</option>-->
      </select>
      <select  class="select" v-model="City">
        <option  v-for="item in CityList">市</option>
<!--        <option >深圳市</option>-->
<!--        <option >广州市</option>-->
      </select>
    </div>
    <div class="indexDiv" v-infinite-scroll="loadMore"
         infinite-scroll-disabled="loading"
         infinite-scroll-distance="10">
      <div class="colorDiv" v-for="item in pageList">
        <div class="txt">
          <div class="book1"><img src="../../image/detail_icon.png"></div>
          <div>{{item.typeName}}.{{item.title}}</div>
          <div class="jian1"><img src="../../image/jiantou.png"></div>
        </div>
      </div>


    </div>

  </div>

</template>

<script>

    import { beforeRouteLeave } from '@/common/js/mixin.js'
    import { familyTreeApiF } from "@/service/requestFun"; //成氏族谱
    import {dateFormat} from "../../utils/dateFormat";

    export default {
        name: 'DetailMain',
        mixins: [beforeRouteLeave],
        data () {
            return {
                showShare: false,
                pageList: [],
                hasMoreData: false,
                loading: false,
                pageParams: {
                    pageSize: 15,
                    currentPage: 1
                }
            }
        },
        components: {  },
        methods: {
            initFamilyTreeList() {
                familyTreeApiF(this.pageParams).then(result => {
                    console.log(result)
                    this.loading = false
                    let { totalPage, currentPage, data } = result
                    this.pageList = this.pageList.concat(data)

                    this.hasMoreData = !(totalPage <= currentPage)
                }).catch();
            },
            loadMore() {
                if (this.hasMoreData) {
                    this.loading = true
                    console.log("加载更多")
                    setTimeout(() => {
                        this.pageParams.currentPage += 1
                        this.initFamilyTreeList()
                    }, 0);
                }
            },
            jumpOriginInfo (item) {  //item参数 @click() 参数绑定相同  item in pageList
                let t = item.id;
                this.$router.push({
                    path: `/ChengOriginInfo`,
                    query: {
                        activityId: t //传id 路由跳转详情页activitedInfo
                    }
                })
            },
            backHomeA () {
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
            this.initFamilyTreeList();
        }
    }
</script>

<style lang="scss" scoped>
@import './index';
</style>
