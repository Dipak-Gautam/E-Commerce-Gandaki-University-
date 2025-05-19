import type { ProductSchema } from "../../../Schema/data.schema";
import StarCalc from "../../ProductPage/Components/ProductCard/StarCalc";
import { IoTrashBin } from "react-icons/io5";

interface CartItemProp {
  data: ProductSchema;
}

const CartItem = ({ data }: CartItemProp) => {
  console.log("data", data);
  return (
    <div className="border rounded-xl overflow-hidden flex relative">
      <div>
        <img src={data.image} alt="" className="h-32" />
      </div>
      <div className="p-3 px-5 w-full bg-slate-50 flex justify-between">
        <div className="w-fit flex flex-col h-full justify-center gap-4">
          <div className="text-3xl font-medium">{data.name}</div>
          <StarCalc rating={Number(data.rating)} />
        </div>
        <div className="flex h-full items-center text-2xl font-semibold">
          {1}
        </div>
        <div className="text-orange-500 font-medium text-3xl flex justify-center items-center">
          Rs.{data.price}
        </div>
      </div>
      <div className="absolute right-1 top-1 bg-red-500 p-1 rounded-full">
        <IoTrashBin className="text-white cursor-pointer" />
      </div>
    </div>
  );
};

export default CartItem;
