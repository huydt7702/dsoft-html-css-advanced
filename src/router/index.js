import config from "@/config";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: config.routes.home,
    name: "home",
    component: () => import("@/views/ViewHome.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
