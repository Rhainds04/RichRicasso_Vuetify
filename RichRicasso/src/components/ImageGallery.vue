<script setup>
const images = [
  '/Images/shirt1.png',
  '/Images/shirt2.png',
  '/Images/shirt3.png',
  '/Images/shirt4.png',
  '/Images/shirt5.png',
];
</script>

<template>
    <v-card class="pa-5" style="width: 100%;">
    <h2>Summer Collection</h2>
    <v-row>
    <v-col
      v-for="image in images"
      :key="n"
      class="d-flex child-flex"
      cols="4"
    >
      <v-img
        :src="image"
        aspect-ratio="1"
        class="bg-grey-lighten-2"
        cover
      >
        <template v-slot:placeholder>
          <v-row
            align="center"
            class="fill-height ma-0"
            justify="center"
          >
            <v-progress-circular
              color="grey-lighten-5"
              indeterminate
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row>
    </v-card>
</template>
  
<style>
</style>  
