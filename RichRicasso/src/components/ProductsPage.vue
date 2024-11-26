<script>
import RichRicassoCard from './RichRicassoCard.vue';
import Carousel from './Carousel.vue';
import ImageGallery from './ImageGallery.vue';


export default {
  components: {
    RichRicassoCard,
    Carousel,
    ImageGallery
  },
};
</script>

<template>
  <v-app>
    <!-- Main Content -->
    <v-main class="mainContainer">
      <v-container class="fill-height">

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
