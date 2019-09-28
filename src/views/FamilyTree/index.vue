<template>
  <div class="top">
    <div class="selectDiv">
      <select v-model="temp.country" class="select"  @change="(e)=>{change(e,'country')}">
        <option value="-1" ref="newText">请选择</option>
        <option v-for="item in countryArr" :label="item.name" :value="item.id">{{item.name}}</option>
      </select>
      <select v-model="temp.province" class="select" @change="(e)=>{change(e,'province')}">
        <option value="-1">请选择</option>
        <option v-for="item in provinceArr" :value="item.id">{{item.name}}</option>
      </select>
      <select v-model="temp.city" class="select" @change="(e)=>{change(e,'city')}">
        <option value="-1">请选择</option>
        <option v-for="item in cityArr" :value="item.id" >{{item.name}}</option>
      </select>
    </div>
    <div class="indexDiv" v-infinite-scroll="loadMore"
         infinite-scroll-disabled="loading"
         infinite-scroll-distance="10">
      <div class="colorDiv" v-for="(item,index) in pageList" @click="jumpFamilyTreeInfo(item)" :class="{'background-even':index % 2 == 0}" >
        <div class="txt">
          <div class="book1"><img src="../../image/book.png"></div>
          <div class="familyTxt">{{item.typeName}}.{{item.title}}</div>
          <div class="jian1"><img src="../../image/jiantou.png"></div>
        </div>
      </div>
    </div>

    <div class="nodata" v-show="show">
      暂无数据
    </div>
  </div>

</template>

<script>

    import { beforeRouteLeave } from '@/common/js/mixin.js'
    import { familyTreeApiF,levelListApiF } from "@/service/requestFun"; //成氏族谱 列表跟 三级联动省市区分布
    import {dateFormat} from "../../utils/dateFormat";

    export default {
        name: 'DetailMain',
        mixins: [beforeRouteLeave],
        data () {
            return {
                show: true,
                temp:{
                    country: "-1",
                    province: "-1",
                    city: "-1"
                },
                search : {
                    country: "",
                    province: "",
                    city: ""
                },
                countryArr:[],
                provinceArr:[],
                cityArr:[],
                showShare: false, //以下是loadMore方法
                pageList: [],
                hasMoreData: false,
                loading: false,
                pageParams: {
                    pageSize: 20,
                    currentPage: 1
                }

            }
        },
        components: {  },
        methods: {

            initFamilyTreeList(pageAble) {
                let page = this.pageParams;
                let query = this.search;
                for(let x in page){
                    query[x] = page[x];
                }
                let self = this;
                familyTreeApiF(query).then(result => {
                    this.loading = false
                    let { totalPage, currentPage, data } = result
                    if(pageAble){
                        this.pageList = this.pageList.concat(data)
                    }else{
                        this.pageList = data
                    }
                    this.hasMoreData = !(totalPage <= currentPage)
                    if(this.pageList.length == 0){
                        self.show = true
                    }else{
                        self.show = false
                    }
                }).catch();
            },
            loadMore() {
                if (this.hasMoreData) {
                    this.loading = true
                    console.log("加载更多")
                    setTimeout(() => {
                        this.pageParams.currentPage += 1
                        this.initFamilyTreeList(true)
                    }, 0);
                }
            },
            change (e,type){

              let target = e.target;
                let txt = target.options[target.options.selectedIndex].text;
                let value = target.value;
                if(value == -1){
                    return
                }
                switch (type) {
                    case 'country':
                        this.search.country = txt;
                        this.getChild(value);
                        this.search.province = '';
                        this.search.city = '';
                        this.temp.province = '-1';
                        this.temp.city = '-1';
                        this.provinceArr = [];
                        this.cityArr = [];
                        break
                    case 'province':
                        this.search.province = txt;
                        this.getChild(value);
                        this.temp.city = '-1';
                        this.search.city = '';
                        this.cityArr = [];
                        break
                    case 'city':
                        this.search.city = txt;
                        break
                }
                this.pageParams = {
                    pageSize: 20,
                    currentPage: 1
                }
                this.initFamilyTreeList();
            },
            getChild (id){
                let t = this;
                levelListApiF(id).then(result => {

                    let data = result;
                    if(data != null && data.length > 0){
                        let level = data[0].level;
                        if(level == 1){
                            t.countryArr = data;
                        }
                        if(level == 2){
                            t.provinceArr = data;
                        }
                        if(level == 3){
                            t.cityArr = data;
                        }
                    }
                })
            },
            jumpFamilyTreeInfo(activityId){
                let Id = activityId.id
                this.$router.push({
                    path: `/FamilyTreeInfo`,
                    query: {
                        activityId: Id //传id 路由跳转详情页activitedInfo
                    }
                });
            }
        },
        beforeRouteLeave(to, from, next) {
            history.pushState(null, null, location.search.replace(/code/g, 'XX'))
            next()
        },
        mounted () {
            this.initFamilyTreeList();
            this.getChild(0);
        }
    }
</script>

<style lang="scss" scoped>
@import './index';
</style>
