import { createRouter, createWebHistory } from "vue-router";
import ListCandidates from "../views/ListCandidates.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/home.vue"),
    },
    {
      path: "/state",
      name: "state",
      component: () => import("../views/state.vue"),
    },
    {
      path: "/list-candidates/:selectedState", // Definindo o parâmetro de rota :selectedState
      name: "ListCandidates",
      component: ListCandidates,
    },
  ],
});

export default router;
