<template>
  <div>
    <p>Dados {{ selectedState }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedState: "", // Inicialmente vazio, será preenchido pelo parâmetro da rota
    };
  },
  mounted() {
    // Acessando o parâmetro da rota
    this.selectedState = this.$route.params.selectedState;
    console.log("Parâmetro da rota selectedState:", this.selectedState);

    // Forçar a atualização da visualização após a atualização assíncrona da variável selectedState
    this.$forceUpdate();
  },
};
</script>
