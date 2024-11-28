import Produit from "@/models/Produit.js";
export const fetchRandomPokemon = async () => {
  const randId = Math.floor(Math.random() * 151) + 1;
  console.log("DB 88777RAND:", randId);

  const pokemon = await fetchPokemon(randId);
  return pokemon;
};

export const fetchPokemon = async (id) => {
  try {
    const response = await fetch(
      `http://localhost:4208/api/utilisateurs/${id}`
    );
    const data = await response.json();
    console.log("DB 88777RAND:", data);
    return new Produit(data);
  } catch (error) {
    console.error(`Erreur lors de la récupération du Pokémon ${id} :`, error);
  }
};

export const fetchPokemons = async () => {
  try {
    const response = await fetch(`http://localhost:4208/api/utilisateurs`);
    const data = await response.json();
    console.log("DB 88777RAND:", data);
    return data;
  } catch (error) {
    console.error(`Erreur lors de la récupération des Pokémons :`, error);
  }
};
