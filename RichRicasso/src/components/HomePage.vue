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
        <v-col class="justify-center d-flex flex-column">
          <v-row class="pa-5" style="width: 100%; margin: 0 auto">
            <RichRicassoCard />
          </v-row>
          <v-row class="pa-5" style="width: 100%; margin: 0 auto;">
            <Carousel/>
          </v-row>
          <v-row class="pa-5" style="width: 100%; margin: 0 auto;">
              <ImageGallery/>
          </v-row>
        </v-col>
      </v-container>
    </v-main>

    <!--Footer-->
    <v-footer>
      
    </v-footer>
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
