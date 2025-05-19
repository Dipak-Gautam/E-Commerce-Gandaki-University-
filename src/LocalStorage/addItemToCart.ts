import type { ProductSchema } from "../Schema/data.schema";
import getItemForCart from "./getItemForCart";

const addItemToCart = (item: ProductSchema) => {
  const cartArray = getItemForCart();
  const alreadyExists = cartArray.some((cartItem) => cartItem._id === item._id);
  if (!alreadyExists) {
    cartArray.push(item);
    localStorage.setItem("cart", JSON.stringify(cartArray));
  } else {
    console.log("Item already in cart, not adding.");
  }
};

export default addItemToCart;
