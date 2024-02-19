import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../Layouts/AppLayout.vue"),
    children: [
      { path: "", name: "home", component: () => import("@/views/Home.vue") },
      { path: "/login", component: () => import("@/views/auth/Login.vue") },
      {
        path: "/register",
        component: () => import("@/views/auth/Register.vue"),
      },
      {
        path: "/creatorProfile",
        name: "creatorProfile",
        component: () => import("@/views/CreatorProfile.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
