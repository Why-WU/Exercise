import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/movie/Movie.vue'
import Talk from '@/talk/Talk.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
   {
     path:'/',
     redirect:'movie'
   },
   {
     path:'/movie',
     name:'movie',
     component:Movie
   },
   {
     path:'/talk',
     name:'talk',
     component:Talk
   }
  ]
})
