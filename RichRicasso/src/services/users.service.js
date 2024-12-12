import User from "@/models/User.js";

export const createUser = async (userData) => {
  console.log(userData);
  try {
    const response = await fetch("http://localhost:4208/api/utilisateurs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error("Failed to create user");
    }

    const data = await response.json();
    console.log("User creer:", data);
    return new User(data);
  } catch (error) {
    console.error("Erroe creating user: ", error);
  }
};

export const fetchUsers = async () => {
  try {
    const response = await fetch(`http://localhost:4208/api/utilisateurs`);
    const data = await response.json();
    //console.log("DB 88777RAND:", data);
    return data;
  } catch (error) {
    console.error(`Erreur lors de la récupération des Utilisateurs :`, error);
  }
};

//TODO: VOir si ca marche, pas tester
export const UpdateUser = async (userData) => {
  console.log(userData);
  try {
    const response = await fetch("http://localhost:4208/api/utilisateurs", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error("Failed to update User");
    }

    const data = await response.json();
    console.log("User creer:", data);
    return new User(data);
  } catch (error) {
    console.error("Erroe creating user: ", error);
  }
};

// Login user
export const loginUser = async (userData) => {
  try {
    const response = await fetch(
      `http://localhost:4208/api/utilisateurs/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );

    if (!response.ok) {
      throw new Error("Error logging in");
    }

    return await response.json(); // Handle the response (e.g., return the token or user info)
  } catch (error) {
    throw new Error("Error logging in user: " + error.message);
  }
};
