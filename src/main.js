import "./style.css";
import { createApp } from "vue"; // Importando a função para criar a aplicação Vue

import App from "./App.vue"; // Importando o componente App
import router from "./router"; // Importando a biblioteca para roteamento

import "./plugins/axios";

createApp(App).use(router).mount("#app"); // Criando a aplicação Vue
