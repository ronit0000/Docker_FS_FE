import axios from "axios";

// Use full public DNS with http:// prefix
const API_URL = "http://ec2-54-236-7-30.compute-1.amazonaws.com:8081/auth";

export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  // Store token safely
  localStorage.setItem("token", response.data);
  return response.data;
};

export const signup = async (username, email, password) => {
  return axios.post(`${API_URL}/signup`, { username, email, password });
};

export const logout = () => {
  localStorage.removeItem("token");
};
