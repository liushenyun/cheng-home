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
        <select v-model="temp.town"  class="select" ref="destributeRegion" @change="(e)=>{change(e,'town')}">
          <option value="-1">县/区</option>
          <option v-for="item in townArr" :value="item.name" >{{item.name}}</option>
        </select>
        <select  v-model="temp.village"  class="select" @change="(e)=>{change(e,'village')}" v-if="activeType === 'distribute'">
          <option value="-1">村</option>
<!--          <option >村落</option>-->
          <option v-for="item in villageList" :value="item.id" >{{item.village}}</option>
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

      </div>
      <div class="bottomTxtDiv">
        [注：本数据来源于民间统计数据，如有偏差请与我们联系]
      </div>




      <div class="bottomdiv" v-show="bottomshow">
        <div class="imgTXT">
          <div class="tuwen">
            <p>{{selected}}</p>
            <img src="../../image/chengtitle.png" alt="">
          </div>

          <div  v-show="IndexPeople">【成氏总人口约：{{total}}人,分别分布在：已知省份列表】</div>
          <div v-show="villPeople">【成氏总人口约：{{info.villageNumber}}人】</div>
        </div>
        <div class="indexDiv" v-show="distributeList">
          <div class="colorDiv" >
            <div class="txtone">
              <span class="p1">序号</span>
              <span class="p2">{{txt}}</span> <!--省份-->
              <span class="p3">大约人数</span>
            </div>
          </div>
          <div class="colorDiv" v-for="(item,index) in pageList">
            <div class="txt" :class="{'imgBg':index < 3}" >
              <div class="b1">
                <p>{{index + 1}}</p>
                <!--            <img src="../../image/rank.png">-->
              </div>
              <div class="b2">{{item.location}}</div>
              <div class="b3">{{item.total}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="introduce" v-show="showIntroduce">  <!-- 村祠介绍Div-->
        <div class="indexD">
          <div class="introduceColor"></div>
          <div class="introduceTxt">
            村祠介绍：
            <p>{{info.villageAncestralIntroduce}}</p>
            <div class="introduceImg">
              <ul>
                <li v-for="item in info.imageEntities">
                  <img :src="item.url" alt="">
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="nodata" v-show="show">
        暂无数据
      </div>
    </div>

    <div class="submitDiv"  v-if="activeType === 'submitdata'">  <!--提交本村资料div-->
      <div class="thankText">·首先感谢提供相关资料，请确保资料一定的准确性·</div>
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
        <select v-model="temp.town" class="select" ref="selectRegion">
          <option value="-1">县/区</option>
          <option v-for="item in townArr" :value="item.name">{{item.name}}</option>
        </select>
        <div  class="inputdiv">
          <div class="inputtxt">
            <p class="i1">村名：</p>
            <p  class="i2"><input type="text" placeholder="请输入" class="villName" v-model="villName"></p>
          </div>
        </div>
        <div  class="inputdiv">
          <div class="inputtxt">
            <p class="i1">本村人数：</p>
            <p  class="i2"><input type="number" placeholder="请输入" class="villNum"  v-model="villNum"></p>
          </div>
        </div>
        <div  class="textdiv">
          <div class="texttxt">
            <p class="t1">本村简介：</p>
            <p class="t2"><textarea placeholder="请输入" name="" class="thisIntroduce" v-model="thisIntroduce"></textarea></p>
          </div>
        </div>
        <div  class="textdiv">
          <div class="texttxt">
            <p class="t1">村祠介绍：</p>
            <p class="t2"><textarea placeholder="请输入" name="" class="villIntroduce" v-model="villIntroduce"></textarea></p>
          </div>
        </div>

<!--        <div  class="imgdiv">-->
<!--          <div class="img1" v-for="(item ,index) in fileList">-->
<!--            <div class="m1" v-if="item.src === null || item.src === ''">-->
<!--              <img src="../../image/submitImg.png" alt="">-->
<!--              <p>上传图片</p>-->
<!--            </div>-->
<!--            <img class="img-show" :src="item.src" alt="">-->
<!--            <input type="file" name="myfile" @change="(e)=>{onFileChange(e,index)}"  class="uploadImg"/>-->

<!--          </div >-->
<!--        </div>-->
        <div class="re-img-wrap">
          <ul>
            <li class="" v-for="(item, index) in imgList" :key="index">
              <img class="img-show" :src="item.fileSrc" alt="">
            </li>
            <li class="up-load-btn">
              <input type="file" name="myfile" @change="(e)=>{onFileChange(e,index)}" />
              <span>
              <img src="../../image/submitImg.png" alt="">
              <p>上传图片</p>
            </span>
            </li>
          </ul>
        </div>



        <div  class="inputdiv">
          <div class="inputtxt">
            <p class="i0">资料管理员：</p>
            <p  class="i2"><input type="text" placeholder="请输入" v-model="administrator"></p>
          </div>
        </div>
        <div  class="inputdiv">
          <div class="inputtxt">
            <p class="i1">联系电话：</p>
            <p  class="i2"><input type="text" placeholder="请输入" v-model="phone"></p>
          </div>
        </div>
        <div class="submitButton">
          <div class="submitText" @click="submit">提交</div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>

    import { beforeRouteLeave } from '@/common/js/mixin.js'
    import { levelListApiF,villageApiF,statisticsApiF,submitApiF } from "@/service/requestFun"; //三级联动省市区  跟乡村村落分布 跟查看成氏分布 跟提交资料
    import {dateFormat} from "../../utils/dateFormat";
    import Validate from '../../service/Validate';//校验js

    export default {
        name: 'DetailMain',
        mixins: [beforeRouteLeave],
        data () {
            return {
                fileList:[],
                bottomshow:false,
                selected:"",
                txt:"省份",
                showIndex: true,
                showIntroduce:false,//村祠显示  其他的分布数据隐藏
                distributeList:true,
                activeType: "distribute", // submitdata
                show: true,
                villPeople:false,
                IndexPeople:true,
                temp:{
                    country: "-1",
                    province: "-1",
                    city: "-1",
                    town:"-1",
                    village:"-1"
                },
                search : {
                    country: "",
                    province: "",
                    city: "",
                    region:"",
                    village:""
                },
                countryArr:[],
                provinceArr:[],
                cityArr:[],//市
                townArr:[],//城镇
                villageArr:[],//村落
                showShare: false, //以下是loadMore方法
                pageList: [
                    {
                        sort:1,
                        location:'',
                        total:''
                    }
                ],
                villageList:[
                    {id:'',village:''}
                  ],
                total:'',
                pageParams: {
                    pageSize: 20,
                    currentPage: 1
                },
                info: {
                    villageAncestralIntroduce:'',
                    villageNumber:'',
                    imageEntities:[]
                },
                //获取提交资料的input框值 v-model
                villName:"",
                villNum:"",
                thisIntroduce:"",
                villIntroduce:"",
                administrator:"",
                phone:"",
                imgList: [],
                fileSrc:"",
                fileSrc2:"",
                fileSrc3:"",
            }
        },
        components: {  },
        methods: {
            tapActive(type) {
                if (this.activeType == type) {
                    return;
                }
                this.activeType = type;// activeType: 成氏分布'distribute', // 提交资料submitdata
                this.pageParams.currentPage = 1;
                this.pageList = [];
                if (type == "distribute") {

                } else if (type == "submitdata") {

                }
            },
            initDistributionList(pageAble) {
                // let page = this.pageParams;
                // let query = this.search;
                // for(let x in page){
                //     query[x] = page[x];
                // }
                let query = {
                    country:this.search.country,
                    province:this.search.province,
                    city:this.search.city,
                    region:this.search.region,
                    village:this.search.village
                }
                let self = this;
                statisticsApiF(query).then(result => {
                    console.log("statisticsApiF")
                    console.log(result);
                    let { totalPage, currentPage, data } = result
                    self.total = result.total; //成氏分布总人口数量total
                    let list = result.list;
                    let pageList = [];
                    if(list.length > 0){
                      for(let x in list){
                          let item = list[x];
                          if(item){
                              pageList[x] = item;
                          }
                      }
                    }
                    this.pageList = pageList;
                    if(result.info){
                        this.info = result.info;
                    }
                    if(this.pageList !== ''){
                        this.show = false;
                    }else{
                        this.show = true;
                    }
                }).catch();
            },
            change (e,type){
              let target = e.target;
              let txt = target.options[target.options.selectedIndex].text; //获取每次选中的国省市的名称
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
                        this.townArr = [];//清空数组
                        this.villageList = [];//清空数组
                        this.temp.town = '-1';
                        this.temp.village = '-1';
                        this.showIntroduce = false;
                        this.distributeList = true;
                        this.initDistributionList();
                        this.villPeople = false;
                        this.IndexPeople = true
                        break
                    case 'province':
                        this.showIndex = false;
                        this.bottomshow = true;
                        this.selected = txt;
                        this.txt = "市"
                        this.search.province = txt;
                        this.getChild(value);
                        this.temp.city = '-1';
                        this.search.city = '';
                        this.search.region = '';
                        this.search.village = '';
                        this.temp.town = '-1';
                        this.temp.village = '-1';
                        this.townArr = [];//清空数组
                        this.villageList = '';
                        this.cityArr = [];
                        this.showIntroduce = false;
                        this.distributeList = true;
                        this.initDistributionList();
                        this.villPeople = false;
                        this.IndexPeople = true
                        break
                    case 'city':
                        this.selected = txt;
                        this.getChild(value);
                        this.showIndex = false;
                        this.bottomshow = true;
                        this.txt = "县/区"
                        this.showIntroduce = false;
                        this.distributeList = true;
                        this.search.city = txt;
                        this.temp.village = '-1';
                        this.temp.town = '-1';
                        this.search.village = '';
                        this.villageList = [];//清空数组
                        this.search.region = '';
                        this.townArr = [];//清空数组
                        this.initDistributionList();
                        this.villPeople = false;
                        this.IndexPeople = true
                        break
                    case 'town': //新增县 区
                        this.selected = txt;
                        this.search.region = txt;
                        this.showIntroduce = false;
                        this.distributeList = true;
                        this.txt = "村"
                        this.temp.village = '-1';
                        this.pageList = [];//清空数据  插入最新的包含村落的数据
                        this.initVillageList();
                        this.villPeople = false;
                        this.IndexPeople = true
                        break
                    case 'village':
                        // this.getChild(value);
                        this.selected = txt;
                        this.search.village = txt;
                        this.showIntroduce = true;
                        this.distributeList = false;
                        this.initDistributionList()
                        this.info = this.info //村祠介绍
                        this.villPeople = true;
                        this.IndexPeople = false
                        break
                }
                this.pageParams = {
                    pageSize: 20,
                    currentPage: 1
                }

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
                        if(level == 4){
                            t.townArr = data;
                        }
                        // if(level == 5){
                        //     t.villageArr = data;
                        // }
                    }
                })
            },
            initVillageList (txtName){  //查看村落
                let query = {
                    country:this.search.country,
                    province:this.search.province,
                    city:this.search.city,
                    region:this.$refs.destributeRegion.value
                }
                villageApiF(query).then(result => {
                    if(result != ''){
                        this.total = this.total; //村落总人口数量 相加
                    }else{
                        this.total = '';
                    }
                    console.log("villageA")
                    console.log(result);
                    let t = this;
                    let pageList = [];
                    let villageList = [];
                    for(let x in result){
                        let total = result[x].villageNumber;

                        let location = result[x].village;
                        let id = result[x].id;
                        let d = {total:total,location:location};
                        let village = {id:id,village:location,total:total}
                        pageList.push(d);
                        villageList.push(village);
                    }
                    this.pageList = pageList;
                    this.villageList = villageList;
                })
            },
            submit(){

                let vArr = [
                    ['villName', this.villName, '村名', 'empty'],
                    ['villNum', this.villNum, '本村人数', 'empty'],
                    ['thisIntroduce', this.thisIntroduce, '本村简介', 'empty'],
                    ['villIntroduce', this.villIntroduce, '村祠介绍', 'empty'],
                    ['administrator', this.administrator, '资料管理员', 'empty'],
                    ['phone', this.phone, '手机', 'empty|phone']
                ]
                let _Validated = Validate(vArr);
                if (!_Validated) { return };     //表单校验

                let formData = new FormData();


                // let _obj = Object.assign({}, this.pageParams)
                // let _imgList = this.imgList
                // _obj.id = this.crowdfundingId
                // _obj.mediaLength = _imgList.length
                // debugger
                // _imgList.forEach((v, i) => {
                //     _obj[`mediaFile[${i}]`] = v.files
                //     _obj[`mediaType[${i}]`] = 1
                // })

                let imageFiles = [];
                for(let x in this.imgList){
                    let files = this.imgList[x];
                    if(files.files != ''){
                       imageFiles.push(files.files);
                    }
                }
                for(let x in imageFiles){
                    let i = Number(x) + 1;
                    formData.append("imageFile["+i+"]",imageFiles[x]);
                }

                formData.append("country",this.search.country);
                formData.append("province",this.search.province);
                formData.append("city",this.search.city);
                formData.append("region",this.$refs.selectRegion.value);//区
                formData.append("village",this.villName);
                formData.append("villageNumber",this.villNum);
                formData.append("villageIntroduce",this.thisIntroduce);
                formData.append("villageAncestralIntroduce",this.villIntroduce);
                formData.append("manager",this.administrator);
                formData.append("telephone",this.phone);
                formData.append("imageLength",imageFiles.length);
                submitApiF(formData).then(result => {
                    this.$toast('提交资料成功')
                    setTimeout(() => {
                        // location.href = "ChengDistribution"
                    }, 1500);
                    // this.$router.push({
                    //     path: `/meetSummary`
                    // });
                }).catch();
            },
            // onFileChange(e,i) {  //上传图片
            //     let files = e.target.files[0];
            //     this.fileList[i].file = files;
            //     this.fileList[i].src = URL.createObjectURL(files);  //图片地址 blob
            // },
            onFileChange(e) {
                let files = e.target.files[0];
                let _oFReader = new FileReader()
                _oFReader.readAsDataURL(files)
                _oFReader.onload = ev => {
                    this.imgList.push({
                        files: files,
                        fileSrc: ev.target.result
                    })
                }
            }
        },
        beforeRouteLeave(to, from, next) {
            history.pushState(null, null, location.search.replace(/code/g, 'XX'))
            next()
        },
        mounted () {
            this.initDistributionList();
            this.getChild(0);
        }
    }
</script>

<style lang="scss" scoped>
@import './index';
</style>
