<template>
  <div class="meet-summary-ctr">
    <p class="m-title">【第六届世界成氏恳亲大会】</p>
    <div class="m-time-wrap">
      <span>倒计时</span>
      <span>{{dateNum}}</span>
      <span>天</span>
    </div>
    <div class="m-title-1"><span>·同宗同心同享·</span></div>
    <div class="m-title-2"><span>赞助播报</span><img src='../../image/z_b_icon.png' /></div>
    <div class="line"></div>
    <div class="m-con-wrap">
      <div class="m-con-inner">
        <div class="m-con-left"></div>
        <div class="m-con-right"><span>第六届世界成氏恳亲大会会议议程 》</span></div>
      </div>
    </div>
    <div class="line"></div>
    <div class="m-con-wrap">
      <div class="m-con-inner">
        <div class="m-con-left"></div>
        <div class="m-con-right"><span>六大现场视频/图片直播 》</span></div>
      </div>
    </div>
    <div class="line"></div>
    
    <ul class="m-btns-wrap">
      <li><img src="../../image/m_btns_1.png" /><span>参会指引</span></li>
      <li><img src="../../image/m_btns_1.png" /><span>参会指引</span></li>
      <li><img src="../../image/m_btns_1.png" /><span>参会指引</span></li>
    </ul>

    <div class="m-btn-im">立即报名</div>
  </div>
</template>

<script>
import dateFormat from '../../utils/dateFormat'
// @ is an alias to /src
export default {
  name: 'MeetSummary',
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
