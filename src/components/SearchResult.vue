<template>
  <div class="max-w-sm mx-auto flex flex-col items-center justify-center">
    <h1>Resultado</h1>
    <h2>{{ resultado }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    resultado: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
/* Adicione seu estilo aqui */
</style>
