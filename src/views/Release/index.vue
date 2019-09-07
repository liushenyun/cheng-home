<template>
  <div class="release-ctr">
    <div class="release-con-wrap">
      <textarea name="" id="" cols="30" rows="10" placeholder="添加内容标题..."></textarea>
      <div class="re-img-wrap">
        <ul>
          <li class=""></li>
          <li class=""></li>
          <li class=""></li>
          <li class="up-load-btn">
            <input type="file" name="myfile" accept=".png, .jpg" @change="onFileChange($event)" />
            <span>
              <img src="../../image/upload_ic.png" alt="">
              <p>上传图片</p>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="release-btn">发表</div>
  </div>
</template>

<script>
import dateFormat from '../../utils/dateFormat'
// @ is an alias to /src
export default {
  name: 'Release',
  data () {
    return {
      showShare: false
    }
  },
  components: {  },
  methods: {
    onFileChange(e) {
      let fileName = e.target.files[0].name;
      console.log(fileName)
    },
    backHomeA() {
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
  }
}
</script>

<style lang="scss" scoped>
@import './index'
</style>
