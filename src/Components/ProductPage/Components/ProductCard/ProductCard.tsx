import { useState } from "react";
import AddToCart from "../../../Button/AddToCart";
import StarCalc from "./StarCalc";
import { TbFlameFilled } from "react-icons/tb";
import ProductDetails from "../../../ProductDetails/ProductDetails";
import type { ProductSchema } from "../../../../Schema/data.schema";

interface ProductCardSchema {
  data: ProductSchema;
}

const ProductCard = ({ data }: ProductCardSchema) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className="border w-96 rounded-xl overflow-hidden shadow-lg bg-slate-50 hover:bg-white shadow-black/30 m-3 hover:shadow-xl  hover:border-white hover:shadow-black/50 transition-all duration-300 ease-in-out"
        onClick={() => setOpen(true)}
      >
        <div className="relative">
          <img src={`${data.image}`} alt="" className="h-56 w-full" />
          <div className="absolute top-1 right-1 rounded-full p-2 shadow-md">
            <div className="relative ">
              <TbFlameFilled className="text-orange-600 text-4xl" />
              <div className="absolute bottom-1.5 flex justify-center  text-white text-[10px]  w-full font-medium">
                {data.popularity}
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-1 pb-5 flex flex-col items-center gap-3">
          <div className="text-sm  text-gray-400 m-0 p-0 -mb-2">
            {data.category}
          </div>
          <div className="flex justify-between items-center w-full gap-2">
            <div className="text-lg font-bold text-black">{data.name}</div>
            <StarCalc rating={Number(data.rating)} />
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="text-orange-500 text-2xl font-bold">
              $ {data.price}
            </div>
            <div className="w-[60%]" onClick={(e) => e.stopPropagation()}>
              <AddToCart data={data} />
            </div>
          </div>
        </div>
      </div>
      <ProductDetails open={open} setOpen={() => setOpen(false)} data={data} />
    </>
  );
};

export default ProductCard;
