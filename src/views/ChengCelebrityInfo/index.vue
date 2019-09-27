<template>
  <div class="top">
    <div class="indexDiv">
      <div class="colorDiv"  >
        <div class="txt">
          {{title}}
        </div>
      </div>
      <div class="lineDiv"></div>
      <div class="txtPicture">
        <div class="authurTxt">
          <span class="leftTxt">{{author}} / {{time}}</span>
          <span class="rightTxt" style="display: flex"><img src="../../image/eyes.png" alt="">{{watchTime}}</span>
        </div>
        <div class="picturetext">
<!--           <img src="../../image/activitedListBackground.jpg">-->
          <div  v-html="content"></div>
<!--           <div class="bottomTxt">-->
<!--           </div>-->
        </div>

      </div>
    </div>
  </div>

</template>

<script>

import { beforeRouteLeave } from '@/common/js/mixin.js'
import { celebrityInfoApiF } from "@/service/requestFun"; //成氏族谱详情页
import {dateFormat} from "../../utils/dateFormat";

export default {
  name: 'DetailMain',
  mixins: [beforeRouteLeave],
  data () {
      return {
          "createTime": "",
          "time": "",
          "modifyTime": "",
          "version": null,
          "title": "",
          "author": "",
          "content": "",
          "type": "",
          "typeName": "",
          "imgDir": "",
          "watchTime": ""
      }
  },
  components: {  },
  methods: {
      initCelebrityInfo() {
          let router = this.$route;
          let Id = router.query.celebrityId; //拿到地址栏参数id
          celebrityInfoApiF(Id).then(result => {
              this.author = result.author
              this.time = result.time
              this.title = result.title
              this.watchTime = result.watchTime
              this.content = result.content
              this.author = result.author

          }).catch();
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
      this.initCelebrityInfo();
  }
}
</script>

<style lang="scss" scoped>
@import './index';
</style>
