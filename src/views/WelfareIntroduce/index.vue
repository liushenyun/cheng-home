<template>
  <div class="public-welfare-ctr">

    <div class="pw-title">
      <div><img src="../../image/welfar_word_bg_left.png" alt=""></div>
      <span><p>成氏商城公益基金会</p><p>CHENG MALL FOUNDATION</p></span>
      <div><img src="../../image/welfar_word_bg_right.png" alt=""></div>
    </div>

    <div class="pw-btns-wrap">
      <div class="btns-l" @click="toMemberTermsA">
        <span>
          <p>会员条款 》</p>
          <p>Membership terms</p>
        </span>
      </div>
      <div class="btns-r" @click="toHelpSpecificationA">
        <span>
          <p>救助规范 》</p>
          <p>Help specification</p>
        </span>
      </div>
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
      <p class="pw-word-titpe">五.联系我们</p>
      <p class="pw-word-s">
        地址：广东省深圳市南山区西丽街道聚创金谷创意园A栋808室
        <br><b>官网：www.chengmall.cn</b><br>
        <b>邮箱：gongyi@chengmall.cn</b><br>
      </p>
      <p class="pw-word-titpe">六.法律声明</p>
      <p class="pw-word-s">
        1、本网站呈现的任何内容,包括但不限于商标、设计、文字、图片、视频和任何其他信息，未经特殊说明，其著作权均归属成氏商城公益基金会或成氏商城（深圳）有限公司所有。 <br />
        2、本网站包含部分由其他组织、团体或商业机构提供的文字、图片、视频等内容，这些内容属于相应的提供者，本网站摘录或转载这些内容时均已注明来源。<br />
        3、任何人均不得将本网站内的任何内容用于商业目的，否则成氏商城公益基金会（英文名“Cheng Mall Foundation”）或成氏商城（深圳）有限公司均有权追究其法律责任。 <br />
        特别声明： <br />
        本网站引用、摘录或转载来自第三方的文字、图片、视频内容时，仅基于传播公益精神之目的，并不表明这些内容代表成氏商城公益基金会的观点。<br />
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
    toMemberTermsA() {
      this.$router.push({
        name: 'memberTerms'
      })
    },
    toHelpSpecificationA() {
      this.$router.push({
        name: 'helpSpecification'
      })
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
@import './index'
</style>
