<template>
  <div class="flex flex-col items-center justify-center">
    <div class="flex justify-center mt-16">
      <img src="../assets/img/fto_seuvoto.svg" alt="logo-foto" />
    </div>
    <div class="flex flex-col items-center mx-auto pt-12">
      <div class="flex items-center mb-4">
        <input
          type="checkbox"
          id="termos"
          v-model="acceptedTerms"
          class="mr-2"
        />
        <label for="termos" class="text-black"
          >Li e estou de acordo com o Termo de Uso e Política de
          Privacidade.</label
        >
      </div>
      <router-link
        :class="[
          'w-36 py-2 px-4 font-bold rounded text-center',
          acceptedTerms
            ? 'bg-blue-500 hover:bg-blue-700 text-white border border-blue-700'
            : 'bg-gray-400 text-gray-800 cursor-not-allowed',
        ]"
        :to="acceptedTerms ? '/state' : '#'"
        @click.prevent="!acceptedTerms && $event.preventDefault()"
      >
        ENTRAR
      </router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedState: "",
      acceptedTerms: false,
    };
  },
};
</script>
