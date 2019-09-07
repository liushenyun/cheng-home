<template>
  <div class="public-welfare-ctr">

    <div class="pw-title">
      <div><img src="../../image/welfar_word_bg_left.png" alt=""></div>
      <span><p>会员条款</p><p>Membership terms</p></span>
      <div><img src="../../image/welfar_word_bg_right.png" alt=""></div>
    </div>

    <div class="pw-word-con">
      <p class="pw-word-s">任何组织和机构通过在本网站提交注册申请，即可成为成氏商城公益基金会（以下简称“成氏商城公益基金会”）注册会员。</p>
      <p class="pw-word-titpe">会员资格</p>
      <p class="pw-word-s">
        会员申请人应当是由具备完全民事权利能力和完全民事行为能力的自然人、法人或其他组织组成的公益机构。 注册时,申请人应当按照注册页面的提示准确填写机构信息，并及时更新会员的资料及联系方式，以使之真实、及时、完整和准确。 如成氏商城公益基金会通过登记的联系方式无法与会员取得联系，导致会员发生任何损失的，应由会员自行承担所有责任。 如有合理理由怀疑会员提供的资料错误、不实、过时或不完整的，成氏商城公益基金会有权向会员发出询问及/或要求改正的通知；如会员在限定时间内未做出合理回应,则成氏商城公益基金会有权直接做出注销或永久冻结会员账户的决定，因此而导致的责任及损失由会员自行承担。
      </p>
      <p class="pw-word-titpe">
        会员账户
      </p>
      <p class="pw-word-s">
        会员使用登陆手机号码（以下简称“账户”）和密码登陆成氏商城公益基金会网站。 会员应对会员的账户和密码的安全，以及对通过会员的账户和密码登陆后实施的行为负责。除非有法律规定或司法裁定，且征得成氏商城公益基金会的同意，否则，账户和密码不得以任何方式转让、赠与或继承。
      </p>
      <p class="pw-word-titpe">
        项目申请
      </p>
      <p class="pw-word-s">
        会员通过在线公益项目申请,提交项目方案,经成氏商城公益基金会项目评审委员会评审通过后，成氏商城公益基金会将与会员签署项目协议，并将根据项目协议的约定，向会员提供资金支持，开展公益活动。 
        <br /> 会员同意，在项目执行过程中，当成氏商城公益基金会认为项目执行的效果、方式等存在问题时，有权在合理期限内书面通知会员后，中止或终止项目的实施。除非会员在收到书面通知后，提供合理解释、改进方案等，经成氏商城公益基金会项目评审委员会复审通过后，方可继续开展项目。否则，由此导致的损失，由会员承担。如会员与成氏商城公益基金会的项目协议中就上述事宜另有约定的，则从其约定。
        <br />  项目实施过程中，因会员违反法律法规的规定，或因故意或过失导致的自身损失，或给第三方造成的损失（除非另有书面约定），均由会员自行承担相关责任。
        <br />  会员在项目实施过程中，向成氏商城公益基金会提供的图片、文字等内容，会员授予成氏商城公益基金会在全球范围内、无限期、不可撤销的免费许可使用权。成氏商城公益基金会有权(全部或部分地) 使用、复制、修订、改写、发布、翻译上述内容或制作其派生作品，并以现在已知或日后开发的任何形式，将上述信息纳入其它作品内。 成氏商城公益基金会有权在项目实施完毕后，在本网站相关页面公布项目的实施情况。 
        <br /> 其他 成氏商城公益基金会有权随时修改本网站的各项规则与条款,并只需公示于本网站相关页面,而无需征得会员事先同意。修改后的条款应于公示、或公示通知指定的时间即时生效。
      </p>

    </div>

  </div>
</template>

<script>
import dateFormat from '../../utils/dateFormat'
// @ is an alias to /src
export default {
  name: 'MemberTerms',
  data () {
    return {
      showShare: false
    }
  },
  components: {  },
  methods: {
    toWelfareIntroduceA() {
      this.$router.push({
        name: 'welfareIntroduce'
      })
    },
    toWelfareInfoA() {
      this.$router.push({
        name: 'welfareInfo'
      })
    },
    toWelfareActionA() {
      this.$router.push({
        name: 'welfareAction'
      })
    },
    toFundingApplyA() {
      this.$router.push({
        name: 'fundingApply'
      })
    }
  },
  watch: { },
  beforeRouteLeave(to, from, next) {
    history.pushState(null, null, location.search.replace(/code/g, 'XX'))
    next()
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
@import './index'
</style>
