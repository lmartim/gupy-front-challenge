<!--
Componente para realizar a listagem de todas as vagas
-->
<template>
  <section class="gupy__jobs-list">
    <Box>
      <h2>Listagem de Vagas</h2>
      <div class="gupy__jobs-list__jobboxes">
        <JobBox
          v-for="job in availableJobs"
          :key="job.id"
          :job="job"
          :target="target"
          @handle:action="handleAction"
        />
      </div>
    </Box>
  </section>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

import Box from './Box.vue'
import JobBox from './JobBox.vue'

export default defineComponent({
  name: 'ListAllJobs',
  components: {
    Box,
    JobBox
  },
  props: {
    // Para quem a listagem irá ser realizada
    target: String
  },
  async setup(props, { emit }) {
    const store = useStore()

    // O evento a ser disparado, no click do botão dentro do componente JobBox
    const handleAction = (jobId) => {
      emit('handle:action', jobId)
    }

    // Verifica o contexto do usuário e checa se a vaga é um rascunho ou se está publicada
    const availableJobs = computed(() => {
      const jobs = computed(() => store.getters.jobs)

      if (props.target === 'recruiter') return jobs.value
      else return jobs.value.filter((el) => el.status !== 'draft')
    })

    // Método para obter todas as vagas
    await store.dispatch('getAllJobs')

    return {
      availableJobs,
      handleAction
    }
  }
})
</script>

<style lang="scss" scoped>
.gupy__jobs-list {
  .gupy__box {
    flex-direction: column;
  }

  &__jobboxes {
    min-width: 385px;
    width: 20vw;

    .gupy__jobbox {
      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
