<template>
  <div id="app">
    <CommonHeader :selectMenu="selectMenu"></CommonHeader>
    <router-view class="content" @matchTab="matchTab"/>
    <CommonFooter :footerbgc="selectMenu.bgc" :menuList="menuList"></CommonFooter>
  </div>
</template>

<script>
import CommonHeader from "@/components/CommonHeader.vue";
import CommonFooter from "@/components/CommonFooter.vue";
export default {
  components: {
    CommonHeader,
    CommonFooter
  },
  methods: {
    matchTab(menuName) {
      this.menuList.forEach(menu => {
        if(menu.name === menuName){
          this.selectMenu = menu;
        }
      });
    }
  },
  data() {
    return {
      menuList: [
        {
          title: "聊天",
          bgc: "#ffff00",
          name: "talk",
          path: "/talk"
        }
      ],
      selectMenu:{}
    };
  }
};
</script>

