<template>
  <div class="max-w-sm mx-auto flex flex-col items-center justify-center">
    <StateForm v-if="currentStep === 1" @next-step="currentStep = 2"/>
    <SearchResult :resultado="'resultado da busca'" v-if="currentStep === 2"/>
  </div>
</template>

<script>
import StateForm from '../components/StateForm.vue'
import SearchResult from '../components/SearchResult.vue';

export default {
  components: {
    StateForm,
    SearchResult,
  },
  data: () =>  ({
    currentStep: 1,
  }),
  methods: {
  
  },
};
</script>
