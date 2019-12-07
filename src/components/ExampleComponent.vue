<template>
  <div>
    <h2>Vue.js boilerplate with pre-installed Vue Router, Vuex and Axios</h2>
    <h3>{{ vuexMsg }}</h3>
    <div class="mt-5 mb-5">
      <p><strong>No-console rule set to off</strong></p>
      <p><strong>Bootstrap 4 CDN included</strong></p>
    </div>
    <p style="color: ltgrey; font-size: 14px;">Created and maintained by Arsen Sekularac</p>
    <a href="https://github.com/arsen-a" target="_blank">GitHub</a>
    <a href="https://www.facebook.com/sekularac.a" target="_blank">Facebook</a>
  </div>
</template>

<script>
export default {
  name: "ExampleComponent",
  computed: {
    vuexMsg() {
      return this.$store.state.exampleData
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  margin: 0 10px 0 10px;
}
</style>
