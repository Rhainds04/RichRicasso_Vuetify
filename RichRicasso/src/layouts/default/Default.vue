<template>
  <v-app class="mainContainer">
    <default-bar />
    <default-view />
  </v-app>
</template>

<script setup>
import DefaultBar from "./AppBar.vue";
import DefaultView from "./View.vue";
</script>

<style scoped>
.mainContainer {
  background-image: url("/Images/Mainbackground.png") !important;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
