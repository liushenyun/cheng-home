<template>
  <div class="Broadcast-ctr">
    <ul>
      <li v-for="(item, index) in 10" :key="index">
        <p class="b_time">2019/08/20</p>
        <div class="b_con">
          <div class="b_l">
            <img src="../../image/we_icon.png" alt="">
          </div>
          <div class="b_r">
            <p class="b_r_name">成家尧</p>
            <p class="b_r_title">第六届世界成氏恳亲大会实时播报第六届世界成氏恳亲大会第六届世界成氏恳亲大会实时播报实时播报</p>
            <div class="b_r_imgs">
              <img src="../../image/niu_1.png" alt="" />
              <img src="../../image/niu_1.png" alt="" />
              <img src="../../image/niu_1.png" alt="" />
              <img src="../../image/niu_1.png" alt="" />
            </div>
          </div>
        </div>
        
      </li>

      <li>
        <div class="b_l">
          <img src="../../image/we_icon.png" alt="">
        </div>
        <div class="b_r">
          <p class="b_r_name">成家尧</p>
          <p class="b_r_title">第六届世界成氏恳亲大会实时播报第六届世界成氏恳亲大会第六届世界成氏恳亲大会实时播报实时播报</p>
          <div class="b_r_imgs">
            <img src="../../image/niu_1.png" alt="" />
            <img src="../../image/niu_1.png" alt="" />
            <img src="../../image/niu_1.png" alt="" />
            <img src="../../image/niu_1.png" alt="" />
          </div>
        </div>
      </li>

    </ul>
  </div>
</template>

<script>
import dateFormat from '../../utils/dateFormat'
import { beforeRouteLeave } from '@/common/js/mixin.js'
// @ is an alias to /src
export default {
  name: 'Broadcast',
  mixins: [beforeRouteLeave],
  data () {
    return {
      showShare: false
    }
  },
  components: {  },
  methods: {
    
  },
  watch: { },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
@import './index'
</style>
