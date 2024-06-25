import { markAuth } from "./utilities/auth";
// layouts/V3/Landing/BaseLayout.vue
// layouts/V4/Baselayout.vue
// layouts/GuestLayout.vue
const routes = [
  {
    path: "/",
    component: () => import("layouts/Landing/BaseLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Landing.vue"),
        name: "home",
      },
      {
        path: "/about",
        component: () => import("pages/About.vue"),
        name: "about",
      },
    ],
  },

  {
    path: "/",
    component: () => import("layouts/StaticPageLayout.vue"),
    children: [
      {
        path: "/user-agreement",
        component: () => import("pages/UserAgreement.vue"),
        name: "user-agreement",
      },
      {
        path: "/roadmap",
        component: () => import("pages/Roadmap.vue"),
        name: "roadmap",
      },
      {
        path: "/howitworks",
        component: () => import("pages/HowItWorks.vue"),
        name: "howitworks",
      },
    ],
  },

  {
    path: "/lk",
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
          path: "portfolio",
          component: () => import("pages/Lk/Portfolio.vue"),
          name: "portfolio",
        },
        {
          path: "referals",
          component: () => import("pages/Lk/Referrals.vue"),
          name: "referals",
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
