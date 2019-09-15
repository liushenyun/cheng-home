<template>
  <div class="meet-trip-ctr">
    <div class="mt-form-wrap">
      <div class="mt-title">
        <p @click="mtTitleA('GO')" :class=" currentTap == 'GO' ? 'active' :''">·参加会议行程·</p>
        <p @click="mtTitleA('BACK')" :class=" currentTap == 'BACK' ? 'active' :''">·返回行程·</p>
      </div>
      <div class="meet-info-wrap" v-if="currentTap == 'GO'">
        <p class="i-tip"><span>出发时间</span><span></span></p>
        <input class="i-input" v-model="paramsGo.departureTime" readonly @focus="$refs.strtTimepickerA.open()" placeholder="请选择出发时间" type="text" name="" id="">

        <p class="i-tip"><span>到达时间</span><span></span></p>
        <input class="i-input" v-model="paramsGo.arrivalTime" readonly @focus="$refs.strtTimepickerB.open()" placeholder="请选择到达时间" type="text" name="" id="">

        
        <p class="i-tip"><span>交通工具</span><span></span></p>
        <input class="i-input" v-model="paramsGo.vehicle" readonly @focus="trafficToolsFlag = true" placeholder="请选择交通工具" type="text" name="" id="">

        <p class="i-tip"><span>到达位置</span><span></span></p>
        <input class="i-input" v-model="paramsGo.arrivalLocation" readonly @focus="arrivalLocationFlag = true" placeholder="请选择到达位置" type="text" name="" id="">

        <p class="i-tip"><span>是否已安排住宿</span><span></span></p>
        <input class="i-input" v-model="paramsGo.accommodationFlag" readonly @focus="accommodationPickFlag = true" placeholder="请选择" type="text" name="" id="">

        <p class="i-tip"><span>同行人数</span><span></span></p>
        <input class="i-input" v-model="paramsGo.peopleNumber" placeholder="请输入" type="number" name="" id="">
      </div>

      <div class="meet-info-wrap" v-if="currentTap == 'BACK'">
        <p class="i-tip"><span>出发时间</span><span></span></p>
        <input class="i-input" v-model="paramsBack.departureTime" readonly @focus="$refs.strtTimepickerC.open()" placeholder="请选择出发时间" type="text" name="" id="">

        <p class="i-tip"><span>到达时间</span><span></span></p>
        <input class="i-input" v-model="paramsBack.arrivalTime" readonly @focus="$refs.strtTimepickerD.open()" placeholder="请选择到达时间" type="text" name="" id="">

        
        <p class="i-tip"><span>交通工具</span><span></span></p>
        <input class="i-input" v-model="paramsBack.vehicle" readonly @focus="trafficToolsFlag = true" placeholder="请选择交通工具" type="text" name="" id="">

        <p class="i-tip"><span>出发位置</span><span></span></p>
        <!-- <input class="i-input" v-model="paramsBack.departureLocation" readonly @focus="arrivalLocationFlag = true" placeholder="请选择到达位置" type="text" name="" id=""> -->
        <input class="i-input" v-model="paramsBack.departureLocation" placeholder="出发位置" type="text" name="" id="">

        <p class="i-tip"><span>同行人数</span><span></span></p>
        <input class="i-input" v-model="paramsBack.peopleNumber" placeholder="请输入" type="number" name="" id="">
      </div>

      <div class="mt-btn" @click="submit">提交</div>
    </div>

    <LinkageAddr :initVal="['广东省', '深圳市', '宝安区']" @cancel="addrFlag = false" @confirm="handleConfirm(arguments, 'addr')" :isShow="addrFlag"></LinkageAddr>
    <picker-s @picker-cance='trafficToolsFlag = false' v-if="trafficToolsFlag" @picker-sure='trafficToolsSure'  :pickerSolt='trafficTools'></picker-s>
    <picker-s @picker-cance='arrivalLocationFlag = false' @picker-sure='arrivalLocationSure' v-if="arrivalLocationFlag" :pickerSolt='arrivalLocationArr'></picker-s>
    <picker-s @picker-cance='accommodationPickFlag = false' @picker-sure='accommodationPickSure' v-if="accommodationPickFlag" :pickerSolt='accommodationPick'></picker-s>
    
    <mt-datetime-picker @confirm='goConfirm' :startDate='new Date()' :endDate='goEndDate' ref="strtTimepickerA" type="datetime"></mt-datetime-picker>
    <mt-datetime-picker @confirm='goConfirmB' :startDate='new Date()' :endDate='goEndDateB' ref="strtTimepickerB" type="datetime"></mt-datetime-picker>
    <mt-datetime-picker @confirm='backConfirm' :startDate='new Date()' :endDate='backEndDate' ref="strtTimepickerC" type="datetime"></mt-datetime-picker>
    <mt-datetime-picker @confirm='backConfirmB' :startDate='new Date()' :endDate='backEndDateB' ref="strtTimepickerD" type="datetime"></mt-datetime-picker>
  </div>
</template>

<script>
import { beforeRouteLeave } from '@/common/js/mixin.js'
import dateFormat from '../../utils/dateFormat'
import LinkageAddr from '@/components/linkageAddr/index.vue'
import {
  tripInfoApiF,
  tripCreateApiF,
  tripUpdateApiF } from "@/service/requestFun.js"
