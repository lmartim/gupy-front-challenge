<!--
O componente de Header.
Estilos baseados no https://www.carbondesignsystem.com/
-->
<template>
  <menu class="nav">
    <router-link to="/pessoa-candidata">Pessoa Candidata</router-link>
    <router-link to="/pessoa-entrevistadora">Pessoa Entrevistadora</router-link>
    <router-link to="/pessoa-recrutadora">Pessoa Recrutadora</router-link>
  </menu>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header'
})
</script>

<style lang="scss">
.nav {
  background: #161616;
  display: flex;
  margin: 0;
  padding-left: 0;

  a {
    border-top: 3px solid transparent;
    color: white;
    padding: 12px 15px 15px;
    text-decoration: none;

    &:hover {
      background: #393939;
    }
  }

  .router-link-active {
    background: #393939;
    border-color: #0f62fe;
  }
}
</style>
