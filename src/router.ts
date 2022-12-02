import { createRouter, createWebHistory } from "vue-router";
import UserCardVue from "./components/UserCard.vue";
import AboutPage from "./pages/AboutPage.vue";
import AddressPage from "./pages/AddressPage.vue";
import NotfoundPage from "./pages/NotfoundPage.vue";
import FooterSection from "./components/FooterSection.vue";

const router = createRouter({
  routes: [
    {
      name: "users",
      path: "/users",
      components: { default: UserCardVue, footer: FooterSection },
      alias: "/",
      children: [{ name: "userById", path: ":id", component: AddressPage }],
    },
    { name: "about", path: "/about", component: AboutPage },
    { name: "notFound", path: "/:notFound(.*)", component: NotfoundPage },
  ],
  history: createWebHistory(),
  linkActiveClass: "active",
  scrollBehavior(to, from, saved) {
    if (saved) {
      return saved;
    }
    return {
      top: 0,
      left: 0,
    };
  },
});

export default router;
