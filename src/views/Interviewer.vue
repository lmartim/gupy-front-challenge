<!--
Está página irá exibir duas colunas, uma exibindo a coluna de vagas publicadas e as aplicações realizadas.
Para visualizar as aplicações, é necessário selecionar uma vaga.
-->
<template>
  <Suspense>
    <template #default>
      <section class="gupy-container">
        <div class="gupy-container__block">
          <ListAllJobs
            target="interviewer"
            @handle:action="getJobApplications"
          />
        </div>
        <div class="gupy-container__block">
          <JobApplications />
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
import JobApplications from '../components/interviewer/JobApplications.vue'

export default defineComponent({
  name: 'Recruiter',
  components: {
    ListAllJobs,
    JobApplications
  },
  setup: () => {
    const store = useStore()

    // Action que será disparada, quando o botão de uma vaga for acionado.
    // Neste caso, irá obter as aplicações da vaga em questão.
    const getJobApplications = async (jobId) => {
      store.dispatch('getJobApplications', jobId)
    }

    return {
      getJobApplications
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
