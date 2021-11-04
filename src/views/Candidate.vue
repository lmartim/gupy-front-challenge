<!--
Está página irá exibir os componentes de registro e listagem de vagas aplicáveis
Alternando de acordo com o status do usuário
-->
<template>
  <Suspense>
    <template #default>
      <section class="gupy-container">
        <div class="gupy-container__block">
          <router-view />
        </div>
      </section>
    </template>
    <template #fallback>Loading...</template>
  </Suspense>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Candidate',
  setup: () => {
    const store = useStore()
    const router = useRouter()

    // Realizado o condicional de status do usuário.
    // Caso usuário esteja logado, é redirecionado para listagem de vagas.
    // Caso contrário, vai para a página de registro.
    const redirectUser = () => {
      if (!isUserLogged.value) {
        router.push('/pessoa-candidata/registro')
      } else {
        router.push('/pessoa-candidata/listagem')
      }
    }

    const isUserLogged = computed(() => store.getters.isUserLogged)
    redirectUser()
  }
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
