<script>
export default {
  name: 'RichRicassoCard',
  // component logic
};
</script>
<template>
    <v-card class="pa-5 responsive-card" style="width: 100%;">
              <div class="d-flex responsive-layout">
                <div>
                  <img src="/Images/RichRicasso.png" class="responsive-img" alt="RichRicasso">
                </div>
                <div class="pa-5">
                  <h1>Qui est Rich Ricasso</h1>
                  <p class="font-size-1 text-justify">
                    Rich Ricasso, le célèbre cravatier et chemisier, souhaite lancer sa boutique en ligne pour présenter sa nouvelle gamme d'été en soie unisexe.
                    Son style, inspiré du mouvement vaporwave et vaporfashion accentue les tons pastel tels que le bleu ciel, le rose poudré et le violet lavande, et a ainsi conquis le monde de l'ultra-luxe.
                    Il souhaite maintenant ouvrir sa gamme au grand public. Votre mission est de concevoir et réaliser cette plateforme, mettant en avant la singularité et le luxe des produits.
                  </p>
                </div>
              </div>
            </v-card>
</template>
<style>
.font-size-1{
    font-size: 18px;
}

.responsive-card {
    max-width: 100%;
    overflow: hidden;
}

.responsive-img {
    width: 100%;
    max-width: 500px;
    min-width: 300px;
    height: auto;
}

.responsive-layout {
    display: flex;
    flex-direction: row;
    gap: 1rem;
}

@media (max-width: 768px) {
    .responsive-layout {
        flex-direction: column;
        align-items: center;
    }
}

@media(max-width: 400px){
  .responsive-img{
    max-width: 100%;
  }
}
</style>