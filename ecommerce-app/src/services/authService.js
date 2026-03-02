import axios from "axios";

const API_URL = "http://localhost:5000/users";

export const registerUser = async (userData) => {
  // Check if email already exists
  const existing = await axios.get(`${API_URL}?email=${userData.email}`);
  if (existing.data.length > 0) {
    throw new Error("User already exists");
  }
  const response = await axios.post(API_URL, userData);
  return response.data;
};

export const loginUser = async (email, password) => {
  const response = await axios.get(`${API_URL}?email=${email}&password=${password}`);
  if (response.data.length === 0) throw new Error("Invalid credentials");
  return response.data[0];
};