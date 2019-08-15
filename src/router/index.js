import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../views/Home/index')
const MeetSummary = () => import('../views/MeetSummary/index')
const Sign = () => import('../views/Sign/index')

Vue.use(Router)

export default new Router({
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
    }
  ]
})
