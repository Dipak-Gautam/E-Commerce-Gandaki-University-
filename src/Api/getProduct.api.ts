import type { ProductSchema } from "../Schema/data.schema";

const getProductApi = async (): Promise<ProductSchema[]> => {
  try {
    const response = await fetch(
      "https://food-app-backend-2xet.onrender.com/product/all-unauth"
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Failed to fetch product data:", error);
    return []; // fallback return to match ProductSchema[] return type
  }
};

export default getProductApi;
