<template>
  <div class="max-w-sm mx-auto flex flex-col items-center justify-center">
    <h1>Resultado</h1>
    <h2>Nome: {{ resultado.name }}</h2>
    <h2>Município: {{ resultado.county }}</h2>
    <h2>Estado: {{ resultado.selectedState }}</h2>

    <div>
      <h3>Dados da API:</h3>
    </div>
    <div>
      <p>Carregando dados...</p>
    </div>
  </div>
</template>

<script>
import { callApi } from "../services/callApi";

export default {
  props: {
    resultado: {
      type: Object,
      required: true,
    },
  },
};
</script>
