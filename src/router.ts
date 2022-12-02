import { createRouter, createWebHistory } from "vue-router";
import UserCardVue from "./components/UserCard.vue";
import AboutPage from "./pages/AboutPage.vue";
import AddressPage from "./pages/AddressPage.vue";
import NotfoundPage from "./pages/NotfoundPage.vue";

const router = createRouter({
  routes: [
    {
      name: "users",
      path: "/users",
      component: UserCardVue,
      alias: "/",
      children: [{ name: "userById", path: ":id", component: AddressPage }],
    },
    { name: "about", path: "/about", component: AboutPage },
    { name: "notFound", path: "/:notFound(.*)", component: NotfoundPage },
  ],
  history: createWebHistory(),
  linkActiveClass: "active",
});

export default router;
