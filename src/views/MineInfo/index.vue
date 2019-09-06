<template>
  <div class="sign-ctr">
    <div class="sign-form-wrap">

      <div class="sign-tu">
        <span>
          <p>头像</p>
          <p>(点击头像修改)</p>
        </span>
        <img src="../../image/we_icon.png" alt="">
      </div>

      <p class="i-tip"><span>姓名</span><span>(必填)</span></p>
      <input class="i-input" v-model="params.name" placeholder="请输入姓名" type="text" name="" id="">

      <p class="i-tip"><span>手机</span><span>(必填)</span></p>
      <input class="i-input" v-model="params.tel" maxLength="11" placeholder="请输入手机号" type="number" name="" id="">

      
      <p class="i-tip"><span>祖籍</span><span>(必填)</span></p>
      <input class="i-input" readonly @focus="addrFlag = true" placeholder="请输入祖籍" type="text" v-model="addr" name="" id="">

      <p class="i-tip"><span>现居</span><span>(必填)</span></p>
      <input class="i-input" v-model="params.residence" placeholder="请输入现居" type="text" name="" id="">

      <p class="i-tip"><span>公司</span><span></span></p>
      <input class="i-input" v-model="params.company" placeholder="请输入公司" type="text" name="" id="">

      <p class="i-tip"><span>职务</span><span></span></p>
      <input class="i-input" v-model="params.position" placeholder="请输入职务" type="text" name="" id="">

      <p class="i-tip"><span>行业</span><span></span></p>
      <input class="i-input" v-model="params.industry" placeholder="请输入行业" type="text" name="" id="">

      <p class="i-tip"><span>自我介绍</span><span></span></p>
      <textarea class="pub-textarea" v-model="params.industry" placeholder="请输入自我介绍" type="text" name="" id=""></textarea>

      <div class="sign-btn" @click="submit">提交</div>
    </div>

    <LinkageAddr :initVal="['广东省', '深圳市', '宝安区']" @cancel="addrFlag = false" @confirm="handleConfirm(arguments, 'addr')" :isShow="addrFlag"></LinkageAddr>
    <picker-s @picker-cance='pickerFlag = false' @picker-sure='pickerSure' v-if="pickerFlag" :pickerSolt='numberSlot'></picker-s>
  </div>
</template>

<script>
import dateFormat from '../../utils/dateFormat'
import LinkageAddr from '@/components/linkageAddr/index.vue'
import { activityApplyApiF, listParentApiF } from "@/service/requestFun.js"
import puGetSearch from '@/utils/puGetSearch'
// import { LinkageTime, LinkageDate, LinkageAddr } from '@/components';
// @ is an alias to /src
export default {
  name: 'MineInfo',
  data () {
    return {
      dateNum: 0,
      addr: '',
      addrFlag: false,
      pickerFlag: false,
      numberSlot: [{
          flex: 1,
          defaultIndex: 0,
          values: [],
          className: 'slot1'
     }],
     delegationName: '',
     applyId: null,
     params: {
       activityId: '1',
       name: '', // 姓名
       tel: '', // 手机
       ancestral: '', // 祖籍
       idcard: '', // 身份证
       residence: '', // 现居地
       delegationId: '', // 代表团
       company: '', // 公司
       position: '', // 职务
       industry: '' // 行业
     }
    }
  },
  components: { LinkageAddr },
  methods: {
    submit() {
      // this.$router.push({
      //   name: 'activeDetail'
      //   // name: 'signSuccess'
      //   // name: 'reviewStatus'
      // })
      if (this.applyId) {
        this.params.id = this.applyId
      }
      activityApplyApiF(this.params).then((result) => {
        this.$toast('提交成功')

        setTimeout(() => {
          this.$router.push({
            name: 'MeetSummary'
          })
        }, 1500)
      }).catch(() => {

      })
    },
    handleConfirm(args, type, divide = '-') {
      let { val, bool } = args[0];
      if (bool) {
        this[type] = val.join(divide);
        this.params.ancestral = val.join(divide)
        this[`${type}Flag`] = false;
      }
    },
    listParentApiFA(fun) {
      listParentApiF(2, fun).then((result) => {
        this.numberSlot[0].values = result.map(({name, key}) => {
          return { name: name, key: key }
        })
      }).catch((err) => {
        
      });
    },
    pickerSure(data) {
      this.delegationName = data[0].name
      this.params.delegationId = data[0].key
      this.pickerFlag = false
    }
  },
  
  watch: { },
  beforeRouteLeave(to, from, next) {
    history.pushState(null, null, location.search.replace(/code/g, 'XX'))
    next()
  },
  mounted () {
    document.title = '填写个人信息'
    this.applyId = this.$route.params.applyId
    this.listParentApiFA(this.listParentApiFA.bind(this))
  }
}
</script>

<style lang="scss" scoped>
@import './index'
</style>
