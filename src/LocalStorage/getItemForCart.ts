import type { ProductSchema } from "../Schema/data.schema";

const getItemForCart = (): ProductSchema[] => {
  let temp = localStorage.getItem("cart");

  if (temp == null) return [];
  return JSON.parse(temp) as ProductSchema[];
};
export default getItemForCart;
