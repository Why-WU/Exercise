<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- <h2>{{$store.state.count}}</h2> -->
    <h3>{{count}}</h3>
    <h4>{{count1}}</h4>
    <h5>{{num}}</h5>
    <!-- <button @click="$store.commit('add')">add</button> -->
    <button @click="add(100)">add</button>
    <button @click="addActionwhy">addAction</button>
    <button @click="addActionNum">addNum</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState(["count","num"]),
    ...mapGetters(["count1"])
  },
  methods: {
    ...mapMutations(["add"]),
    ...mapActions(["addActionwhy","addActionNum"])
  }
};
</script>
