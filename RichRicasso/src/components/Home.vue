<script>
import RichRicassoCard from './RichRicassoCard.vue';

export default {
  components: {
    RichRicassoCard,
  },
};
</script>

<template>
  <v-app>
    <!-- Main Content -->
    <v-main class="mainContainer">
      <v-container class="fill-height">
        <v-col class="justify-center d-flex flex-column">
          <v-row class="pa-5" style="width: 100%; margin: 0 auto;">
            <RichRicassoCard/>
          </v-row>
          <!--<v-row class="pa-5" style="width: 100%; margin: 0 auto;"></v-row>-->
          <v-row class="pa-5" style="width: 100%; margin: 0 auto;">
            <v-card class="pa-5" style="width: 100%;">
              <h2>Collection Vaporwave</h2>
              <p>This is the third section.</p>
            </v-card>
          </v-row>
        </v-col>
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
