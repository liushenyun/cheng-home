<template>
  <div class="sponsor-ctr">
    <div class="spo-tip">
      <span>·以下是本次大会无私奉献者·</span>
    </div>
    <div class="spo-list-outer">
        <dl v-for="(item, index) in pageList" :key="index">
          <dt>{{item.date}}</dt>
          <dd v-for="(subItem, subIndex) in item.list" :key="subIndex">
            <img :src="subItem.headImage" alt="">
            <div class="spo-con">
              <p class="spo-name"><span>{{subItem.name}}</span><span>({{subItem.location}})</span></p>
              <p class="spo-account">{{subItem.content}}</p>
            </div>
          </dd>
        </dl>
    </div>
  </div>
</template>

<script>
import dateFormat from '../../utils/dateFormat'
import { sponsorListApiF } from '@/service/requestFun.js'
// @ is an alias to /src
export default {
  name: 'Sponsor',
  data () {
    return {
      pageList: []
    }
  },
  components: {  },
  methods: {
  },
  watch: { },
  beforeRouteLeave(to, from, next) {
    history.pushState(null, null, location.search.replace(/code/g, 'XX'))
    next()
  },
  mounted () {
    sponsorListApiF().then((result) => {
      this.pageList = result
    }).catch(() => {

    })
  }
}
</script>

<style lang="scss" scoped>
@import './index'
</style>
