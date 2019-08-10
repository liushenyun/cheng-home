<template>
  <div class="home">
      <button @click="toNextA">454546546</button>
      <div class="text">dklsdl</div>
      <mt-button type="default">default</mt-button>
        <mt-button type="primary">primary</mt-button>
        <mt-button type="danger">danger</mt-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
      toNextA() {
          this.$router.push({
              name: 'HomeA'
          })
      }
  },
  mounted() {
      this.$store.dispatch('showLoading', true)
  }
}
</script>

<style lang="scss" scoped>
@import './index'

</style>

