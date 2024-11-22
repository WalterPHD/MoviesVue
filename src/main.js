import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Importa o roteador

// Cria e monta o aplicativo Vue com as rotas
createApp(App).use(router).mount("#app");

