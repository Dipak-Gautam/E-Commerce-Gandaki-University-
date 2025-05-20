import React, { useEffect, useState } from "react";
import ProductCard from "./Components/ProductCard/ProductCard";
import type { ProductSchema } from "../../Schema/data.schema";
import getProductApi from "../../Api/getProduct.api";

const Product = () => {
  const [productData, setProductData] = useState<ProductSchema[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductApi();
      setProductData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="mx-20 my-10 flex flex-wrap gap-6 justify-center space-y-6  ">
      {productData.map((item: ProductSchema) => (
        <ProductCard data={item} key={item._id} />
      ))}
    </div>
  );
};

export default Product;
