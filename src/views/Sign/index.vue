<template>
  <div class="sign-ctr">
    <div class="sign-form-wrap">
      <p class="i-tip"><span>姓名</span><span>(必填)</span></p>
      <input class="i-input" v-model="params.name" placeholder="请输入姓名" type="text" name="" id="">

      <p class="i-tip"><span>手机</span><span>(必填)</span></p>
      <input class="i-input" v-model="params.tel" maxlength="11" placeholder="请输入手机号" type="number" name="" id="">

      <p class="i-tip"><span>身份证号</span><span>(必填)</span></p>
      <input class="i-input" maxlength="18" placeholder="请输入身份证号" type="text" name="" id="">

      <p class="i-tip"><span>祖籍</span><span>(必填)</span></p>
      <input class="i-input" readonly @focus="addrFlag = true" placeholder="请输入祖籍" type="text" v-model="addr" name="" id="">

      <p class="i-tip"><span>现居</span><span>(必填)</span></p>
      <input class="i-input" v-model="params.residence" placeholder="请输入现居" type="text" name="" id="">

      <p class="i-tip"><span>代表团</span><span>(必填)</span></p>
      <input class="i-input" v-model="delegationName"  readonly @focus="pickerFlag = true" placeholder="请输入代表团" type="text" name="" id="">

      <p class="i-tip"><span>公司</span><span></span></p>
      <input class="i-input" v-model="params.company" placeholder="请输入公司" type="text" name="" id="">

      <p class="i-tip"><span>职务</span><span></span></p>
      <input class="i-input" v-model="params.position" placeholder="请输入职务" type="text" name="" id="">

      <p class="i-tip"><span>行业</span><span></span></p>
      <input class="i-input" v-model="params.industry" placeholder="请输入行业" type="text" name="" id="">

      <div class="sign-btn" @click="submit">提交审核</div>
    </div>

    <LinkageAddr :initVal="['广东省', '深圳市', '宝安区']" @cancel="addrFlag = false" @confirm="handleConfirm(arguments, 'addr')" :isShow="addrFlag"></LinkageAddr>
    <picker-s @picker-cance='pickerFlag = false' @picker-sure='pickerSure' v-if="pickerFlag" :pickerSolt='numberSlot'></picker-s>
  </div>
</template>

<script>
import dateFormat from '../../utils/dateFormat'
import LinkageAddr from '@/components/linkageAddr/index.vue'
import { activityApplyApiF, listParentApiF } from "@/service/requestFun.js"
// import { LinkageTime, LinkageDate, LinkageAddr } from '@/components';
// @ is an alias to /src
export default {
  name: 'Sign',
  data () {
    return {
      dateNum: 0,
      addr: '',
      addrFlag: false,
      pickerFlag: false,
      numberSlot: [{
          flex: 1,
          defaultIndex: 0,
          values: [{name: 112, key: 'a'}, {name: 112, key: 'b'}],
          className: 'slot1'
     }],
     delegationName: '',
     params: {
       name: '', // 姓名
       tel: '', // 手机
       ancestral: '', // 祖籍
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
      this.$router.push({
        name: 'signSuccess'
      })
      activityApplyApiF(this.params).then((result) => {
        console.log(result)
      }).catch(() => {

      })
      console.log(this.params)
    },
    handleConfirm(args, type, divide = '-') {
      let { val, bool } = args[0];
      console.log(val)
      if (bool) {
        this[type] = val.join(divide);
        this.params.ancestral = val.join(divide)
        this[`${type}Flag`] = false;
      }
    },
    listParentApiFA(fun) {
      listParentApiF(2, fun).then((result) => {
        this.numberSlot[0].values = result.map(({name, key}) => {
          console.log(name, key)
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
  mounted () {
    this.listParentApiFA(this.listParentApiFA.bind(this))
  }
}
</script>

<style lang="scss" scoped>
@import './index'
</style>
