// users.service.js
async function createUser(user) {
  try {
    const response = await fetch("http://localhost:4208/api/utilisateurs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    });
    if (!response.ok) {
      throw new Error(`Erreur ${response.status}: ${response.statusText}`);
    }
    const data = await response.json();
    console.log("DB 88777RAND:", data);
    return data;
  } catch (error) {
    console.error("Erreur lors de la création du User :", error);
    throw error;
  }
}

export const fetchUsers = async (id) => {
  try {
    const response = await fetch(`http://localhost:4208/api/utilisateurs`);
    const data = await response.json();
    console.log("DB 88777RAND:", data);
    return new Produit(data);
  } catch (error) {
    console.error(`Erreur lors de la récupération du User ${id} :`, error);
  }
};

export { createUser };
