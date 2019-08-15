<template>
  <div class="sign-ctr">
    <div class="sign-form-wrap">
      <p class="i-tip"><span>姓名</span><span>(必填)</span></p>
      <input class="i-input" placeholder="请输入姓名" type="text" name="" id="">
      <p class="i-tip"><span>手机</span><span>(手机)</span></p>
      <input class="i-input" placeholder="请输入姓名" type="text" name="" id="">
      <p class="i-tip"><span>祖籍</span><span>(必填)</span></p>
      <input class="i-input" placeholder="请输入祖籍" type="text" name="" id="">
      <p class="i-tip"><span>现居</span><span>(必填)</span></p>
      <input class="i-input" placeholder="请输入现居" type="text" name="" id="">
      <p class="i-tip"><span>代表团</span><span>(必填)</span></p>
      <input class="i-input" placeholder="请输入代表团" type="text" name="" id="">
      <p class="i-tip"><span>公司</span><span>(必填)</span></p>
      <input class="i-input" placeholder="请输入公司" type="text" name="" id="">
      <p class="i-tip"><span>职务</span><span>(必填)</span></p>
      <input class="i-input" placeholder="请输入职务" type="text" name="" id="">
      <p class="i-tip"><span>行业</span><span>(必填)</span></p>
      <input class="i-input" placeholder="请输入行业" type="text" name="" id="">
      <div class="sign-btn">提交审核</div>
    </div>
  </div>
</template>

<script>
import dateFormat from '../../utils/dateFormat'
// @ is an alias to /src
export default {
  name: 'Sign',
  data () {
    return {
      dateNum: 0
    }
  },
  components: {
  },
  methods: {
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
