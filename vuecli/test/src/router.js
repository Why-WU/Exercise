import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/mine",
      name: "mine",
      component: () => import("./views/Mine.vue")
    },
    {
      path: "/test",
      name: "test",
      alias: "/viewstest",
      component: () => import("./views/Test.vue"),
      children: [
        {
          path: "/test1",
          name: "test1",
          component: () => import("./views/Test1.vue")
        },
        {
          path: "/test2/:name/:age",
          name: "test2",
          component: () => import("./views/Test2.vue")
        }
      ]
    },
    {
      path: "/home/:name/:age",
      redirect: "/test2/:name/:age"
    },
    {
      path: "/redirect/:name/:age",
      redirect: "/test2/:name/:age"
    },
    {
      path: "*",
      name: "error",
      component: () => import("./views/Error404.vue")
    }
  ]
});
