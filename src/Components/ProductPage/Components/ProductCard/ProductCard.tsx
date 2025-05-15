import React from "react";
import AddToCart from "../../../Button/AddToCart";

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
    <div className="border w-80 rounded-xl overflow-hidden">
      <div>
        <img src={`${data.image}`} alt="" />
      </div>
      <div className="px-4 py-1 pb-5 flex flex-col items-center gap-2">
        <div className="text-sm  text-gray-400 m-0 p-0 -mb-2">
          {data.category}
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="text-xl font-bold text-black">{data.name}</div>
          <div>{data.rating}</div>
        </div>
        <div className="flex justify-between items-center w-full">
          <div>{data.price}</div>
          <div className="w-[60%]">
            <AddToCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
