import Vue from 'vue'
import Router from 'vue-router'
import puGetSearch from '@/utils/puGetSearch'
import { loginApiF } from '@/service/requestFun'
import { setToken } from '@/common/js/ut'
const Home = () => import('../views/Home/index')
const MeetSummary = () => import('../views/MeetSummary/index')
const Sign = () => import('../views/Sign/index')
const ShowImage = () => import('../views/ShowImage/index')
const SignSuccess = () => import('../views/SignSuccess/index')
const Sponsor = () => import('../views/Sponsor/index')
const Selfless = () => import('../views/Selfless/index')
const ReviewStatus = () => import('../views/ReviewStatus/index')
const ActiveDetail = () => import('../views/ActiveDetail/index')
const PublicWelfare = () => import('../views/PublicWelfare/index')
const FundingApply = () => import('../views/FundingApply/index')
const WelfareIntroduce = () => import('../views/WelfareIntroduce/index')
const WelfareInfo = () => import('../views/WelfareInfo/index')
const WelfareAction = () => import('../views/WelfareAction/index')

Vue.use(Router)

const VueRouter = new Router({
  mode: 'history',
  routes: [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/MeetSummary',
        name: 'MeetSummary',
        component: MeetSummary
    },
    {
        path: '/sign',
        name: 'sign',
        component: Sign
    },
    {
        path: '/signSuccess',
        name: 'signSuccess',
        component: SignSuccess
    },
    {
        path: '/showImage',
        name: 'showImage',
        component: ShowImage
    },
    {
        path: '/sponsor',
        name: 'sponsor',
        component: Sponsor
    },
    { // 无私奉献
        path: '/selfless',
        name: 'selfless',
        component: Selfless
    },
    { // 审核状态
        path: '/reviewStatus',
        name: 'reviewStatus',
        component: ReviewStatus
    },
    { // 活动详情
        path: '/activeDetail',
        name: 'activeDetail',
        component: ActiveDetail
    },
    { // 成氏公益
        path: '/publicWelfare',
        name: 'publicWelfare',
        component: PublicWelfare
    },
    { // 资助申请
        path: '/fundingApply',
        name: 'fundingApply',
        component: FundingApply
    },
    { // 基金会介绍
        path: '/welfareIntroduce',
        name: 'welfareIntroduce',
        component: WelfareIntroduce
    },
    { // 信息公开
        path: '/welfareInfo',
        name: 'welfareInfo',
        component: WelfareInfo
    },
    { // 基金会行动
        path: '/welfareAction',
        name: 'welfareAction',
        component: WelfareAction
    }
  ]
})

export default VueRouter

// VueRouter.beforeEach((to, from, next) => {
//     let _search = puGetSearch()
//     if (_search.code) {
//         midLoginApiF({
//             code: _search.code
//         }).then((result) => {
//             let { webToken } = result
//             setToken(webToken)
//         }).catch(() => {
//         });
//     }
//   console.log(to, from, next)
//   // next()
// })

// VueRouter.beforeRouteLeave((to, from, next) => {
//   console.log('leave', to, from, next)
//     // next()
// })
