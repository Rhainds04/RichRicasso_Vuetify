<template>
  <v-content>
    <v-container fluid class="d-flex flex-column flex-md-row overflow-auto">
      <!-- Colonne des produits -->
      <div class="d-flex flex-wrap flex-grow-1 gap-4">
        <h1  v-if="store.totalPrice <= 0" class="w-100 whiteColor">Ajouter des produits</h1>
        <div
          v-for="(produitID, index) in store.panier"
          :key="produitID"
          class="product-item"
        >
          <Produit
            :produitID="produitID"
            @supprimer="removeFromCart"
            :index="index"
            :ajouter="false"
          />
        </div>
      </div>

      <!-- Colonne pour le prix total et le checkout -->
      <div
        v-if="store.totalPrice > 0"
        class="d-flex flex-column align-items-start px-4 priceContainer"
        style="min-width: 300px"
      >
        <h2>Prix total: {{ store.totalPrice }}$</h2>
        <v-btn href="http://localhost:4242/checkout.html" color="primary">
          Passer à la caisse
        </v-btn>
      </div>
    </v-container>
  </v-content>
</template>

<script setup>
import { useAppStore } from "@/store/app";
import Produit from "@/components/ProductsGallery.vue";

const store = useAppStore();

function removeFromCart(idx, price) {
  store.removeFromCart(idx, price);
}
</script>

<style scoped>
/* Espacement entre les éléments */
.v-container {
  gap: 16px;
}

/* Style pour aligner les produits horizontalement */
.product-item {
  flex: 1 1 calc(33.333% - 16px); /* Occupe un tiers de la largeur disponible */
  max-width: calc(33.333% - 16px);
  box-sizing: border-box;
}

/* Pour les petits écrans, ajuster la largeur */
@media (max-width: 768px) {
  .product-item {
    flex: 1 1 calc(50% - 16px); /* Occupe la moitié de la largeur disponible */
    max-width: calc(50% - 16px);
  }
}

@media (max-width: 480px) {
  .product-item {
    flex: 1 1 100%; /* Occupe toute la largeur disponible */
    max-width: 100%;
  }
}

.whiteColor{
  color: white;
}

.priceContainer{
  background-color: white;
  opacity: .8;
  border-radius: 10px;
  max-height: 400px;
}
</style>
