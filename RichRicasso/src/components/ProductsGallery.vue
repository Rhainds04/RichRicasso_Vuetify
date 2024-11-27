<script>
export default {
  data() {
    return {
      images: [
        '/StoreImages/shirt1.png',
        '/StoreImages/shirt2.png',
        '/StoreImages/shirt3.png',
        '/StoreImages/shirt4.png',
        '/StoreImages/shirt5.png',
      ],
    };
  },
};
</script>

<template>
  <v-app>
    <v-main>
      <v-container>
        <div class="card-container">
          <v-card v-for="(image, index) in images" :key="index" class="card-item">
            <v-img :src="image" aspect-ratio="1" class="bg-grey-lighten-2" cover></v-img>
            <v-card-title>Card</v-card-title>
            <v-card-text>
              This is card number {{ index + 1 }}.
            </v-card-text>
          </v-card>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card-item {
  flex: 0 0 calc(25% - 16px); /* Fixed size: 4 cards per row */
  max-width: calc(25% - 16px); /* Prevent stretching */
  margin: 8px;
}

@media (max-width: 600px) {
  .card-item {
    flex: 0 0 200px; /* Fixed width */
    max-width: 200px; /* Prevent stretching */
    height: 250px;    /* Fixed height */
  }
}
</style>

