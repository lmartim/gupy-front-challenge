<!--
Um componente usado para exibir os detalhes de uma vaga
e um botão, caso necessário realizar alguma ação.
-->
<template>
  <section class="gupy__jobbox">
    <div>
      <div class="gupy__jobbox--title">{{ job.name }}</div>
      <div v-if="showStatus" class="gupy__jobbox--status">
        Status: {{ statusLabel }}
      </div>
    </div>
    <Button v-if="showButton" :label="buttonLabel" @click="handleAction" />
  </section>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

import Button from './Button.vue'

export default defineComponent({
  name: 'JobBox',
  components: {
    Button
  },
  props: {
    // Os detalhes da vaga
    job: {
      type: Object,
      required: true
    },
    // Para quem o box será renderizado
    target: {
      type: String,
      required: false,
      default: 'user'
    }
  },
  setup: (props, { emit }) => {
    const store = useStore()

    // O evento do botão, envia o id da vaga
    const handleAction = () => {
      emit('handle:action', props.job.id)
    }

    // Verifica se a label de status deve ser exibida, sendo limitada a pessoa recrutadora e pessoa candidata
    const showStatus = computed(
      () => props.target === 'recruiter' || props.target === 'candidate'
    )

    // Verifica qual deve ser o texto a ser exibido, na label de status
    const statusLabel = computed(() => {
      if (props.target === 'recruiter')
        return props.job.status === 'draft' ? 'Rascunho' : 'Publicado'

      if (props.target === 'candidate') {
        const user = computed(() => store.getters.user)
        const userHasApplied = props.job.applications.find(
          (el) => el === user.value.id
        )

        if (userHasApplied) return 'Aplicação realizada'
        else return 'Vaga aplicável'
      }

      return true
    })

    // Verifica se o botão de evento deve ser exibido, sendo limitado a pessoa recrutadora e pessoa candidata
    // Também é verificado se dentro do contexto acima, se o usuário irá ter alguma ação a ser realizada ou não
    const showButton = computed(() => {
      if (props.target === 'recruiter') {
        if (props.job.status == 'draft') return true
        else return false
      }

      if (props.target === 'candidate') {
        const user = computed(() => store.getters.user)
        const userHasApplied = props.job.applications.find(
          (el) => el === user.value.id
        )

        if (userHasApplied) return false
        else return true
      }

      return true
    })

    // A label do botão
    const buttonLabel = computed(() => {
      if (props.target === 'interviewer') return 'Ver aplicações'

      if (props.target === 'candidate') return 'Candidatar'

      if (props.target === 'recruiter') {
        if (props.job.status === 'draft') return 'Publicar'
        else return 'Publicado'
      }

      return true
    })

    return {
      buttonLabel,
      statusLabel,
      showButton,
      showStatus,
      handleAction
    }
  }
})
</script>

<style lang="scss" scoped>
.gupy__jobbox {
  align-items: center;
  border: 1px solid #727272;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  text-align: left;

  .gupy-button__container {
    margin-left: 25px;
  }

  &--title {
    font-weight: 800;
  }

  &--status {
    margin-top: 5px;
  }
}
</style>
