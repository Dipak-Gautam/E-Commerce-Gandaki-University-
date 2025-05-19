import type { ProductSchema } from "../Schema/data.schema";
import getItemForCart from "./getItemForCart";

const removeItemCart = (
  item: ProductSchema,
  setCartData: React.Dispatch<React.SetStateAction<ProductSchema[]>>
) => {
  const cartArray: ProductSchema[] = getItemForCart();
  const updatedCart = cartArray.filter((cartItem) => cartItem._id !== item._id);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  setCartData(updatedCart);
};

export default removeItemCart;
