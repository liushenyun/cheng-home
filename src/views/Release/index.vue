<template>
  <div class="release-ctr">
    <div class="release-con-wrap">
      <textarea v-model="content" name="" id="" cols="30" rows="10" placeholder="添加内容标题..."></textarea>
      <div class="re-img-wrap">
        <ul>
          <li class="" v-for="(item, index) in imgList" :key="index">
            <img class="img-show" :src="item.fileSrc" alt="">
          </li>
          <li class="up-load-btn">
            <input type="file" name="myfile" @change="onFileChange($event)" />
            <span>
              <img src="../../image/upload_ic.png" alt="">
              <p>上传图片</p>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="release-btn" @click="toReleaseA">发表</div>
  </div>
</template>

<script>
import { beforeRouteLeave } from '@/common/js/mixin.js'
import dateFormat from '../../utils/dateFormat'
import { broadcastUpdateApiF } from "@/service/requestFun"
// @ is an alias to /src
export default {
  name: 'Release',
  mixins: [beforeRouteLeave],
  data () {
    return {
      activityId: 1,
      content: '',
      imgList: []
    }
  },
  components: {},
  methods: {
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
    },
    broadcastUpdateApiFA() {
      let _obj = {}
      let _imgList = this.imgList
      _obj.content = this.content
      _obj.activityId = this.activityId
      _obj.mediaLength = _imgList.length
      _imgList.forEach((v, i) => {
        _obj[`mediaFile[${i}]`] = v.files
        _obj[`mediaType[${i}]`] = 1
        
      });
      broadcastUpdateApiF(_obj).then((result) => {
        this.$toast('发布成功')
        setTimeout(() => {
          this.$router.go(-1)
        }, 1500);
      }).catch(() => {})
    },
    toReleaseA() {
      this.broadcastUpdateApiFA()
    }
  },
  watch: { },
  beforeRouteLeave(to, from, next) {
    history.pushState(null, null, location.search.replace(/code/g, 'XX'))
    next()
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
@import './index'
</style>
