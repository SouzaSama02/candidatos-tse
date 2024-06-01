<template>
  <div class="max-w-sm mx-auto flex flex-col items-center justify-center pt-6">
    <h1 class="text-4xl font-extrabold mb-6">Resultado</h1>
    <div class="bg-white text-gray-800 p-6 rounded-lg shadow-lg w-full mb-6">
      <h2 class="text-2xl font-semibold mb-2">Nome: {{ resultado.name }}</h2>
      <h2 class="text-2xl font-semibold mb-2">
        Município: {{ resultado.county }}
      </h2>
      <h2 class="text-2xl font-semibold mb-2">
        Estado: {{ resultado.selectedState }}
      </h2>
    </div>

    <button
      @click="goBack"
      class="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded"
    >
      Voltar
    </button>

    <div class="bg-white text-gray-800 p-6 rounded-lg shadow-lg w-full">
      <h3 class="text-3xl font-bold mb-4 text-center">Candidatos</h3>
      <div v-if="loading" class="text-center animate-pulse">
        Carregando dados...
      </div>
      <div v-else-if="error" class="text-red-500">
        <p>Erro ao carregar dados: {{ error }}</p>
      </div>
      <div v-else-if="apiResult && apiResult.length">
        <ul class="space-y-4 flex flex-col">
          <li
            v-for="(candidato, index) in apiResult"
            :key="index"
            class="bg-gray-100 p-4 rounded-lg shadow-sm"
          >
            <p class="text-lg font-medium">
              <strong>Codigo do Candidato:</strong>
              {{ candidato.codigo_candidato }}
            </p>
            <p class="text-lg font-medium">
              <strong>Nome:</strong> {{ candidato.nome_urna }}
            </p>
            <p class="text-lg font-medium">
              <strong>Município:</strong> {{ candidato.municipio }}
            </p>
            <p class="text-lg font-medium">
              <strong>Estado:</strong> {{ candidato.sigla_estado }}
            </p>
            <p class="text-lg font-medium">
              <strong>Grau de Instrução:</strong> {{ candidato.grau_instrucao }}
            </p>
          </li>
        </ul>
      </div>
      <div v-else>
        <p class="text-gray-700">Nenhum dado encontrado.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { callApi } from "../services/callApi.js";

export default {
  props: {
    resultado: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    const apiResult = ref(null);
    const loading = ref(true);
    const error = ref(null);

    onMounted(async () => {
      try {
        const { name, county, selectedState } = props.resultado;
        console.log("Enviando para API:", {
          nome: name,
          municipio: county,
          estado: selectedState,
        });

        const data = await callApi({
          nome: name,
          municipio: county,
          estado: selectedState,
        });

        console.log("Dados recebidos da API:", data);
        apiResult.value = data;

        // Log adicional para verificar a estrutura dos dados recebidos
        if (data.length > 0) {
          console.log("Exemplo de candidato recebido:", data[0]);
        }
      } catch (e) {
        error.value = e.message;
        console.error("Erro ao carregar dados:", e.message);
      } finally {
        loading.value = false;
      }
    });

    return {
      apiResult,
      loading,
      error,
    };
  },
};
</script>
