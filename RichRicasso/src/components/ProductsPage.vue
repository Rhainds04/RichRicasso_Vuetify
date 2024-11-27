<script>
import ProductsGallery from './ProductsGallery.vue';

export default {
  components: {
    ProductsGallery,
  }
};
</script>

<template>
  <v-app>
    <!-- Main Content -->
    <v-main class="mainContainer">
      <v-container>
        <ProductsGallery/>
      </v-container>
    </v-main>

    <!-- Footer -->
    <v-footer app color="primary" class="white--text"></v-footer>
  </v-app>
</template>

<style scoped>
.mainContainer {
  background-image: url("/Images/Mainbackground.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
