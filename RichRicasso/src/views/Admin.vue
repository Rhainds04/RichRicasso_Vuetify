<script setup>
import { ref, onMounted } from "vue";
import { fetchUsers } from "@/services/users.service";
const users = ref([]);

//Fetch tous les produuits pour apres les envoyer un a la fois au Pokemon.vue
onMounted(async () => {
  console.log("Fetch de tous les produits");

  try {
    users.value = await fetchUsers();
    console.log(users.value);
  } catch (error) {
    console.log("Erreur au moment de recuper tous les users");
  }
});
</script>

<template>
  <v-content class="d-flex justify-start align-start flex-row w-100">
    <div class="d-flex justify-center align-center flex-column w-100">
      <v-container
        class="d-flex flex-row justify-start flex-wrap"
        :key="userID"
      >
        <v-fab-transition group>
          <Produit
            v-for="user in users"
            :userID="user.id"
            :price="user.price"
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

<style scoped></style>
