<template>
  <div class="meet-trip-ctr">
    <div class="mt-form-wrap">
      <div class="mt-title">
        <p @click="mtTitleA('GO')" :class=" currentTap == 'GO' ? 'active' :''">·参加会议行程·</p>
        <p @click="mtTitleA('BACK')" :class=" currentTap == 'BACK' ? 'active' :''">·返回行程·</p>
      </div>
      <div class="meet-info-wrap" v-if="currentTap == 'GO'">
        <p class="i-tip"><span>出发时间</span><span></span></p>
        <input class="i-input" @focus="strtTimepickerA" v-model="params.goTime" placeholder="请选择出发时间" type="text" name="" id="">

        <p class="i-tip"><span>到达时间</span><span></span></p>
        <input class="i-input" v-model="params.tel" maxLength="11" placeholder="请选择到达时间" type="number" name="" id="">

        
        <p class="i-tip"><span>交通工具</span><span></span></p>
        <input class="i-input" readonly @focus="trafficToolsFlag = true" placeholder="请选择交通工具" type="text" v-model="addr" name="" id="">

        <p class="i-tip"><span>到达位置</span><span></span></p>
        <input class="i-input" readonly @focus="pickerFlaga = true" placeholder="请选择到达位置" type="text" name="" id="">

        <p class="i-tip"><span>是否已安排住宿</span><span></span></p>
        <input class="i-input" v-model="params.company" placeholder="请选择" type="text" name="" id="">

        <p class="i-tip"><span>同行人数</span><span></span></p>
        <input class="i-input" v-model="params.position" placeholder="请输入" type="text" name="" id="">
      </div>

      <div class="meet-info-wrap" v-if="currentTap == 'BACK'">
        <p class="i-tip"><span>出发时间</span><span></span></p>
        <input class="i-input" @focus="strtTimepickerA" v-model="params.goTime" placeholder="请选择出发时间" type="text" name="" id="">

        <p class="i-tip"><span>到达时间</span><span></span></p>
        <input class="i-input" v-model="params.tel" maxLength="11" placeholder="请选择到达时间" type="number" name="" id="">

        
        <p class="i-tip"><span>交通工具</span><span></span></p>
        <input class="i-input" readonly @focus="trafficToolsFlag = true" placeholder="请选择交通工具" type="text" v-model="addr" name="" id="">

        <p class="i-tip"><span>出发位置</span><span></span></p>
        <input class="i-input" readonly @focus="pickerFlaga = true" placeholder="请选择到达位置" type="text" name="" id="">

        <p class="i-tip"><span>同行人数</span><span></span></p>
        <input class="i-input" v-model="params.position" placeholder="请输入" type="text" name="" id="">
      </div>

      <div class="mt-btn" @click="submit">提交</div>
    </div>

    <LinkageAddr :initVal="['广东省', '深圳市', '宝安区']" @cancel="addrFlag = false" @confirm="handleConfirm(arguments, 'addr')" :isShow="addrFlag"></LinkageAddr>
    <picker-s @picker-cance='trafficToolsFlag = false' v-if="trafficToolsFlag" @picker-sure='trafficToolsSure'  :pickerSolt='trafficTools'></picker-s>
    <picker-s @picker-cance='pickerFlaga = false' @picker-sure='pickerSure' v-if="pickerFlaga" :pickerSolt='numberSlot1'></picker-s>
    <mt-datetime-picker @confirm='goConfirm' :startDate='new Date()' :endDate='goEndDate' ref="strtTimepickerA" type="datetime"></mt-datetime-picker>
    <mt-datetime-picker @confirm='goConfirmB' :startDate='new Date()' :endDate='goEndDateB' ref="strtTimepickerB" type="datetime"></mt-datetime-picker>
    <mt-datetime-picker @confirm='backConfirm' :startDate='new Date()' :endDate='backEndDate' ref="strtTimepickerC" type="datetime"></mt-datetime-picker>
    <mt-datetime-picker @confirm='backConfirmB' :startDate='new Date()' :endDate='backEndDateB' ref="strtTimepickerD" type="datetime"></mt-datetime-picker>
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
  name: 'MeetTrip',
  data () {
    return {
      goEndDate: new Date('2019/10/17'),
      goEndDateB: new Date('2019/10/17'),
      backEndDate: new Date('2019/11/17'),
      backEndDateB: new Date('2019/12/17'),
      currentTap: 'GO',
      trafficToolsFlag: false,
      trafficTools: [
        {
          flex: 1,
          defaultIndex: 0,
          values: ['火车', '飞机'],
          className: 'slot1'
        }
      ],
      addr: '',
      addrFlag: false,
      pickerFlag: false,
      pickerFlaga: false,
      numberSlot: [{
          flex: 1,
          defaultIndex: 0,
          values: [1, 2],
          className: 'slot1'
     }],
    numberSlot1: [{
        flex: 1,
        defaultIndex: 0,
        values: [2, 3],
        className: 'slot1'
    }],
     delegationName: '',
     applyId: null,
     params: {
      goTime: '',
      goTimeB: ''
     }
    }
  },
  components: { LinkageAddr },
  methods: {
    goConfirm(v) {
      this.params.goTime = dateFormat(v, 'yyyy-MM-dd hh:mm')
      console.log(dateFormat(v, 'yyyy-MM-dd hh:mm'))
    },
    goConfirmB(v) {
      console.log(dateFormat(v, 'yyyy-MM-dd hh:mm'))
    },
    backConfirm(v) {
      console.log(dateFormat(v, 'yyyy-MM-dd hh:mm'))
    },
    backConfirmB(v) {
      console.log(dateFormat(v, 'yyyy-MM-dd hh:mm'))
    },
    strtTimepickerA() {
      this.$refs.strtTimepickerA.open()
    },
    mtTitleA(f) {
      this.currentTap = f
    },
    trafficToolsSure(v) {
      this.trafficToolsFlag = false
      console.log(v)
    },
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
    this.applyId = this.$route.params.applyId
    this.listParentApiFA(this.listParentApiFA.bind(this))
  }
}
</script>

<style lang="scss" scoped>
@import './index'
</style>
