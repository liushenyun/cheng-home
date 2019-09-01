<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <show-scan></show-scan>
    <pub-loading></pub-loading>
    <transition name='fade' mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>


<script>
import PubLoading from "./components/Loading"
import { userIsloginApiF, loginApiF } from '@/service/requestFun'
import puGetSearch from '@/utils/puGetSearch'
import { setToken } from '@/common/js/ut'
export default {
  name: 'app',
  components: {
    PubLoading
  },
  methods: {
    userIsloginApiFA(fun) {
      userIsloginApiF({}, fun).then((result) => {
        let { subscribe } = result
        this.$store.dispatch('showScan', subscribe)
      }).catch(() => {
      });
    }
  },
  mounted() {
    let _search = puGetSearch()
    if (_search.code) {
      loginApiF({
        code: _search.code,
        state: 1
      }).then((result) => {
        let { subscribe, token } = result
        setToken(token)
        this.$store.dispatch('showScan', subscribe)
      }).catch((err) => {
        
      });
    } else {
      // this.userIsloginApiFA(this.userIsloginApiFA.bind(this))
    }
    
  }
}
</script>

<style  lang="scss">
@import './common/css/reset';
@import './common/css/animation';
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
