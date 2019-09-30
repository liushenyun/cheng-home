<template>
  <div class="top">
    <div class="topDiv">
      <span  @click="tapActive('distribute')" :class="activeType == 'distribute'? 'active': ''">成氏分布</span>
      <span @click="tapActive('submitdata')" :class="activeType == 'submitdata'? 'active': ''">提交本村资料</span>

    </div>
    <div  v-if="activeType === 'distribute'" class="DistributeDiv"> <!--成氏分布div-->
      <div class="selectDiv">
        <select v-model="temp.country" class="select"  @change="(e)=>{change(e,'country')}">
          <option value="-1" ref="newText">国别</option>
          <option v-for="item in countryArr" :label="item.name" :value="item.id">{{item.name}}</option>
        </select>
        <select v-model="temp.province" class="select" @change="(e)=>{change(e,'province')}">
          <option value="-1">省</option>
          <option v-for="item in provinceArr" :value="item.id">{{item.name}}</option>
        </select>
        <select v-model="temp.city" class="select" @change="(e)=>{change(e,'city')}">
          <option value="-1">市</option>
          <option v-for="item in cityArr" :value="item.id" >{{item.name}}</option>
        </select>
        <select v-model="temp.city" class="select" @change="(e)=>{change(e,'city')}">
          <option value="-1">县</option>
          <option v-for="item in cityArr" :value="item.id" >{{item.name}}</option>
        </select>
        <select v-model="temp.city" class="select" @change="(e)=>{change(e,'city')}" v-if="activeType === 'distribute'">
          <option value="-1">村</option>
          <option v-for="item in cityArr" :value="item.id" >{{item.name}}</option>
        </select>
      </div>

      <div class="indexDiv" v-show="showIndex" style="margin-top:0.5rem">
        <div class="colorDivCenter">
          <div class="titleimg">
            <p class="titleTxt">成氏</p>
            <img src="../../image/chengtitle.png" alt="">
          </div>
          <img src="../../image/chengbg.png" alt="">
          <div class="txtDiv">
            在中国并不是一个 常见的姓氏，但也是中国较为古老的姓氏之一。成姓起源有八个说法：成姓来自地郕，以国名为姓氏；成姓来自容成氏后裔；成姓来自成虎的后代；成姓来自宋成公的后裔；成姓来自郤犨的封地；成姓来自匈奴族的汉化改姓；成姓来自满族汉化改姓：成姓来自其他少数民族汉化改姓。
          </div>
        </div>
        <div class="bottomTxtDiv">
          [注：本数据来源于民间统计数据，如有偏差请于我们联系]
        </div>
      </div>
      <div class="bottomdiv" v-show="bottomshow">
        <div class="imgTXT">
          <span>{{selected}}</span>
          <img src="../../image/chengtitle.png" alt="">
          <div>【成氏总人口约：160万人,分别分布在：已知省份列表】</div>
        </div>
        <div class="indexDiv" v-infinite-scroll="loadMore"
             infinite-scroll-disabled="loading"
             infinite-scroll-distance="10">
          <div class="colorDiv" >
            <div class="txtone">
              <span class="p1">序号</span>
              <span class="p2">{{txt}}</span>
              <span class="p3">大约人数</span>
            </div>
          </div>
          <div class="colorDiv" v-for="(item,index) in pageList" @click="jumpFamilyTreeInfo(item)" >
            <div class="txt">
              <div class="b1">
                <p>1</p>
                <!--            <img src="../../image/rank.png">-->
              </div>
              <div class="b2">{{item.title}}</div>
              <div class="b3">{{item.typeName}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="nodata" v-show="show">
        暂无数据
      </div>
    </div>

    <div class="submitDiv"  v-if="activeType === 'submitdata'">  <!--提交本村资料div-->
      <div class="selectDiv" >
        <select v-model="temp.country" class="select"  @change="(e)=>{change(e,'country')}">
          <option value="-1" ref="newText">国别</option>
          <option v-for="item in countryArr" :label="item.name" :value="item.id">{{item.name}}</option>
        </select>
        <select v-model="temp.province" class="select" @change="(e)=>{change(e,'province')}">
          <option value="-1">省</option>
          <option v-for="item in provinceArr" :value="item.id">{{item.name}}</option>
        </select>
        <select v-model="temp.city" class="select" @change="(e)=>{change(e,'city')}">
          <option value="-1">市</option>
          <option v-for="item in cityArr" :value="item.id" >{{item.name}}</option>
        </select>
        <select v-model="temp.city" class="select" @change="(e)=>{change(e,'city')}">
          <option value="-1">县</option>
          <option v-for="item in cityArr" :value="item.id" >{{item.name}}</option>
        </select>
        <div  class="inputdiv">
          <div class="inputtxt">
            <p class="i1">村名：</p>
            <p  class="i2"><input type="text" placeholder="请输入"></p>
          </div>
        </div>
        <div  class="inputdiv">
          <div class="inputtxt">
            <p class="i1">本村人数：</p>
            <p  class="i2"><input type="text" placeholder="请输入"></p>
          </div>
        </div>
        <div  class="textdiv">
          <div class="texttxt">
            <p class="t1">本村简介：</p>
            <p class="t2"><textarea placeholder="请输入" name="" id="" ></textarea></p>
          </div>
        </div>
        <div  class="textdiv">
          <div class="texttxt">
            <p class="t1">村祠介绍：</p>
            <p class="t2"><textarea placeholder="请输入" name="" id="" ></textarea></p>
          </div>
        </div>

        <div  class="imgdiv">
          <div class="img1">
            <div class="m1">
              <img src="../../image/submitImg.png" alt="">
              <p>上传图片</p>
            </div>
          </div>
          <div class="img1">
            <div class="m1">
              <img src="../../image/submitImg.png" alt="">
              <p>上传图片</p>
            </div>
          </div>
          <div class="img1">
            <div class="m1">
              <img src="../../image/submitImg.png" alt="">
              <p>上传图片</p>
            </div>
          </div>
        </div>
        <div  class="inputdiv">
          <div class="inputtxt">
            <p class="i0">资料管理员：</p>
            <p  class="i2"><input type="text" placeholder="请输入"></p>
          </div>
        </div>
        <div  class="inputdiv">
          <div class="inputtxt">
            <p class="i1">联系电话：</p>
            <p  class="i2"><input type="text" placeholder="请输入"></p>
          </div>
        </div>
      </div>
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
                bottomshow:false,
                selected:"",
                txt:"省份",
                showIndex: true,
                activeType: "distribute", // submitdata
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
            tapActive(type) {
                if (this.activeType == type) {
                    return;
                }
                this.activeType = type;// activeType: 成氏分布'distribute', // 提交资料submitdata
                console.log(type)
                this.pageParams.currentPage = 1;
                this.pageList = [];
                if (type == "distribute") {

                } else if (type == "submitdata") {

                }
            },
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
                        this.showIndex = false;
                        this.bottomshow = true;
                        this.selected = txt;
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
                        this.showIndex = false;
                        this.bottomshow = true;
                        this.txt = "市"
                        this.search.province = txt;
                        this.getChild(value);
                        this.temp.city = '-1';
                        this.search.city = '';
                        this.cityArr = [];
                        break
                    case 'city':
                        this.showIndex = false;
                        this.bottomshow = true;
                        this.txt = "县"
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
