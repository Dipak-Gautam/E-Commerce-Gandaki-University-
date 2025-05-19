import { IoMdCart } from "react-icons/io";
import addItemToCart from "../../LocalStorage/addItemToCart";
import type { ProductSchema } from "../../Schema/data.schema";
interface AddToCartProp {
  data: ProductSchema;
}

const AddToCart = ({ data }: AddToCartProp) => {
  return (
    <div
      className="font-semibold text-white p-1 px-3 bg-orange-500 rounded-lg shadow-md shadow-orange-500/50 hover:bg-orange-600 cursor-pointer transition-all duration-300 flex items-center gap-2 w-full justify-center"
      onClick={() => addItemToCart(data)}
    >
      <IoMdCart className="text-xl" />
      <div>Add to Cart</div>
    </div>
  );
};

export default AddToCart;
