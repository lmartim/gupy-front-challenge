<template>
  <section>
    <Header />
    <router-view />
  </section>
</template>

<script>
import { defineComponent } from 'vue'

import Header from './components/Header.vue'

export default defineComponent({
  components: {
    Header
  }
})
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
