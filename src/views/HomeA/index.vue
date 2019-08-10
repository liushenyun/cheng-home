<template>
  <div class="home">
      <button>home</button>
      <div class="text">HOMEA</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss" scoped>
@import './index'

</style>

