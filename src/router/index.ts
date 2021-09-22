import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Headlines from "@/components/views/Headlines.vue";
import AllArticles from "@/components/views/AllArticles.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: '/headlines'
  },
  {
    path: "/top-headlines",
    name: "Headlines",
    component: Headlines,
  },
  {
    path: "/all/:q",
    name: "AllArticles",
    component: AllArticles,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
