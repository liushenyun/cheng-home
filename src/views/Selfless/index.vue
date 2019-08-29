<template>
  <div class="selfless-ctr">
    <p class="self-titp">赞助第六届世界成氏恳亲大会,所有捐赠及金额去向将在赞助公示中向全族人公示。</p>
    <div class="s-input-wrap"><input class="s-input"  placeholder="请输入捐赠人姓名(不填默认为匿名捐赠）" type="text" name="" id=""></div>
    <div class="s-input-wrap"><input class="s-input"  placeholder="请输入捐赠人祖籍" type="text" name="" id=""></div>
    <div class="s-input-wrap"><input class="s-input"  placeholder="请输入捐赠人现居城市" type="text" name="" id=""></div>
    <div class="s-input-wrap"><input class="s-input" maxlength="11"  placeholder="请输入联系电话" type="number" name="" id=""></div>
    <div class="s-input-wrap"><input class="s-input"  placeholder="请输入捐赠金额" type="number" name="" id=""></div>
    <div class="self-btn" @click="selfSubmitA">立即捐赠</div>
  </div>
</template>

<script>
import dateFormat from '../../utils/dateFormat'
// @ is an alias to /src
export default {
  name: 'Selfless',
  data () {
    return {
    }
  },
  components: {},
  methods: {
    selfSubmitA() {
      console.log(12123)
    }
  },
  watch: { },
  mounted () {
    document.title = '无私奉献'
  }
}
</script>

<style lang="scss" scoped>
@import './index'
</style>
