import axios from "axios";

// Use the public DNS consistently for both
const API_BASE = "http://ec2-54-236-7-30.compute-1.amazonaws.com:8081/api/cart";
const API_URL = API_BASE; // Keep a single source of truth

export const addToCart = async (userId, productId) => {
  return await axios.post(`${API_BASE}/add`, {
    userId,
    productId,
    quantity: 1,
  });
};

export const getCartItems = async (userId) => {
  const response = await axios.get(`${API_BASE}/user/${userId}`);
  return response.data;
};

export const clearCart = async (userId) => {
  return await axios.delete(`${API_BASE}/clear/${userId}`);
};

// Remove Cart Item
export const removeCartItem = async (cartItemId) => {
  try {
    await axios.delete(`${API_URL}/remove/${cartItemId}`);
  } catch (error) {
    console.error("Error removing item from cart", error);
  }
};
