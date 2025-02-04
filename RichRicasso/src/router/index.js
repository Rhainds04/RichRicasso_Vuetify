// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "/",
        redirect: "/home",
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "home",
        name: "Home",
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "produits",
        name: "Produits",
        component: () => import("@/views/Produits.vue"),
      },
      {
        path: "panier",
        name: "Panier",
        component: () => import("@/views/Panier.vue"),
      },
      {
        path: "connexion",
        name: "Connexion",
        component: () => import("@/views/Connexion.vue"),
      },
      {
        path: "produits/:id",
        name: "ProduitsDetails",
        component: () => import("@/views/ProductDetails.vue"),
      },
      {
        path: "Admin",
        name: "Admin",
        component: () => import("@/views/Admin.vue"),
      },
      {
        path: "checkout",
        name: "Checkout",
        component: () => import("@/views/ProductDetails.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
