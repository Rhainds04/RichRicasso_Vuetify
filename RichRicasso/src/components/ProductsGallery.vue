<template>
  <v-card
    :id="props.produitID"
    v-if="produit.name"
    class="mx-auto"
    width="250"
    elevation="12"
    outlined
    color="rgba(255,255,255,0.5)"
  >
    <v-expand-transition>
      <v-img
        class="white--text align-end"
        height="200px"
        :src="`public/${produit.image}`"
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
        class="bg-purple-accent-4"
        @click="
          $emit('ajouter', produit.id);
          ajouter = true;
        "
      >
        Ajouter
      </v-btn>
      <v-btn
        v-else="caught ? false : true"
        class="bg-purple-accent-4"
        @click="
          $emit('supprimer', props.index);
          ajouter = false;
        "
      >
        Supprimer
      </v-btn>
      <v-btn class="bg-purple-accent-4"> Voir </v-btn>
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
import { fetchPokemon } from "@/services/produits.service.js";

const props = defineProps(["produitID", "ajouter", "index"]);
defineEmits(["ajouter", "supprimer"]);

// const recto = ref(true);
const caught = ref(!props.ajouter);

let produit = ref({});

onMounted(() => {
  console.log("DB ID 111A", props.produitID);

  if (!props.produitID) {
    // Si pokeID est est undeifned
    //ca affiche rien sauf le skellete
  } else {
    fetchPokemon(props.produitID).then((data) => {
      console.log(data);
      produit.value = data;
    });
  }
});
</script>
<style scoped></style>
