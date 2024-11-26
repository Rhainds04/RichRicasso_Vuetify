<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

const config = {
  itemsToShow: 3.95,
  wrapAround: true,
  transition: 500,
};

// Array of image URLs
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
      <Carousel v-bind="config">
        <Slide v-for="(image, index) in images" :key="index">
          <div class="carousel__item">
            <img :src="image" :alt="'Slide ' + (index + 1)" class="carousel__image" />
          </div>
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </v-card>
  </template>
  

  <style>
  .carousel__item { 
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  
  .carousel__image {
    width: 90%;
    height: auto;
    border-radius: 8px;
  }
  </style>  
