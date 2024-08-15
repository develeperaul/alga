import { markAuth } from "./utilities/auth";
// layouts/V3/Landing/BaseLayout.vue
// layouts/V4/Baselayout.vue
// layouts/GuestLayout.vue
const routes = [


  {
    path: "/",
    component: () => import("layouts/Lk/Baselayout.vue"),
    children: [
      ...markAuth(
        {
          path: "profile",
          component: () => import("pages/Lk/Profile.vue"),
          name: "profile",
        },
        {
          path: "index-directive",
          component: () => import("pages/Lk/IndexDirective.vue"),
          name: "index-directive",
        },
        {
          path: "history",
          component: () => import("pages/Lk/History.vue"),
          name: "history",
        },
        {
          path: "",
          component: () => import("pages/Lk/Portfolio.vue"),
          name: "portfolio",
        },
        {
          path: "referals",
          component: () => import("pages/Lk/Referrals.vue"),
          name: "referals",
        },
        {
          path: "output-bonuses",
          component: () => import("pages/Lk/OutputBonuses.vue"),
          name: "output-bonuses",
        },
        {
          path: "support",
          component: () => import("pages/Lk/Support.vue"),
          name: "support",
        },
        {
          path: "messages",
          component: () => import("pages/Lk/Messages.vue"),
          name: "messages",
        },
        {
          path: "trading",
          component: () => import("pages/Lk/Trading.vue"),
          name: "trading",
        }
      ),
    ],
  },

  {
    path: "/",
    component: () => import("layouts/GuestLayout.vue"),
    children: [
      {
        path: "/login",
        component: () => import("pages/Auth/AuthLogin.vue"),
        name: "auth.login",
      },
      {
        path: "/registration",
        component: () => import("pages/Auth/AuthRegistration.vue"),
        name: "auth.registr",
      },
      {
        path: "/reset-password",
        component: () => import("pages/Auth/AuthResetPassword.vue"),
        name: "auth.reset-password",
      },
    ],
  },



  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
