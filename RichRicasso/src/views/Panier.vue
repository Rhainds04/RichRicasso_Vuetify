<!-- TODO: corriger cecu plus tard -->
<template>
  <v-content>
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
          <Produit
            :produitID="produitID"
            @supprimer="removeFromCart"
            :index="index"
            :ajouter="false"
            yes
            :key="produitID"
          />
          <!-- <v-btn color="secondary" @click="removeFromCart(index)"
          >Supprimer du panier</v-btn> -->
        </div>
      </div>
    </v-container>
  </v-content>
</template>

<script setup>
import { useAppStore } from "@/store/app";
import Produit from "@/components/ProductsGallery.vue";

const store = useAppStore();

function removeFromCart(idx, price) {
  console.log(event.currentTarget.id);
  store.removeFromCart(idx, price);
}
</script>

<style scoped></style>
