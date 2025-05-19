import type { ProductSchema } from "../Schema/data.schema";
import getItemForCart from "./getItemForCart";

const removeItemCart = (item: ProductSchema) => {
  const cartArray: ProductSchema[] = getItemForCart();
  console.log("remove item cart called", cartArray, item);
};
export default removeItemCart;
