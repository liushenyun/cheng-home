<template>
  <div class="sign-ctr">
    <div class="sign-form-wrap">
      <p class="i-tip"><span>姓名</span><span>(必填)</span></p>
      <input class="i-input" placeholder="请输入姓名" type="text" name="" id="">
      <p class="i-tip"><span>手机</span><span>(必填)</span></p>
      <input class="i-input" placeholder="请输入手机号" type="number" name="" id="">
      <p class="i-tip"><span>身份证号</span><span>(必填)</span></p>
      <input class="i-input" placeholder="请输入身份证号" type="text" name="" id="">
      <p class="i-tip"><span>祖籍</span><span>(必填)</span></p>
      <input class="i-input" readonly @focus="addrFlag = true" placeholder="请输入祖籍" type="text" v-model="addr" name="" id="">
      <p class="i-tip"><span>现居</span><span>(必填)</span></p>
      <input class="i-input" placeholder="请输入现居" type="text" name="" id="">
      <p class="i-tip"><span>代表团</span><span>(必填)</span></p>
      <input class="i-input" placeholder="请输入代表团" type="text" name="" id="">
      <p class="i-tip"><span>公司</span><span></span></p>
      <input class="i-input" placeholder="请输入公司" type="text" name="" id="">
      <p class="i-tip"><span>职务</span><span></span></p>
      <input class="i-input" placeholder="请输入职务" type="text" name="" id="">
      <p class="i-tip"><span>行业</span><span></span></p>
      <input class="i-input" placeholder="请输入行业" type="text" name="" id="">
      <div class="sign-btn">提交审核</div>
    </div>

    <LinkageAddr :initVal="['广东省', '深圳市', '宝安区']" @cancel="addrFlag = false" @confirm="handleConfirm(arguments, 'addr')" :isShow="addrFlag"></LinkageAddr>
    <!-- <mt-picker :slots="numberSlot" @change="onNumberChange" :visible-item-count="3"></mt-picker> -->
  </div>
</template>

<script>
import dateFormat from '../../utils/dateFormat'
import LinkageAddr from '@/components/linkageAddr/index.vue'
// import { LinkageTime, LinkageDate, LinkageAddr } from '@/components';
// @ is an alias to /src
export default {
  name: 'Sign',
  data () {
    return {
      dateNum: 0,
      addr: '',
      addrFlag: false,
      numberSlot: [{
          flex: 1,
          defaultIndex: 0,
          values: [0, 1, 2, 3, 4, 5, 6],
          className: 'slot1'
     }],
    }
  },
  components: { LinkageAddr },
  methods: {
    onNumberChange(picker, values) {
      console.log(values)
    },
    handleConfirm(args, type, divide = '-') {
      let { val, bool } = args[0];
      if (bool) {
        this[type] = val.join(divide);
        this[`${type}Flag`] = false;
      }
    },
    daysDistance(date1, date2) {     
        let distance,
            tempDate,
            daysApart;
        date1 = Date.parse(date1);
        date2 = Date.parse(date2);
        //计算两个日期之间相差的毫秒数
        distance = date2 - date1;
        //取绝对值
        // distance = Math.abs(distance);
        //毫秒数除以一天的毫秒数,就的到了天数
        distance = Math.floor(distance / (24 * 3600 * 1000));
        return distance;
    }
  },
  watch: { },
  mounted () {
    let _n = this.daysDistance(dateFormat(new Date(), 'yyyy/MM/dd'), '2019/10/17')
    this.dateNum = _n >= 0 ? _n : 0
  }
}
</script>

<style lang="scss" scoped>
@import './index'
</style>
