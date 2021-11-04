<!--
Está página irá exibir duas colunas, uma exibindo um form para adicionar uma vaga e a outra contendo todas as vagas.
Quando uma vaga é criada, ela é criada como Rascunho, sendo necessário públicar a vaga, para ficar vísivel.
-->
<template>
  <Suspense>
    <template #default>
      <section class="gupy-container">
        <div class="gupy-container__block">
          <NewJob />
        </div>
        <div class="gupy-container__block">
          <ListAllJobs target="recruiter" @handle:action="jobAction" />
        </div>
      </section>
    </template>
    <template #fallback>Loading...</template>
  </Suspense>
</template>

<script>
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

import ListAllJobs from '../components/ListAllJobs.vue'
import NewJob from '../components/recruiter/NewJob.vue'

export default defineComponent({
  name: 'Recruiter',
  components: {
    ListAllJobs,
    NewJob
  },
  setup: () => {
    const store = useStore()

    // Action que será disparada, quando o botão de uma vaga for acionado.
    // Neste caso, irá publicar a vaga.
    const jobAction = async (jobId) => {
      await store.dispatch('publishJob', jobId)
    }

    return {
      jobAction
    }
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
