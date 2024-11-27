<template>
  <v-card
    :id="props.produitID"
    v-if="produit.name"
    class="mx-auto"
    width="180"
    elevation="12"
    outlined
  >
    <v-expand-transition>
      <v-img
        class="white--text align-end"
        height="200px"
        :src="`../../public/${produit.image}`"
        :alt="`Image de ${produit.name}`"
      >
      </v-img>
    </v-expand-transition>
    <v-card-title>{{ produit.name }}</v-card-title>
    <v-card-subtitle> Taille: {{ produit.size }} </v-card-subtitle>
    <v-card-text>Prix: {{ produit.price + "$" }}</v-card-text>
    <v-card-actions>
      <!-- TODO on pourait afficher les deux photos du produit -->
      <!-- <v-btn v-if="recto" color="teal-accent-4" @click="recto = false"
        >Verso</v-btn
      >
      <v-btn v-else color="deep-purple accent-4" @click="recto = true"
        >Recto</v-btn
      > 
      <v-spacer></v-spacer>
    -->
      <v-btn
        v-if="caught ? false : true"
        class="bg-red-accent-4"
        @click="
          $emit('ajouter', produit.id);
          ajouter = true;
        "
      >
        Ajouter
      </v-btn>
    </v-card-actions>
  </v-card>
  <v-skeleton-loader
    v-else
    type="card, actions"
    max-width="244"
    height="372"
    class="mx-auto"
  ></v-skeleton-loader>
</template>

<script setup>
import { ref, onMounted } from "vue";
import {
  fetchPokemon,
  fetchRandomPokemon,
} from "@/services/produits.service.js";

const props = defineProps(["produitID", "ajouter"]);
defineEmits(["ajouter"]);

// const recto = ref(true);
const caught = ref(!props.ajouter);

let produit = ref({});

//
onMounted(() => {
  console.log("DB ID 111A", props.produitID);

  if (!props.produitID) {
    // Si pokeID est est undeifned
  } else if (props.produitID === "random") {
    //Changer la fonction fetchRandomPokemon
    fetchRandomPokemon().then((data) => {
      console.log("DB RAND 111", data);
      produit.value = data;
    });
  } else {
    fetchPokemon(props.produitID).then((data) => {
      console.log(data);
      produit.value = data;
    });
  }
});
</script>

<style scoped></style>
