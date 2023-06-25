import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "../../design-system/src/main";
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },
  ],
});

createApp(App).use(router).mount("#app");
