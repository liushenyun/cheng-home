<template>
  <div class="top">
    <div class="indexDiv">
      <div class="colorDiv">
        <div class="txt">
          {{title}}
        </div>
      </div>
      <div class="lineDiv"></div>
      <div class="txtPicture">
        <div class="authurTxt">
          <span class="leftTxt">{{author}} / {{time}}</span>
          <span class="rightTxt" style="display: flex"><img src="../../image/eyes.png" alt="">{{watchTime}}</span>
        </div>
        <div class="picturetext">
          <!--           <img src="../../image/activitedListBackground.jpg">-->
          <div id="content" v-html="content"></div>
          <!--           <div class="bottomTxt">-->
          <!--           </div>-->
        </div>

      </div>
    </div>
  </div>

</template>

<script>

    import { beforeRouteLeave } from '@/common/js/mixin.js'
    import { genealogyApiF } from '@/service/requestFun'; //成氏族谱详情页
    import { dateFormat } from '../../utils/dateFormat';
    import { jsConfigApi } from "../../service/apiUrl";
    import wechat from "../../common/js/wechat";
    export default {
        name: 'DetailMain',
        mixins: [beforeRouteLeave],
        data () {
            return {
                'createTime': '',
                'time': '',
                'modifyTime': '',
                'version': null,
                'title': '',
                'author': '',
                'content': '',
                'type': '',
                'typeName': '',
                'imgDir': '',
                'watchTime': ''
            }
        },
        components: {},
        methods: {
            initGenealogyInfo () {
                let router = this.$route;
                let Id = router.query.activityId; //拿到地址栏参数id
                let t = this;
                genealogyApiF(Id).then(result => {
                    this.author = result.author
                    this.time = result.time
                    this.title = result.title
                    this.watchTime = result.watchTime
                    this.content = result.content
                    this.icon = result.icon;
                    this.description = result.description;
                    // this.author = result.author
                    setTimeout(function () {
                        t.shareFriend();
                    },2000)
                }).catch();
            },
            shareFriend () {
                let iners = [
                    wechat.properties.interface.updateAppMessageShareData,
                    wechat.properties.interface.updateTimelineShareData,
                    wechat.properties.interface.previewImage
                ];
                let desc = this.description;
                if (desc == null || desc == '') {
                    let dom = document.getElementById('content');
                    let text = dom.innerText;
                    desc = text.substring(0, 30);
                }
                let icon = this.icon;
                if(icon == null || icon == ""){
                    icon = "https://csfamily-1259120104.cos.ap-guangzhou.myqcloud.com/static/logo.jpg"
                }
                let param = {
                    title: this.title, // 分享标题
                    link: location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                    imgUrl: icon,
                    desc: desc
                };

                wechat.config(iners, jsConfigApi(), function (r) {
                    wx.ready(function () {
                        wechat.updateTimelineShareData(param);
                        wechat.updateAppMessageShareData(param);
                    });
                });
            },
            backHomeA () {
                this.$router.push({
                    name: 'MeetSummary'
                })
            },
            toMineA () {
                this.$router.push({
                    name: 'home',
                    params: {
                        selected: '个人中心'
                    }
                })
            }
        },
        watch: {},
        beforeRouteLeave (to, from, next) {
            history.pushState(null, null, location.search.replace(/code/g, 'XX'))
            next()
        },
        mounted () {
            this.initGenealogyInfo();
        }
    }
</script>

<style lang="scss" scoped>
  @import './index';
</style>
