import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";
import Login from "../authentication/Login.vue";
import Signup from "../authentication/Signup.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Fundall",
    },
  },
  {
    path: "/authentication/Signup",
    name: "Signup",
    component: Signup,
    meta: {
      title: "Fundall | Register",
    },
  },
  {
    path: "/authentication/Login",
    name: "Login",
    component: Login,
    props: true,
    meta: {
      title: "Fundall | Login",
    },
  },
  {
    path: "/views/Dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      title: "Fundall | User Dashboard",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
