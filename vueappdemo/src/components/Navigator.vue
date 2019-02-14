<template>
  <div>
    <header></header>
    <nav>
      <ul>
        <li></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          name: "聊天",
          path: "/talk"
        },
        {
          name: "电影",
          path: "/movie"
        }
      ]
    };
  }
};
</script>