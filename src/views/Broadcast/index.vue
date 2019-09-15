<template>
  <div class="Broadcast-ctr">
    <ul>
      <li v-for="(item, index) in pageList" :key="index">
        <p class="b_time">{{item.date}}</p>

        <div class="b_con" v-for="(subItem, subIndex) in item.list" :key="subIndex">
          <div class="b_l">
            <img :src="subItem.headimage" alt="">
          </div>
          <div class="b_r">
            <p class="b_r_name">{{subItem.nickName}}</p>
            <p class="b_r_title">{{subItem.content}}</p>
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
import dateFormat from '../../utils/dateFormat'
import { beforeRouteLeave } from '@/common/js/mixin.js'
import { broadcastListApiF } from '../../service/requestFun.js'
import { jsConfigApi } from '../../service/apiUrl'
import wechat from '../../common/js/wechat'
// @ is an alias to /src
export default {
  name: 'Broadcast',
  mixins: [beforeRouteLeave],
  data () {
    return {
      showShare: false,
      pageList: []
    }
  },
  components: {  },
  methods: {
    broadcastListApiFA() {
      broadcastListApiF(1).then((result) => {
        this.pageList = result
      }).catch(() => {})
    },
    topreviewImageA(current, urls) {
      let _self = this
      let _current = current.split('?')[0]
      let _urls = [] 
      urls.forEach(k => {
        _urls.push(k.url.split('?')[0])
      });
      wechat.config(wechat.properties.interface.previewImage, jsConfigApi(), function(r) {
        wx.previewImage({
          current: _current, // 当前显示图片的http链接
          urls: _urls // 需要预览的图片http链接列表
        })
      })
    }
  },
  watch: { },
  mounted () {
    this.broadcastListApiFA()
  }
}
</script>

<style lang="scss" scoped>
@import './index'
</style>
