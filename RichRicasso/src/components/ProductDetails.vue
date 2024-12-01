<template>
  <v-card
    class="ma-5"
    max-width="600"
    :id="props.produitID"
    color="rgba(255,255,255,0.5)"
  >
    <v-card-title>{{ product?.name || "Chargement..." }}</v-card-title>
    <!-- <v-card-subtitle>ID : {{ product.id }}</v-card-subtitle> -->
    <v-img
      class="white--text align-end"
      height="250px"
      :src="`/Images/${product.image}`"
      :alt="`Image de ${product.name}`"
    >
    </v-img>
    <v-card-text>
      <v-list>
        <v-list-item>
          <v-list-item-title>Prix : {{ product?.price }} $</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title
            >Description : {{ product?.description }}</v-list-item-title
          >
        </v-list-item>
        <!-- Détails des tailles et quantités -->
        <v-list-item v-if="quantities.length">
          <v-list-item-title>Tailles disponibles :</v-list-item-title>
          <v-list>
            <v-list-item v-for="size in quantities" :key="size.Taille">
              <v-list-item-title
                >{{ size.Taille }} : {{ size.Quantite }} en
                stock</v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-list-item>
        <v-list-item v-else>
          <v-list-item-title>Aucune taille disponible.</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, onMounted } from "vue";
import {
  fetchPokemon,
  fetchQuantitiesById,
} from "@/services/produits.service.js";

const props = defineProps(["produitID", "ajouter"]);
defineEmits(["ajouter"]);

const caught = ref(!props.ajouter);

let product = ref({});
let quantities = ref([]);

onMounted(() => {
  console.log("Product Details for product.id = ", props.produitID);

  if (!props.produitID) {
  } else {
    fetchPokemon(props.produitID).then((data) => {
      console.log(data);
      product.value = data;
    });
    fetchQuantitiesById(props.produitID).then((data) => {
      console.log(data);
      quantities.value = data;
    });
  }
});
</script>

<style scoped>
/* Style personnalisé si nécessaire */
</style>
