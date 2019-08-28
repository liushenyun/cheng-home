<template>
  <div class="login-ctr">
  </div>
</template>

<script>
import { activityApplyApiF, listParentApiF } from "@/service/requestFun.js"

// @ is an alias to /src
export default {
  name: 'Login',
  data () {
    return {
    }
  },
  components: { LinkageAddr },
  methods: {
    listParentApiFA(fun) {
      listParentApiF(2, fun).then((result) => {
        console.log(result)
      }).catch((err) => {
        
      });
    }
  },
  
  watch: { },
  mounted () {
    this.listParentApiFA(this.listParentApiFA.bind(this))
  }
}
</script>

<style lang="scss" scoped>
@import './index'
</style>
