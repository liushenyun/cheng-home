<template>
  <div class="FundingApply-ctr">
    <div class="FA_top-wrap">
      <div class="pw-title">
        <div> <img src="../../image/welfar_word_bg_left.png" alt=""> </div>

        <span> <p>资助申请</p>
          <!-- <p>CHENG MALL FOUNDATION</p> -->
        </span>
        <div><img src="../../image/welfar_word_bg_right.png" alt=""></div>
      </div>
      <p class="pw-sub-title">·实事求是 敬畏公益 永怀感恩之心·</p>

      <div class="Funding-con">
        <p class="Funding-con-title">想筹多少钱</p>
        <div class="Funding-con-input"> <input type="text" v-model="pageParams.targetMoney" placeholder="请输入"> </div>
        <p class="Funding-con-title">筹款标题</p>
        <div class="Funding-con-input"> <input type="text" v-model="pageParams.title" placeholder="请输入"> </div>
        <p class="Funding-con-title">筹款发起单位/人</p>
        <div class="Funding-con-input"> <input type="text" v-model="pageParams.originator" placeholder="请输入"> </div>
        <p class="Funding-con-title">救助说明</p>
        <div class="Funding-con-input">
          <textarea name="" id="" cols="30" rows="10" v-model="pageParams.description" placeholder="请输入"></textarea>
        </div>
      </div>

    </div>

    <div class="Funding-bottom-wrap">
      <p class="Funding-bottom-title">添加证明图片</p>
      <div class="re-img-wrap">
        <ul>
          <li class="" v-for="(item, index) in imgList" :key="index">
            <img class="img-show" :src="item.fileSrc" alt="">
          </li>
          <li class="up-load-btn">
            <input type="file" name="myfile" @change="onFileChange($event)" />
            <span>
              <img src="../../image/upload_ic.png" alt="">
              <p>上传图片</p>
            </span>
          </li>
        </ul>
      </div>

      <div class="fund-submit-btn" @click="toSubmitA">提交</div>
    </div>



  </div>
</template>

<script>
import { beforeRouteLeave } from '@/common/js/mixin.js'
import {
  crowdfundingInfoApiF,
  crowdfundingApplyApi
} from "@/service/requestFun.js"

// @ is an alias to /src
export default {
  name: 'InformationDisclosure',
  mixins: [beforeRouteLeave],
  data () {
    return {
      imgList: [],
      crowdfundingId: null,
      pageParams: {
        title: '',
        targetMoney: '',
        originator: '',
        description: ''
      }
    }
  },
  components: {  },
  methods: {
    onFileChange(e) {
      let files = e.target.files[0];
      let _oFReader = new FileReader()
      _oFReader.readAsDataURL(files)
      _oFReader.onload = ev => {
        this.imgList.push({
          files: files,
          fileSrc: ev.target.result
        })
      }
    },
    crowdfundingInfoApiFA() {
      crowdfundingInfoApiF(this.crowdfundingId).then((result) => {
        this.pageParams.targetMoney = result.targetMoneyDesc
        this.pageParams.title = result.title
        this.pageParams.originator = result.originator
        this.pageParams.description = result.description
      }).catch((err) => {

      });
    },
    crowdfundingApplyApiA() {
      let _obj = Object.assign({}, this.pageParams)
      let _imgList = this.imgList
      _obj.id = this.crowdfundingId
      _obj.mediaLength = _imgList.length

      _imgList.forEach((v, i) => {
        _obj[`mediaFile[${i}]`] = v.files
        _obj[`mediaType[${i}]`] = 1
      })
      debugger
      // crowdfundingApplyApi(_obj).then((result) => {
      //   this.$toast('提交成功')
      //   setTimeout(() => {
      //     this.$router.go(-1)
      //   }, 1500);
      // }).catch((err) => {
      //
      // });
    },
    toSubmitA() {
      this.crowdfundingApplyApiA()
    }
  },
  watch: { },
  beforeRouteLeave(to, from, next) {
    history.pushState(null, null, location.search.replace(/code/g, 'XX'))
    next()
  },
  mounted () {
    let _id = this.$route.params.id
    if (_id) {
      this.crowdfundingId = _id
      this.crowdfundingInfoApiFA()
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index'
</style>
