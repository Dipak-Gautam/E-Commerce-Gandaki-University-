import React from "react";
import StarCalc from "../../ProductPage/Components/ProductCard/StarCalc";

const data = {
  id: "1",
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

const CartItem = () => {
  return (
    <div className="border rounded-xl overflow-hidden flex">
      <div>
        <img src={data.image} alt="" className="h-40" />
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
          RS.{data.price}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
