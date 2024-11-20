<template>
  <v-app>
  <!--NavBar-->
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>RichRicasso</v-toolbar-title>
    </v-app-bar>

      <!--Main Content-->
  <v-main>
    <v-container class="fill-height">
        <v-col class="justify-center d-flex flex-column">
            <v-row class="pa-5" style="width: 100%; margin: 0 auto;">
                <v-card class="pa-5" style="width: 100%;">
                    <h2>Qui est Rich Ricasso</h2>
                    <p>
                      Rich Ricasso, le célèbre cravatier et chemisier, souhaite lancer sa boutique en ligne pour présenter sa nouvelle gamme d'été en soie unisexe.
                      Son style, inspiré du mouvement vaporwave et vaporfashion accentue les tons pastel tels que le bleu ciel, le rose poudré et le violet lavande, et a ainsi conquis le monde de l'ultra-luxe.
                      Il souhaite maintenant ouvrir sa gamme au grand public. Votre mission est de concevoir et réaliser cette plateforme, mettant en avant la singularité et le luxe des produits.
                    </p>
                </v-card>
            </v-row>
            <v-row class="pa-5" style="width: 100%; margin: 0 auto;">
                <v-card class="pa-5" style="width: 100%;">
                    <h2>Collection Mensuelle</h2>
                    <v-carousel>
                      <v-carousel-item
                        src="/Images/shirt1.png"
                      ></v-carousel-item>

                      <v-carousel-item
                        src="/Images/shirt2.png"
                      ></v-carousel-item>

                      <v-carousel-item
                        src="/Images/shirt3.png"
                      ></v-carousel-item>
                    </v-carousel>
                </v-card>
            </v-row>
            <v-row class="pa-5" style="width: 100%; margin: 0 auto;">
                <v-card class="pa-5" style="width: 100%;">
                    <h2>Collection Vaporwave</h2>
                    <p>This is the third sction.</p>
                </v-card>
            </v-row>
        </v-col>
    </v-container>
  </v-main>

  <!--Footer-->
  <v-footer app color="grey darken-4" dark>
    <v-container class="text-center">
        <span>2024 Rich Ricasso With Vuetify</span>
    </v-container>
  </v-footer>
  </v-app>
  </template>