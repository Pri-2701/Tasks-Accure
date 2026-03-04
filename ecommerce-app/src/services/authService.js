import axios from "axios";

const API_URL = "http://localhost:5000/users";

export const registerUser = async (userData) => {
  const existing = await axios.get(`${API_URL}?email=${userData.email}`);

  if (existing.data.length > 0) {
    throw new Error("User already exists");
  }

  const response = await axios.post(API_URL, userData);
  return response.data;
};

export const loginUser = async (email, password) => {
  // 1️⃣ First find user by email only
  const response = await axios.get(
    `${API_URL}?email=${email}`
  );

  if (response.data.length === 0) {
    throw new Error("User not found");
  }

  const user = response.data[0];

  // 2️⃣ Now manually check password
  if (user.password !== password) {
    throw new Error("Invalid password");
  }

  // 3️⃣ Save in localStorage
  localStorage.setItem("user", JSON.stringify(user));

  return user;
};
