<!--
Um componente que monta uma caixa branca em volta de seu conteúdo.
-->
<template>
  <section class="gupy__box">
    <slot />
  </section>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Box'
})
</script>

<style lang="scss" scoped>
.gupy__box {
  background: rgb(244, 244, 244);
  border-radius: 8px;
  display: flex;
  margin: 0 auto;
  padding: 15px;
  width: 100%;
}
</style>
