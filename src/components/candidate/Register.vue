<!--
Componente que exibe o form de cadastro
MELHORIA: Criar função genérica, para realizar a atualização dos valores do form
-->
<template>
  <Box>
    <section class="gupy__candidate__register">
      <h2>Cadastro</h2>
      <div class="gupy__candidate__register--form">
        <Input placeholder="Nome" @update:input="changeName" />
        <Input placeholder="Email" @update:input="changeEmail" />
        <Input
          type="password"
          placeholder="Senha"
          @update:input="changePassword"
        />
        <div class="gupy__candidate__register--form__errors" v-if="errors">
          <ul>
            <li v-for="(error, key) in errors" :key="key">
              {{ error }}
            </li>
          </ul>
        </div>
        <Button label="Cadastrar" @click="submitUser" />
      </div>
    </section>
  </Box>
</template>

<script>
import { defineComponent, ref, reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

import Box from '../Box.vue'
import Button from '../Button.vue'
import Input from '../Input.vue'

export default defineComponent({
  name: 'Register',
  components: {
    Box,
    Button,
    Input
  },
  setup: () => {
    const store = useStore()
    const router = useRouter()

    const userData = reactive({
      name: '',
      email: '',
      password: ''
    })

    const errors = ref([])

    // Método para atualizar o nome do form
    const changeName = (newVal) => {
      userData.name = newVal
    }

    // Método para atualizar o email do form
    const changeEmail = (newVal) => {
      userData.email = newVal
    }

    // Método para atualizar o password do form
    const changePassword = (newVal) => {
      userData.password = newVal
    }

    // Método que dispara a action, que realizar o cadastro do usuário
    // Caso algo dê errado, exibe os campos de erro, se não, redireciona para a listagem de vagas
    const submitUser = async () => {
      errors.value = []

      const data = await store.dispatch('createUser', userData)

      if (data.message) errors.value = data.message

      router.push('/pessoa-candidata/listagem')
    }

    return {
      errors,
      changeName,
      changeEmail,
      changePassword,
      submitUser
    }
  }
})
</script>

<style lang="scss" scoped>
.gupy__candidate__register {
  width: 100%;

  &--form__errors {
    ul {
      padding-left: 25px;

      li {
        color: red;
        text-align: left;
      }
    }
  }

  .gupy__button__container {
    margin-top: 20px;
  }
}
</style>
