import React from "react";
import { IoMdCart } from "react-icons/io";

const AddToCart = () => {
  return (
    <div className="font-semibold text-white p-1 px-3 bg-orange-500 rounded-lg shadow-md shadow-orange-500/50 hover:bg-orange-400 cursor-pointer transition-all duration-300 flex items-center gap-2 w-full justify-center">
      <IoMdCart className="text-xl" />
      <div>Add to Cart</div>
    </div>
  );
};

export default AddToCart;
