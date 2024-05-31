<template>
  <div class="max-w-sm mx-auto flex flex-col items-center justify-center">
    <StateForm
      @input-changed="handleInputChange"
      v-if="currentStep === 1"
      @next-step="nextStep"
    />
    <SearchResult :resultado="resultado" v-if="currentStep === 2" />
  </div>
</template>

<script>
import StateForm from "../components/StateForm.vue";
import SearchResult from "../components/SearchResult.vue";

export default {
  components: {
    StateForm,
    SearchResult,
  },
  data() {
    return {
      resultado: {
        name: "",
        county: "",
        selectedState: "",
      },
      currentStep: 1,
    };
  },
  methods: {
    handleInputChange(newInput) {
      this.resultado = newInput;
    },
    nextStep() {
      this.currentStep = 2;
    },
  },
};
</script>

