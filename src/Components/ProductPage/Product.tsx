import React from "react";
import ProductCard from "./Components/ProductCard/ProductCard";

const Product = () => {
  return (
    <div className="mx-20 my-10 flex flex-wrap gap-4 justify-center ">
      {Array.from({ length: 10 }, (_, index) => (
        <ProductCard />
      ))}
    </div>
  );
};

export default Product;
