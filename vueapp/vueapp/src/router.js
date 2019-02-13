import Vue from 'vue'
import Router from 'vue-router'
import Talk from '@/views/talk/Talk.vue'

Vue.use(Router);

export default new Router({
  mode:'history',
  base: process.env.BASE_URL,
  routes:[{
    path:'/',
    redirect:'/talk'
  },
{
    path:'/talk',
    name:'talk',
    component:Talk
}
]
})


