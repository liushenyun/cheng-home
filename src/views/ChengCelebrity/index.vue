<template>
  <div class="top">
    <div class="selectDiv">
      <select v-model="pageParams.dynasty" class="select" @change="change">
        <option value="-1">朝代</option>
        <option v-for="item in dynastyArr" :value="item.key">{{item.name}}</option>
      </select>
    </div>
    <div class="indexDiv" v-infinite-scroll="loadMore"
         infinite-scroll-disabled="loading"
         infinite-scroll-distance="10">
      <div class="colorDiv" v-for="(item,index) in pageList" @click="jumpFamilyTreeInfo(item)" :class="{'background-even':index % 2 == 0}" >
        <div class="txt">
          <div class="book1"><img src="../../image/book.png"></div>
          <div class="celebrityTxt">{{item.typeName}}.{{item.title}}</div>
          <div class="jian1"><img src="../../image/jiantou.png"></div>
        </div>
      </div>
    </div>

    <div class="nodata" v-if="pageList.length <=0 || pageList == null">
      暂无数据
    </div>
  </div>

</template>

<script>

    import { beforeRouteLeave } from '@/common/js/mixin.js'
    import { celebrityApiF,dynastyApiF } from "@/service/requestFun"; //成氏名人列表
    import {dateFormat} from "../../utils/dateFormat";

    export default {
        name: 'DetailMain',
        mixins: [beforeRouteLeave],
        data () {
            return {
                show: true,
                showShare: false, //以下是loadMore方法
                pageList: [],
                hasMoreData: false,
                loading: false,
                pageParams: {
                    pageSize: 10,
                    currentPage: 1,
                    dynasty: ''
                },
                dynastyArr: [],
            }
        },
        components: {  },
        methods: {
            initcelebrityList(pageAble) {
                let query = this.pageParams;
                celebrityApiF(query).then(result => {
                    this.loading = false
                    let { totalPage, currentPage, data } = result
                    if(pageAble){
                        this.pageList = this.pageList.concat(data)
                    }else{
                        this.pageList = data
                    }
                    this.hasMoreData = !(totalPage <= currentPage)

                }).catch();
            },
            loadMore() {
                if (this.hasMoreData) {
                    this.loading = true
                    console.log("加载更多")
                    setTimeout(() => {
                        this.pageParams.currentPage += 1
                        this.initcelebrityList(true)
                    }, 0);
                }
            },
            initdynastyList() {
                let dynastyType = 7;
                dynastyApiF(dynastyType).then(result => {
                    this.dynastyArr = result;
                }).catch();
            },
            change (){
                this.initcelebrityList();
            },
            jumpFamilyTreeInfo (celebrity){
                let Id = celebrity.id;
                this.$router.push({
                    path: `/ChengCelebrityInfo`,
                    query: {
                        celebrityId: Id //传id 路由跳转详情页activitedInfo
                    }
                });
            }
        },
        mounted () {
            this.initcelebrityList();//名人列表
            this.initdynastyList();//朝代
        }
    }
</script>

<style lang="scss" scoped>
  @import './index';
</style>
