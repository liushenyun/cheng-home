<template>
  <div class="Broadcast-ctr">
    <ul>
      <li v-for="(item, index) in pageList" :key="index">
        <p class="b_time">{{item.date}}</p>

        <div class="b_con" v-for="(subItem, subIndex) in item.list" :key="subIndex">
          <div class="b_l">
            <img :src="subItem.headimage" alt />
          </div>
          <div class="b_r">
            <p class="b_r_name">{{subItem.nickName}}</p>
            {{subItem.content.length}}
            <p class="b_r_title" v-bind:class="{ active: (isActive[index][subIndex] == 0 )}" v-html="subItem.content"></p>
            <div class="unfold" @click="showTotalIntro(index,subIndex)" v-if="showExchangeButton">
              <p class="b_r_text" v-if="exchangeButton[index][subIndex] == 0  && subItem.content.length > 50">展开</p>
              <p class="b_r_text" v-if="exchangeButton[index][subIndex] == 1  && subItem.content.length > 50">收起</p>
            </div>
            
            <div class="b_r_imgs">
              <img @click="topreviewImageA(sItem.url, subItem.medias)" v-for="(sItem, sIndex) in subItem.medias" :key="sIndex" :src="sItem.url" alt="" />
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import dateFormat from "../../utils/dateFormat";
import { beforeRouteLeave } from "@/common/js/mixin.js";
import { broadcastListApiF } from "../../service/requestFun.js";
import { jsConfigApi } from "../../service/apiUrl";
import wechat from "../../common/js/wechat";
// @ is an alias to /src
export default {
  name: "Broadcast",
  mixins: [beforeRouteLeave],
  data() {
    return {
      showShare: false,
      pageList: [],
      // 是否展示所有文本内容
      showTotal: true,
      // 显示展开还是收起
      exchangeButton: [[0,1]],
      // 是否显示展开收起按钮
      showExchangeButton: true,
      isActive: [[0,1]]
    };
  },
  components: {},
  methods: {
    broadcastListApiFA() {
      broadcastListApiF(1)
        .then(result => {
          // console.log(result);
          // console.log("打印")
          this.pageList = result;
          let activeArr = [];
          let exchangeArr = [];
          result.map(e=>{
            let sub = e.list;
            let subArr = [];
            for(let y in sub){
                subArr[y] = 0;
            };
            activeArr.push(subArr);
          });
          this.isActive = activeArr;
          this.exchangeButton = activeArr;
        })
        .catch(() => {});
    },
    topreviewImageA(current, urls) {

      let _self = this;
      let _current = current.split("?")[0];
      let _urls = [];

      urls.forEach(k => {
        _urls.push(k.url.split("?")[0]);
      });
      wechat.config(
        wechat.properties.interface.previewImage,
        jsConfigApi(),
        function(r) {
          wx.previewImage({
            current: _current, // 当前显示图片的http链接
            urls: _urls // 需要预览的图片http链接列表
          });
        }
      );
    },
    showTotalIntro(index,subIndex) {
      
      let arr = this.exchangeButton;
      let currentText = this.exchangeButton[index][subIndex];
      if(currentText == 0){
        arr[index][subIndex] = 1;
      }else{
        arr[index][subIndex] = 0;
      }
      this.$set(this.exchangeButton,index,arr[index]);
      this.$set(this.isActive,index,arr[index]);
    }
  },
  watch: {},
  mounted() {
    this.broadcastListApiFA();
  }
};
</script>

<style lang="scss" scoped>
@import "./index";
</style>
