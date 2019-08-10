import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../views/Home/index')
const HomeA = () => import('../views/HomeA/index')

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/HomeA',
        name: 'HomeA',
        component: HomeA
    }
  ]
})
