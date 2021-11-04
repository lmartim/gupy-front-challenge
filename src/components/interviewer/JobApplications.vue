<!--
Componente que realizar a listagem das aplicações realizadas
-->
<template>
  <section class="gupy__job-applications">
    <Box>
      <h2>Aplicações</h2>
      <template v-for="application in applications">
        <div
          v-if="application"
          :key="application.id"
          class="gupy__job-applications__application"
        >
          <div>{{ application.name }}</div>
          <div>{{ application.email }}</div>
        </div>
      </template>
      <div v-if="!applications.length">{{ emptyContentLabel }}</div>
    </Box>
  </section>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

import Box from '../Box.vue'

export default defineComponent({
  name: 'JobApplications',
  components: {
    Box
  },
  setup: async () => {
    const store = useStore()

    // Condicional que exibe a label quando a listagem está vazia
    const emptyContentLabel = computed(() => {
      const isJobSelected = computed(() => store.getters.isJobSelected)

      if (isJobSelected.value) return 'Nenhuma aplicação realizada.'
      else return 'Necessário selecionar uma vaga'
    })

    return {
      applications: computed(() => store.getters.applications),
      emptyContentLabel
    }
  }
})
</script>

<style lang="scss" scoped>
.gupy__job-applications {
  .gupy__box {
    flex-direction: column;
  }

  &__application {
    border: 1px solid #727272;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    padding: 15px;
    text-align: left;

    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
}
</style>
