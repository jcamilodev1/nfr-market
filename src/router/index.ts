import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
// 1. Define route components.
// These can be imported from other file

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/register", component: RegisterVue },
  {
    path: "/creatorProfile",
    name: "creatorProfile",
    component: () => import("../views/CreatorProfile.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});
