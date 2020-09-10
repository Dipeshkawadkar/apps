<template>
  <div id="app">
    <input type="text" v-model="message" />
    <h4>{{ message | uppercase }}</h4>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return { message: "Hello" };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
