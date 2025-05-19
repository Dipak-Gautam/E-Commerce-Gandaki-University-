import type { ProductSchema } from "../Schema/data.schema";
import getItemForCart from "./getItemForCart";

const addItemToCart = (item: ProductSchema) => {
  console.log("item from cart", item);
  let array = getItemForCart();
  array.push(item);
  localStorage.setItem("cart", JSON.stringify(array));
};
export default addItemToCart;
