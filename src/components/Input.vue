<!--
O componente de Input.
Estilos baseados no https://www.carbondesignsystem.com/
-->
<template>
  <div class="gupy-input-group">
    <label>{{ label }}</label>
    <input :type="type" :placeholder="placeholder" @input="handleInput" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Input',
  props: {
    // A label do input, exibida acima do campo.
    label: {
      type: String,
      default: ''
    },
    // O placeholder do input
    placeholder: {
      type: String,
      default: ''
    },
    // O tipo do input. Default como text, podendo variar entre password, number, etc.
    type: {
      type: String,
      default: 'text'
    }
  },
  setup: (props, { emit }) => {
    // O evento que é disparado quando o conteúdo do input é alterado, dispara o evento update:input,
    // enviando o valor alterado.
    const handleInput = (e) => {
      emit('update:input', e.target.value)
    }

    return {
      handleInput
    }
  }
})
</script>

<style lang="scss" scoped>
.gupy-input-group {
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    line-height: 1rem;
    margin: 0 0 0.5rem;
    text-align: left;
  }

  input {
    background: #f4f4f4;
    border: 0;
    border-bottom: 1px solid #8d8d8d;
    height: 2.5rem;
    outline: 2px solid #0000;
    outline-offset: -2px;
    padding: 0 1rem;

    &:focus {
      outline: 2px solid #0f62fe;
      outline-offset: -2px;
    }
  }
}
</style>
