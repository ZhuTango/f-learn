import Vue from 'vue'
import Router from 'vue-router'
// import Hide from '@/components/Hide'
import Hidelearn from '@/components/Hidelearn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hidelearn',
      component: Hidelearn
    }
  ]
})
