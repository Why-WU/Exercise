<template>
  <div :class="activeClass">
    <header>
      <span>首页</span>
      <h1>{{activeTitle}}</h1>
    </header>
    <nav>
      <ul>
        <li :class="{'activeClass':item.className==activeClass}" v-for="(item,index) in menuList" :key="index" @click="routerPush(item)">{{item.name}}</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      activeTitle: "电影",
      activeClass: "movie",
      menuList: [
        {
          name: "电影",
          path: "/movie",
          className:"movie"
        },
        {
          name: "聊天",
          path: "/talk",
          className:"talk"
        }
      ]
    };
  },
  methods: {
    routerPush(obj) {
      this.activeTitle = obj.name;
      this.activeClass = obj.className;
    }
  }
};
</script>

<style scoped>
header,
nav {
  position: fixed;
  height: 1rem;
  width: 100%;
  color: #ffffff;
  background-color: rgb(33, 150, 243);
}
header {
  top: 0;
}
header span {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
}
nav {
  bottom: 0;
  width: 100%;
}
nav ul {
  display: flex;
  width: 100%;
}
nav li {
  flex-grow: 1;
  line-height: 1rem;
}
.movie header,
.movie nav {
  background-color: rgb(33, 150, 243);
}
.music header,
.music nav {
  background-color: rgb(0, 150, 136);
}
.book header,
.book nav {
  background-color: rgb(121, 85, 72);
}
.talk header,
.talk nav {
  background-color: rgb(63, 81, 181);
}
</style>
