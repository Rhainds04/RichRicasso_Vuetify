<template>
  <v-content class="d-flex justify-start align-start flex-row w-100">
    <div class="d-flex justify-center align-center flex-column w-100">
      <v-container
        class="d-flex flex-row justify-start flex-wrap"
        :key="produitID"
      >
        <v-fab-transition group>
          <Produit
            v-for="produit in produits"
            :produitID="produit.id"
            :price="produit.price"
            :ajouter="true"
            @ajouter="addToCart"
            :key="i"
            class="ma-3"
          />
        </v-fab-transition>
      </v-container>
    </div>
  </v-content>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useAppStore } from "@/store/app";
import Produit from "@/components/ProductsGallery.vue";
import { fetchPokemons } from "@/services/produits.service";

const produits = ref([]);
//Fetch tous les produuits pour apres les envoyer un a la fois au Pokemon.vue
onMounted(async () => {
  console.log("Fetch de tous les pokemons");

  try {
    produits.value = await fetchPokemons();
  } catch (error) {
    console.log("Erreur au moment de recuper tous les pokemons");
  }
});

// Store
//Augmenter la quantite dans le store
const store = useAppStore();

const addToCart = (id, price) => {
  console.log("DB 88: ", id);
  store.addToCart(id, price);
  // console.log("DB 558: ");
};
</script>

<style scoped></style>