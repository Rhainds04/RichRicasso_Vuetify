export const fetchPokemon = async (id) => {
  try {
    //Fetch l'api
    const response = await fetch(`http://localhost:4208/api/produits`);
    const data = await response.json();
    return {
      id: data.id,
      name: data.name,
      description: data.description,
      price: data.price,
      image: data.image,
      color: data.color,
      size: data.size,
    };
  } catch (error) {
    console.error(`Erreur lors de la récupération du produit ${id} :`, error);
  }
};
