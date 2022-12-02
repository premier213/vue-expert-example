import { createRouter, createWebHistory } from "vue-router";
import UserCardVue from "./components/UserCard.vue";
import AboutPage from "./pages/AboutPage.vue";
import AddressPage from "./pages/AddressPage.vue";
import NotfoundPage from "./pages/NotfoundPage.vue";

const router = createRouter({
  routes: [
    {
      path: "/users",
      component: UserCardVue,
      alias: "/",
      children: [{ path: ":id", component: AddressPage }],
    },
    { path: "/about", component: AboutPage },
    { path: "/:notFound(.*)", component: NotfoundPage },
  ],
  history: createWebHistory(),
  linkActiveClass: "active",
});

export default router;
