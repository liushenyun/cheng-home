<template>
  <div class="public-welfare-ctr">

    <div class="pw-title">
      <div><img src="../../image/welfar_word_bg_left.png" alt=""></div>
      <span><p>成氏商城公益基金会</p><p>CHENG MALL FOUNDATION</p></span>
      <div><img src="../../image/welfar_word_bg_right.png" alt=""></div>
    </div>
    
    <div class="pw-word-con">
      <p class="pw-word-titpe">一.名称</p>
      <p class="pw-word-s">成氏商城公益基金会(英文名“CHENG MALL FO UNDATION)</p>
      <p class="pw-word-titpe">二.主旨</p>
      <p class="pw-word-s">
        成氏商城公益基金会以“关爱弱势群体，奉献无私爱心”为宗旨，搭建专业透明的成氏公益平台，通过对孤寡老人、贫困儿童、残障人士和社会
      </p>
      <p class="pw-word-titpe">三.简介</p>
      <p class="pw-word-s">
        成氏商城公益基金会（英文名“ChengMall Foundation”）现处于筹备阶段，由于基金会成立需要自有资金200万，故暂未进行民政注册,未来条件达成时将向民政部申请成立,由国家民政部主管的全国性非公募基金会。 成氏商城公益基金会（英文名“ChengMall Foundation”）由成氏宗亲联谊总会联合深圳宗亲会、成氏文化公司和成氏商城发起，原始基金为10万元人民币。成氏商城公益基金会将通过集中公益资源、提升公益项目效率和专业性，促进成氏公益事业发展，为和谐成氏做贡献。 为更好地履行成氏商城公益基金会的社会责任，建立长期稳定的公益资金投入机制，积极应对突发的自然灾害和扩大资助的公益范围，成氏商城承诺每年会将收入的一定比例捐赠给成氏商城公益基金会，此捐款为成氏商城公益基金会的主要资金来源。 成氏商城公益基金会以“关爱弱势群体,奉献无私爱心”为宗旨,搭建专业透明的公益平台，通过对孤寡老人、贫困儿童、残障人士和社会发展等四个领域的慈善救助及捐助，帮助他们有机会享受到公平的养老、教育、医疗、安全和社会关怀等权利，致力于人的生命质量的整体提升，传递中华成氏的感恩文化和奉献精神。
        <br>
        <b class="blod">发起单位：</b><br>
        <b>成氏宗亲联谊总会</b><br>
        <b>深圳成氏宗亲会</b><br>
        <b>成氏文化传播（深圳）有限公司</b><br>
        <b>成氏商城（深圳）有限公司</b><br>
      </p>

      <p class="pw-word-titpe">四.组织架构</p>
      <p class="pw-word-s">
        成氏商城公益基金会的组织结构由理事会和秘书处两个部分组成。 理事会承担决策职能，通过由理事长召集并主持的定期理事会会议，对基金会战略规划、年度计划、预算等重大事项进行审议和审批。理事会下设项目评审委员会，项目审核委员会由各地成氏宗亲（联谊）会负责人组成，对理事会汇报，负责基金会项目的审批和质量监控。 秘书处为基金会的执行机构，负责人为秘书长，由理事会从理事中选举产生，负责秘书处日常工作。秘书处下设行政、项目、财务部门。基金会现有工作人员20人。
        <br><b> 理事长简介：成文全</b><br>
        <b> 秘书长简介：成志</b><br>
      </p>

    </div>

  </div>
</template>

<script>
import dateFormat from '../../utils/dateFormat'
// @ is an alias to /src
export default {
  name: 'PublicWelfare',
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
