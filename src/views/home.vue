<template>
  <div>
    <div class="flex justify-center mt-40">
      <img src="../assets/img/fto_seuvoto.svg" alt="logo-foto" />
    </div>
    <div>
      <div class="flex justify-center flex-col mx-auto pt-28">
        <div class="flex justify-center">
          <input type="radio" id="termos" />
          <label for="termos"
            >Li e estou de acordo com o Termo de Uso e Politica de
            Privacidade.</label
          >
        </div>

        <router-link
          class="w-36 mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          to="/state"
          >ENTRAR</router-link
        >
        <router-view></router-view>
        <ListCandidates :selectedState="selectedState" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedState: "", // Certifique-se de que selectedState está definido corretamente aqui
    };
  },
};
</script>
