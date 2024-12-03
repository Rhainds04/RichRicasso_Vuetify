// Utilities

import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => {
    //
    if (localStorage.getItem("panier")) {
      return {
        panier: JSON.parse(localStorage.getItem("panier")),
        totalPrice: JSON.parse(localStorage.getItem("totalPrice")),
        user: "Prof",
      };
    }
    return { panier: [], user: "Prof", totalPrice: 0.0 };
  },
  actions: {
    addToCart(produitID, price) {
      console.log(produitID);
      console.log(price);
      this.panier.push(produitID);
      this.totalPrice += parseFloat(price);
      localStorage.setItem("panier", JSON.stringify(this.panier));
      localStorage.setItem("totalPrice", this.totalPrice);
    },
    removeFromCart(index, price) {
      // const index = this.panier.indexOf(Number(pokemonID))
      this.panier.splice(index, 1);
      this.totalPrice -= parseFloat(price);
      this.panier = [...this.panier];
      localStorage.setItem("panier", JSON.stringify(this.panier));
      localStorage.setItem("totalPrice", this.totalPrice);
    },
    deleteCart() {
      this.panier = [];
      localStorage.removeItem("panier");
    },
  },
});
