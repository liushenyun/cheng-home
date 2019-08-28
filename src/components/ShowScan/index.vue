<template>
    <div class="show-code" v-if="!isSubscribe">
        <div class="show-code-wrap">
            <!-- <p>请先关注公众号，再进行抽奖</p> -->
            <img src="../../image/scan_er.png" alt="">
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ShowScan',
  computed: {
    ...mapGetters(['isSubscribe'])
  },
  props: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "../../common/css/const.scss";
@import "../../common/css/rem.scss";
.show-code {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 100;
    background: rgba(0, 0, 0, .7);
    .show-code-wrap {
      display: inline-block;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      p {
        height: rem(60);
        line-height: rem(60);
        color: #FFF;
        font-size: rem(30);
        white-space: nowrap;
      }
      img {
        width: rem(502);
        height: rem(535);
      }
    }
    
  }
</style>
