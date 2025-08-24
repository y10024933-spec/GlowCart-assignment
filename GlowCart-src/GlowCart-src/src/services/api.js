import axios from "axios";

const API_URL = "https://dummyjson.com/products";

export const getCosmetics = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data.products.filter(item =>
      (item.title || "").toLowerCase().includes("cream") ||
      (item.title || "").toLowerCase().includes("lipstick") ||
      (item.title || "").toLowerCase().includes("mascara") ||
      (item.category || "").toLowerCase().includes("beauty")
    );
  } catch (error) {
    console.error("API error:", error?.message);
    return [];
  }
};
