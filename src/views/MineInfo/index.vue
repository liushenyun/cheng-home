<template>
  <div class="sign-ctr">
    <div class="sign-form-wrap">

      <div class="sign-tu">
        <span>
          <p>头像</p>
          <p>(点击头像修改)</p>
        </span>
        <img :src="headimage" alt="">
        <input type="file" name="myfile"  @change="onFileChange($event)" />
      </div>

      <p class="i-tip"><span>姓名</span><span></span></p>
      <input class="i-input" v-model="params.realName" placeholder="请输入姓名" type="text" name="" id="">

      <p class="i-tip"><span>身份证</span><span></span></p>
      <input class="i-input" v-model="params.idCard" placeholder="请输入身份证" maxlength="18" type="text" name="" id="">

      <p class="i-tip"><span>祖籍</span><span></span></p>
      <input class="i-input" readonly @focus="addrFlag = true" placeholder="请输入祖籍" type="text" v-model="params.ancestral" name="" id="">

      <p class="i-tip"><span>现居</span><span></span></p>
      <input class="i-input" v-model="params.residence" placeholder="请输入现居" type="text" name="" id="">

      <p class="i-tip"><span>公司</span><span></span></p>
      <input class="i-input" v-model="params.company" placeholder="请输入公司" type="text" name="" id="">

      <p class="i-tip"><span>职务</span><span></span></p>
      <input class="i-input" v-model="params.position" placeholder="请输入职务" type="text" name="" id="">

      <p class="i-tip"><span>行业</span><span></span></p>
      <input class="i-input" v-model="params.industry" placeholder="请输入行业" type="text" name="" id="">

      <p class="i-tip"><span>自我介绍</span><span></span></p>
      <textarea class="pub-textarea" v-model="params.introduce" placeholder="请输入自我介绍" type="text" name="" id=""></textarea>

      <div class="sign-btn" @click="submit">提交</div>
    </div>

    <LinkageAddr :initVal="['广东省', '深圳市', '宝安区']" @cancel="addrFlag = false" @confirm="handleConfirm(arguments, 'addr')" :isShow="addrFlag"></LinkageAddr>
    <picker-s @picker-cance='pickerFlag = false' @picker-sure='pickerSure' v-if="pickerFlag" :pickerSolt='numberSlot'></picker-s>
  </div>
</template>

<script>
import dateFormat from '../../utils/dateFormat'
import { beforeRouteLeave } from '@/common/js/mixin.js'
import LinkageAddr from '@/components/linkageAddr/index.vue'
import { userInfoApiF, userUpdateApiF } from "@/service/requestFun.js"
import puGetSearch from '@/utils/puGetSearch'
// import { LinkageTime, LinkageDate, LinkageAddr } from '@/components';
// @ is an alias to /src
export default {
  name: 'MineInfo',
  mixins: [beforeRouteLeave],
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
    //  delegationName: '',
     applyId: null,
     headimage: '',
     params: {
       realName: '', // 姓名
       ancestral: '', // 祖籍
       idCard: '', // 身份证
       residence: '', // 现居地
       delegationId: '', // 代表团
       company: '', // 公司
       position: '', // 职务
       industry: '', // 行业
       introduce: '', // 介绍
       headImageFile: '' // 图像
     }
    }
  },
  components: { LinkageAddr },
  methods: {
    userInfoApiFA() {
      userInfoApiF().then((result) => {
        let {
          realName,
          ancestral,
          idCard,
          residence,
          delegationId,
          company,
          position,
          industry,
          introduce,
          headImageFile, headimage } = result
        this.params.realName = realName
        this.params.ancestral = ancestral
        this.params.idCard = idCard
        this.params.residence = residence
        this.params.delegationId = delegationId
        this.params.company = company
        this.params.position = position
        this.params.industry = industry
        this.params.introduce = introduce
        this.params.headImageFile = headImageFile
        this.headimage = headimage
      }).catch(() => {

      })
    },
    userUpdateApiFA() {
      let param = this.params;
      for(let x in param){
          let s = param[x];
          if(s == "" || s == null || s == undefined ){
            param[x] = '' ;
          }
      }
      userUpdateApiF(param).then(() => {
        this.$toast('填写成功')
        setTimeout(() => {
          this.$router.go(-1)
        }, 1500);
      }).catch(() => {})
    },
    // userUpdateApiFA() {
    //   userUpdateApiF(this.params).then(() => {
    //     this.$toast('填写成功')
    //     setTimeout(() => {
    //       this.$router.go(-1)
    //     }, 1500);
    //   }).catch(() => {})
    // },
    submit() {
      this.userUpdateApiFA()
    },
    handleConfirm(args, type, divide = '') {
      let { val, bool } = args[0];
      if (bool) {
        this[type] = val.join(divide);
        this.params.ancestral = val.join(divide)
        this[`${type}Flag`] = false;
      }
    },
    pickerSure(data) {
      // this.delegationName = data[0].name
      this.params.delegationId = data[0].key
      this.pickerFlag = false
    },
    onFileChange(e) {
        let file = e.target.files[0];
        let fileName = file.name;
        this.params.headImageFile = file;
        this.headimage = URL.createObjectURL(file);
    }
  },

  watch: { },
  mounted () {
    document.title = '填写个人信息'
    this.userInfoApiFA()
  }
}
</script>

<style lang="scss" scoped>
@import './index'
</style>
