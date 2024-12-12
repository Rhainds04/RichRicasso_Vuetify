<script setup>
import { ref, onMounted } from "vue";
import { fetchUsers } from "@/services/users.service";

const users = ref([]);

onMounted(async () => {
  console.log("Début du fetch des utilisateurs...");

  try {
    users.value = await fetchUsers();
    if (users.value.length === 0) {
      console.warn("Aucun utilisateur n'a été récupéré.");
    } else {
      console.log("Utilisateurs récupérés :", users.value);
    }
  } catch (error) {
    console.error("Erreur lors de la récupération des utilisateurs :", error);
  }
});

function addToCart(userID) {
  console.log(`Ajout de l'utilisateur avec l'ID : ${userID}`);
}
</script>

<template>
  <v-content class="d-flex justify-start align-start flex-row w-100">
    <div class="d-flex justify-center align-center flex-column w-100">
      <v-container class="d-flex flex-row justify-start flex-wrap">
        <v-fab-transition group>
          <v-card
            v-for="user in users"
            :key="user.id"
            class="ma-3"
            outlined
            max-width="300"
          >
            <!-- En-tête de la carte -->
            <v-card-title>{{ user.name }}</v-card-title>

            <!-- Corps de la carte -->
            <v-card-text>
              <p>Email : {{ user.email }}</p>
              <p>ID : {{ user.id }}</p>
            </v-card-text>
          </v-card>
        </v-fab-transition>
      </v-container>
    </div>
  </v-content>
</template>
