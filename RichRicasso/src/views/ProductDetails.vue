<template>
  <div>
    <ProductDetails :id="1" :produitID="productId" />
  </div>
</template>

<script setup>
import ProductDetails from "@/components/ProductDetails.vue";

import { useRoute } from "vue-router";

const route = useRoute();
const productId = route.params.id; // Récupère l'ID du produit à partir de l'URL
</script>
