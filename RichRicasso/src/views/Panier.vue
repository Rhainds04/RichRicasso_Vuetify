<!-- TODO: corriger cecu plus tard -->
<template>
  <v-container
    fluid
    class="d-flex flex-column flex-md-row flex-start overflow-auto"
  >
    <!-- TODO: btn pour effacer tout les produits du panier -->
    <!-- <v-btn @click="store.deleteCart()" color="error" class="ma-1">
      Supprimer le panier
    </v-btn> -->

    <div class="d-flex flex-column flex-md-row flex-wrap flex-start ga-3">
      <div v-for="(produitID, index) in store.panier" :key="pokeID">
        <Produit :produitID="produitID" :ajouter="false" yes :key="pokeID" />
        <v-btn color="secondary" @click="removeFromCart(index)"
          >Supprimer du panier</v-btn
        >
      </div>
    </div>
  </v-container>
</template>

<script setup>
import { useAppStore } from "@/store/app";
import Produit from "@/components/ProductsGallery.vue";

const store = useAppStore();

function removeFromCart(idx) {
  console.log(event.currentTarget.id);
  store.removeFromCart(idx);
}
</script>

<style scoped></style>
