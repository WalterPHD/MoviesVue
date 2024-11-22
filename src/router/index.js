import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import MovieManagerView from "@/views/MovieManagerView.vue";
import AboutView from "@/views/AboutView.vue";

const routes = [
  {
    path: "/", 
    name: "home", 
    component: HomeView,
  },
  {
    path: "/movies", 
    name: "movies", 
    component: MovieManagerView,
  },
  {
    path: "/about", 
    name: "about", 
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), 
  routes,
});

export default router;
