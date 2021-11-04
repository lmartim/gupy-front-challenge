<!--
Componente que exibe a listagem de vagas, para pessoas candidatas
-->
<template>
  <section class="gupy__candidate__register">
    <ListAllJobs target="candidate" @handle:action="jobAction" />
  </section>
</template>

<script>
import { defineComponent, reactive, computed, toRefs } from 'vue'
import { useStore } from 'vuex'

import ListAllJobs from '../ListAllJobs.vue'

export default defineComponent({
  name: 'Register',
  components: {
    ListAllJobs
  },
  setup: () => {
    const store = useStore()

    // Método que disparada a action, responsável por realizar a aplicação numa vaga
    const jobAction = async (jobId) => {
      const user = computed(() => store.getters.user)

      const data = reactive({
        ...toRefs(user.value),
        jobId
      })

      await store.dispatch('applyToJob', data)
    }

    return {
      jobAction
    }
  }
})
</script>

<style lang="scss" scoped></style>
