<template>
  <div class="public-welfare-ctr">

    <div class="pw-title">
      <div><img src="../../image/welfar_word_bg_left.png" alt=""></div>
      <span><p>救助规范</p><p>Rescue specification</p></span>
      <div><img src="../../image/welfar_word_bg_right.png" alt=""></div>
    </div>
    
    <div class="pw-word-con">
      <p class="pw-word-titpe">
        第一章：总则
      </p>
      <p class="pw-word-s">
        （一）本基金会的名称是成氏商城公益基金会（英文名“Cheng Mall Foundation”）
        <br />（二）本基金会属于公募基金会。本基金会面向公众募捐的地域范围是：全球成氏族人。
        <br />（三）本基金会的原则：依据中华人民共和国宪法和国家法律、法规及各项国家政策，以及社会道德风尚，加强与海内外成氏宗亲和热心人士的合作，募集基金，专项爱心助老、助学、助残等，建设和谐社会。
        <br />（四）基金会的原始基金数额为人民币10万元，主要来源于成氏商城的捐赠。
      </p>
      <p class="pw-word-titpe">
        第二章：业务范围
      </p>
      <p class="pw-word-titpe">
        &nbsp;（一）基金募集方式
      </p>
      <p class="pw-word-s">
        向成氏家人和社会爱心人士募捐，募捐活动必须由成氏当地宗亲（联谊）会组织发起，不接受个人募捐。
      </p>
      <p class="pw-word-titpe">
        &nbsp;（二）基金管理方式
      </p>
      <p class="pw-word-s">
        接受的捐助款物受总会、当地宗亲（联谊）会、捐赠者监督，统一账户、统一地址接受捐助，所捐财物必须公开透明运作。
      </p>
      <p class="pw-word-titpe">
        &nbsp;（三）基金使用条件
      </p>
      <p class="pw-word-s">
        1、受捐者达到国家规定的贫困标准。 
        <br /> 2、受捐者为疾病重症者、事故重症者（有国家及相关单位赔偿除外）、事故死亡者（有国家及相关单位赔偿除外）、国家标准的老人、孤儿等社会弱势群体。
      </p>
      <p class="pw-word-titpe">
        &nbsp;（四）申请受捐方式
      </p>
      <p class="pw-word-s">
        1、达到受捐条件者向当地宗亲（联谊）会提出申请，当地宗亲（联谊）会向总会汇报后按国家有关规定组织募捐。 
        <br /> 2、募捐前当地宗亲（联谊）会联合受捐者发出《倡议书》，募捐完毕发出募捐活动汇报并联合受捐者发《感谢信》。
      </p>
      <p class="pw-word-titpe">
        &nbsp;（五）责任管理制度
      </p>
      <p class="pw-word-s">
        1、募捐活动必须合法，违者所造成的任何非法责任由当地宗亲（联谊）会及受捐者负责，受捐者为第一责任人，当地宗亲（联谊）会会长、秘书长为第二责任人。
        <br /> 2、未尽事宜按总会及当地宗亲（联谊）会决策执行。
      </p>

    </div>

  </div>
</template>

<script>
import dateFormat from '../../utils/dateFormat'
// @ is an alias to /src
export default {
  name: 'HelpSpecification',
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
