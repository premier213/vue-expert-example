import { createRouter, createWebHistory } from "vue-router";
import UserCardVue from "./components/UserCard.vue";
import AboutPage from "./pages/AboutPage.vue";
import AddressPage from "./pages/AddressPage.vue";

const router = createRouter({
  routes: [
    { path: "/users", component: UserCardVue },
    { path: "/about", component: AboutPage },
    { path: "/users/:id", component: AddressPage },
  ],
  history: createWebHistory(),
  linkActiveClass: "active",
});

export default router;