import puGetSearch from '@/utils/puGetSearch'
// import { LinkageTime, LinkageDate, LinkageAddr } from '@/components';
// @ is an alias to /src
export default {
  name: 'MeetTrip',
  mixins: [beforeRouteLeave],
  data () {
    return {
      tripGoId: null,
      tripBackId: null,
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
          values: [{key: '1', name: '飞机'}, {key: '2', name: '火车'}, {key: '3', name: '汽车'}, {key: '4', name: '船'} ,{key: '5', name: '自驾'}],
          className: 'slot1'
        }
      ],
      addr: '',
      addrFlag: false,
      pickerFlag: false,
      arrivalLocationFlag: false,
      arrivalLocationArr: [{
          flex: 1,
          defaultIndex: 0,
          values: ['深圳火车站', '深圳北站', '飞机场'],
          className: 'slot1'
      }],
      accommodationPickFlag: false,
      accommodationPick: [{
          flex: 1,
          defaultIndex: 0,
          values: ['是', '否'],
          className: 'slot1'
      }],
      paramsGo: {
        activityId: 1,
        departureTime: '',
        arrivalTime: '',
        vehicle: '',
        arrivalLocation: '',
        accommodationFlag: '是', // 1是0否
        peopleNumber: ''
      },
      paramsBack: {
        activityId: 1,
        departureTime: '',
        arrivalTime: '',
        vehicle: '',
        departureLocation: '',
        peopleNumber: ''
      }
    }
  },
  components: { LinkageAddr },
  methods: {
    goConfirm(v) {
      this.paramsGo.departureTime = dateFormat(v, 'yyyy-MM-dd hh:mm:ss')
      // this.paramsGo.arrivalTime = dateFormat(v, 'yyyy-MM-dd hh:mm')
    },
    goConfirmB(v) {
      this.paramsGo.arrivalTime = dateFormat(v, 'yyyy-MM-dd hh:mm:ss')
    },
    backConfirm(v) {
      this.paramsBack.departureTime = dateFormat(v, 'yyyy-MM-dd hh:mm:ss')
    },
    backConfirmB(v) {
      this.paramsBack.arrivalTime = dateFormat(v, 'yyyy-MM-dd hh:mm:ss')
    },
    mtTitleA(f) {
      this.currentTap = f
    },
    trafficToolsSure(v) {
      this.trafficToolsFlag = false
      if (this.currentTap == 'GO') {
        this.paramsGo.vehicle = v[0].name
      } else {
        this.paramsBack.vehicle = v[0].name
      }
    },
    submit() {
      let _f = this.trafficTools[0].values
      let _params = {}
      if (this.currentTap == 'GO') {
        _params = Object.assign({}, this.paramsGo)
        _params.type = 1
        let _vehicle = _params.vehicle
        _f.forEach(v => {if (v.name == _vehicle) {_params.vehicle = v.key}});
        _params.accommodationFlag = _params.accommodationFlag == '是' ? 1 : 0
        if (this.tripGoId) {
          _params.id = this.tripGoId
          this.tripUpdateApiFA(_params)
        } else {
          this.tripCreateApiFA(_params)
        }
        
      } else {
        _params = Object.assign({}, this.paramsBack)
        _params.type = 2
        let _vehicle = _params.vehicle
        _f.forEach(v => {if (v.name == _vehicle) {_params.vehicle = v.key}});
        if (this.tripBackId) {
          _params.id = this.tripBackId
          this.tripUpdateApiFA(_params)
        } else {
          this.tripCreateApiFA(_params)
        }
      }
    },
    handleConfirm(args, type, divide = '-') {
      let { val, bool } = args[0];
      if (bool) {
        this[type] = val.join(divide);
        this.params.ancestral = val.join(divide)
        this[`${type}Flag`] = false;
      }
    },
    arrivalLocationSure(v) {
      this.arrivalLocationFlag = false
      
      if (this.currentTap == 'GO') {
        this.paramsGo.arrivalLocation = v[0]
      } else {
        this.paramsBack.departureLocation = v[0]
      }
    },
    accommodationPickSure(data) {
      this.paramsGo.accommodationFlag = data[0]
      this.accommodationPickFlag = false
    },
    tripCreateApiFA(data) {
      tripCreateApiF(data).then((result) => {
        this.$toast('提交成功')
        setTimeout(() => {
          this.$router.go(-1)
        }, 1500);
      }).catch(() => {})
    },
    tripUpdateApiFA(data) {
      tripUpdateApiF(data).then((result) => {
        this.$toast('提交成功')
        setTimeout(() => {
          this.$router.go(-1)
        }, 1500);
      }).catch(() => {})
    },
    tripInfoApiFA() {
      tripInfoApiF(1).then((result) => {
        let _result = result
        let _f = this.trafficTools[0].values
        _result.forEach(v => {
          let { type, vehicle } = v
          let _vehicleStr = ''
          _f.forEach(k => {if (k.key == vehicle) {_vehicleStr = k.name}});
          if (type == 1) { // GO
            this.tripGoId = v.id
            this.paramsGo.departureTime = v.departureTime
            this.paramsGo.arrivalTime = v.arrivalTime
            this.paramsGo.vehicle = _vehicleStr
            this.paramsGo.arrivalLocation = v.arrivalLocation
            this.paramsGo.accommodationFlag = v.accommodationFlag == 1 ? '是':'否'
            this.paramsGo.peopleNumber = v.peopleNumber
          } else if (type == 2) { // BACK
            this.tripBackId = v.id
            this.paramsBack.departureTime = v.departureTime
            this.paramsBack.arrivalTime = v.arrivalTime
            this.paramsBack.vehicle = _vehicleStr
            this.paramsBack.departureLocation = v.departureLocation
            this.paramsBack.peopleNumber = v.peopleNumber
          }
        })
      }).catch(() => {
        
      });
    }
  },
  
  watch: { },
  mounted () {
    this.tripInfoApiFA()
  }
}
</script>

<style lang="scss" scoped>
@import './index'
</style>
