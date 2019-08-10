<template>
  <transition name="fade">
    <div id="loading" v-if="isLoading">
      <div class="box">
        <img src="./loaders/circles.svg">
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'loading',
  computed: {
    ...mapGetters(['isLoading'])
  }
}
</script>

<style lang="scss">
@import "../common/css/rem";
@import "../common/css/mixin";
#loading{
  @include over;
  @include flex(center, center);
  background-color: rgba(255, 255, 255, 0.5);
  .box{
    height: rem(120);
    width: rem(120);
  }
}
</style>