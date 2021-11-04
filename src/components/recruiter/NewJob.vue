<!--
Form para realizar o cadastro de uma vaga nova
-->
<template>
  <section class="gupy__new-job">
    <Box>
      <div>
        <h2>Cadastrar nova vaga</h2>
      </div>
      <div class="gupy__new-job__form">
        <Input placeholder="Título da vaga" @update:input="changeValue" />
        <Button label="Cadastrar" @click="submitJob" />
      </div>
    </Box>
  </section>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'

import Box from '../Box.vue'
import Button from '../Button.vue'
import Input from '../Input.vue'

export default defineComponent({
  name: 'NewJob',
  components: {
    Box,
    Button,
    Input
  },
  setup: () => {
    const store = useStore()

    const jobTitle = ref('')

    // Método que realizar a atualização do campo do nome da vaga
    const changeValue = (newVal) => {
      jobTitle.value = newVal
    }

    // Método que dispara a action, responsável por fazer o cadastro da vaga
    const submitJob = () => {
      store.dispatch('createJob', jobTitle.value)
    }

    return {
      jobTitle,
      changeValue,
      submitJob
    }
  }
})
</script>

<style lang="scss" scoped>
.gupy__new-job {
  .gupy__box {
    flex-direction: column;
  }

  &__form {
    display: flex;

    .gupy__button__container {
      margin-left: 15px;
    }
  }
}
</style>
