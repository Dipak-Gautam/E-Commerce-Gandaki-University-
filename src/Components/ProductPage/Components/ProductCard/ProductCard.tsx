import React from "react";
import AddToCart from "../../../Button/AddToCart";
import StarCalc from "./StarCalc";
import { TbFlameFilled } from "react-icons/tb";

const data = {
  _id: {
    $oid: "67715ff8c82db42996cf3087",
  },
  image:
    "https://www.nutritionfact.in/wp-content/uploads/2022/07/cocnut-water.jpg",
  name: "Coconut Water",
  rating: "5",
  category: "Drinks",
  popularity: 230,
  price: 180,
  description:
    "Chilled coconut water infused with tender coconut pieces, lime juice, and a hint of honey, served over ice for a tropical refreshment.",
  ingredients: [
    "Coconut water",
    "Tender coconut pieces",
    "Lime juice",
    "Honey",
    "Ice cubes",
    "Mint leaves",
  ],
};

const ProductCard = () => {
  return (
    <div className="border w-72 rounded-xl overflow-hidden shadow-lg bg-slate-50 hover:bg-white shadow-black/30 m-3 hover:shadow-xl  hover:border-white hover:shadow-black/50 transition-all duration-300 ease-in-out">
      <div className="relative">
        <img src={`${data.image}`} alt="" />
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
          <div className="w-[60%]">
            <AddToCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
