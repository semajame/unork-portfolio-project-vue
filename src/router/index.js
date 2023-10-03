import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import News from "../views/News.vue";
import Contact from "../views/Contact.vue";
import Template from "../views/Template.vue";
import StyleGuide from "../views/StyleGuide.vue";
import ImageLicensing from "../views/ImageLicensing.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/news",
    name: "news",
    component: News,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/template",
    name: "template",
    component: Template,
  },
  {
    path: "/style-guide",
    name: "style-guide",
    component: StyleGuide,
  },
  {
    path: "/image-licensing",
    name: "image-licensing",
    component: ImageLicensing,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: "smooth" });
  next();
});

export default router;
