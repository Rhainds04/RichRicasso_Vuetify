<script setup>
import { ref } from "vue";

const drawerOpen = ref(true);
</script>

<template color="transparent">
  <v-app-bar app flat color="primary">
    <v-app-bar-title>
      <v-btn class="text-none" stacked @click="drawerOpen = !drawerOpen">
        <v-icon v-if="drawerOpen" icon="mdi-menu-open"></v-icon>
        <v-icon v-else icon="mdi-menu"></v-icon>
      </v-btn>
      <router-link to="/" style="text-decoration: none; color: white;">
        RichRicasso
      </router-link>
    </v-app-bar-title>
    <template v-slot:append>
      <v-btn class="text-none">
        <v-badge color="red" class="rounded ma-1">
          <v-icon icon="mdi-cart-outline"></v-icon>
        </v-badge>
      </v-btn>
    </template>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawerOpen"
    @click="drawerOpen = false"
    app
    location="left"
    color="secondary"
  >
    <v-list>
      <v-list-item title="Home" to="/"></v-list-item>
      <v-list-item title="Produits" to="/products"></v-list-item>
      <v-list-item title="Contact" to="/contact"></v-list-item>
      <v-list-item title="Connexion" to="/connexion"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
</style>