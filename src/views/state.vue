<template>
  <div class="max-w-sm mx-auto flex flex-col items-center justify-center">
    <!-- Div para exibir a imagem baseada no estado selecionado -->
    <div v-if="selectedState" class="my-10 w-72">
      <component :is="svgComponent" class="w-full h-auto" />
    </div>
    <form>
      <label for="state" class="block mb-2 text-sm font-medium text-gray-900">
        Selecione o seu Estado
      </label>
      <select
        v-model="selectedState"
        @change="updateImage"
        name="estado"
        id="state"
        class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option value="" disabled>Escolha o seu estado</option>
        <option v-for="state in states" :key="state.id" :value="state.acrState">
          {{ state.title }}
        </option>
      </select>
    </form>
  </div>
</template>

<script>
import undefined_flagVue from "../assets/img/flags/undefined_flag.vue";
export default {
  data() {
    return {
      selectedState: "", // Variável para armazenar o estado selecionado
      states: [
        { id: 1, acrState: "AC", title: "Acre" },
        { id: 2, acrState: "AL", title: "Alagoas" },
        { id: 3, acrState: "AM", title: "Amazonas" },
        { id: 4, acrState: "AP", title: "Amapá" },
        { id: 5, acrState: "BA", title: "Bahia" },
        { id: 6, acrState: "CE", title: "Ceará" },
        { id: 7, acrState: "DF", title: "Distrito Federal" },
        { id: 8, acrState: "ES", title: "Espírito Santo" },
        { id: 9, acrState: "GO", title: "Goiás" },
        { id: 10, acrState: "MA", title: "Maranhão" },
        { id: 11, acrState: "MG", title: "Minas Gerais" },
        { id: 12, acrState: "MS", title: "Mato Grosso do Sul" },
        { id: 13, acrState: "MT", title: "Mato Grosso" },
        { id: 14, acrState: "PA", title: "Pará" },
        { id: 15, acrState: "PB", title: "Paraíba" },
        { id: 16, acrState: "PE", title: "Pernambuco" },
        { id: 17, acrState: "PI", title: "Piauí" },
        { id: 18, acrState: "PR", title: "Paraná" },
        { id: 19, acrState: "RJ", title: "Rio de Janeiro" },
        { id: 20, acrState: "RN", title: "Rio Grande do Norte" },
        { id: 21, acrState: "RO", title: "Rondônia" },
        { id: 22, acrState: "RR", title: "Roraima" },
        { id: 23, acrState: "RS", title: "Rio Grande do Sul" },
        { id: 24, acrState: "SC", title: "Santa Catarina" },
        { id: 25, acrState: "SE", title: "Sergipe" },
        { id: 26, acrState: "SP", title: "São Paulo" },
        { id: 27, acrState: "TO", title: "Tocantins" },
      ],
      svgComponent: null, // Componente SVG a ser exibido
    };
  },
  methods: {
    async updateImage() {
      if (this.selectedState) {
        try {
          const component = await import(
            `../assets/img/flags/state${this.selectedState}.vue`
          );
          this.svgComponent = component.default || component;
        } catch (error) {
          console.error(
            `Erro ao carregar o componente SVG para o estado ${this.selectedState}:`,
            error
          );
          this.svgComponent = null;
        }
      } else {
        this.svgComponent = null;
      }
    },
  },
};
</script>
