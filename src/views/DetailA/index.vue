<template>
  <div class="DetailA-ctr">
    <div class="DetailA-con">
      <p class="d-title">{{pageData.title}}</p>
      <div class="d-line"></div>
      <p class="d-des">
        <span class="d-des-1">{{pageData.author}}/作者 {{pageData.createTime}}</span>
        <img class="d-des-2" src="../../image/new_readed_icon.png" alt="">
        <span class="d-des-3">{{pageData.watchTime}}</span>
      </p>
      <div class="get-con-wrap" v-html="pageData.content">
      </div>
    </div>
  </div>
</template>

<script>
import dateFormat from '../../utils/dateFormat'
import { beforeRouteLeave } from '@/common/js/mixin.js'
import { newsInfoApiF } from '../../service/requestFun.js'

// @ is an alias to /src
export default {
  name: 'DetailA',
  mixins: [beforeRouteLeave],
  data () {
    return {
      type: null,
      id: null,
      pageData: {
        title: '',
        author: '',
        createTime: '',
        content: '',
        watchTime: 0
      }
    }
  },
  components: {  },
  methods: {
    getAction() {
      this.newsInfoApiFA()
    },
    newsInfoApiFA(){
      newsInfoApiF(this.id).then((result) => {
        let { title, author, createTime, content, watchTime } = result
        this.pageData.title = title
        this.pageData.author = author
        this.pageData.createTime = createTime
        this.pageData.content = content
        this.pageData.watchTime = watchTime || 0
      }).catch(() => {})
    }
  },
  watch: { },
  mounted () {
      debugger
    this.type = this.$route.params.type
    this.id = this.$route.params.id
    this.getAction()
  }
}
</script>

<style lang="scss" scoped>
@import './index'
</style>
