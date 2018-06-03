import Vue from "vue";
import Router from "vue-router";
import store from "./store";
import AuthenticationService from "@/services/AuthenticationService";

import Home from "./views/Home.vue";
import Post from "./views/Post.vue";

// -- Auth Views
import Register from "./views/Register.vue";
import Login from "./views/Login.vue";

// -- Dashboard Views
import Dashboard from "./views/Dashboard/Index.vue";
import DashboardHome from "./views/Dashboard/Home.vue";
import Settings from "./views/Dashboard/Settings.vue";
import DashboardPostList from "./views/Dashboard/Post/List.vue";
import DashboardPostCreate from "./views/Dashboard/Post/Create.vue";
import DashboardPostEdit from "./views/Dashboard/Post/Edit.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/post/:id",
      name: "post",
      component: Post
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      redirect: { name: "dashboard.home" },
      meta: { requiresAuth: true },
      children: [
        {
          path: "home",
          name: "dashboard.home",
          component: DashboardHome
        },
        {
          path: "settings",
          name: "settings",
          component: Settings
        },
        {
          path: "post",
          name: "dashboard.post",
          component: DashboardPostList
        },
        {
          path: "post/create",
          name: "dashboard.post.create",
          component: DashboardPostCreate
        },
        {
          path: "post/:id",
          name: "dashboard.post.edit",
          component: DashboardPostEdit
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (store.getters.hasToken) {
    AuthenticationService.request();
  }

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.hasToken) {
      next({
        path: "/login",
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
