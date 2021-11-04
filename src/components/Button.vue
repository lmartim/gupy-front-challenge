<!--
O componente de botão.
Estilos baseados no https://www.carbondesignsystem.com/
-->
<template>
  <div class="gupy__button__container">
    <button class="gupy__button" :class="classes">
      {{ label }}
    </button>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'Button',
  props: {
    // Prop que irá exibir a label do botão
    label: {
      type: String,
      default: 'Label'
    },
    // O tipo do botão. No momento, possui só o tipo primary configurado.
    type: {
      type: String,
      default: 'primary'
    }
  },
  setup: (props) => {
    // Monta as classes do botão, de acordo com as props
    const classes = computed(() => {
      return ['type-' + props.type]
    })

    return {
      classes
    }
  }
})
</script>

<style lang="scss" scoped>
.gupy__button__container {
  display: flex;

  .gupy__button {
    align-items: center;
    border-radius: 0;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-flex;
    font-size: 14px;
    min-width: 145px;
    letter-spacing: 0.16px;
    line-height: 1.2;
    padding: 10px 63px 10px 15px;

    &.type-primary {
      background-color: #0f62fe;
      border: 1px solid #0000;
      color: #fff;

      &:hover {
        background-color: #0353e9;
      }
    }
  }
}
</style>
