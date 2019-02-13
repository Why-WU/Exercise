<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/mine">我的</router-link>|
      <router-link to="/test">test</router-link>|
      <router-link to="/viewstest">别名</router-link>|
      <router-link :to="{name:'test1',params:{name:'why',age:'23'}}">子路由1</router-link>|
      <router-link to="/test2/WHY/二十三">子路由2</router-link>|
      <router-link to="/home/HHH/23333">返回首页</router-link>|
      <router-link to="/redirect/WWW/55566">redirect</router-link>
      <button @click="back">后退</button>
    </div>
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>


<script>
export default {
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: all 1s ease 1s;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: 1s all ease;
}
.fade-leave-to {
  opacity: 0;
}
</style>


