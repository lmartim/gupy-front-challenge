<!--
Página base, exibe o box de cadastro do usuário.
-->
<template>
  <Suspense>
    <template #default>
      <section class="gupy-container">
        <div class="gupy-container__block">
          <Register />
        </div>
      </section>
    </template>
    <template #fallback>Loading...</template>
  </Suspense>
</template>

<script>
import { defineComponent } from 'vue'

import Register from '../components/candidate/Register.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Register
  },
  setup: () => {}
})
</script>

<style lang="scss" scoped>
.gupy-container {
  background: rgb(168, 168, 168);
  display: flex;
  min-height: 100vh;
  justify-content: space-around;
  padding: 15px;
  position: relative;

  &__block {
    width: 40%;
  }
}
</style>
