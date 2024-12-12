import Produit from "@/models/User.js";

export const createUser = async (user) => {
  try {
    const formData = new FormData();
    formData.append("name", user.name);
    formData.append("email", user.email);
    formData.append("password", user.password);

    const response = await fetch("http://localhost:4208/api/utilisateurs", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData,
    });
    const data = await response.json();
    console.log("DB 88777RAND:", data);
    return data;
  } catch (error) {
    console.error("Erreur lors de la création du User :", error);
  }
};
