import { useEffect, useState } from "react";
import OrangeButton from "../Button/OrangeButton";
import NabBar from "../NavBar/NabBar";
import CartItem from "./Components/CartItem";
import type { ProductSchema } from "../../Schema/data.schema";
import getItemForCart from "../../LocalStorage/getItemForCart";

const Cart = () => {
  const [cartData] = useState<ProductSchema[]>(getItemForCart());

  return (
    <div>
      <NabBar />
      <div className="mx-24">
        <div className="text-2xl font-medium  mt-6 mb-3">Your Cart</div>
        <hr />
      </div>
      <div className="mx-24 my-5 ">
        <div className="flex flex-col gap-5">
          {cartData.map((item) => (
            <CartItem data={item} key={item.id} />
          ))}
        </div>
      </div>
      <div className="mx-24 flex gap-5 p-3 px-5 text-2xl items-center">
        <div className="text-font-medium text-xl">Total</div>
        <div className="border-b w-full h-fit border-gray-300 "></div>
        <div>Rs.180</div>
      </div>
      <div className="mx-24 flex justify-end my-4">
        <OrangeButton title="Proceed" />
      </div>
    </div>
  );
};

export default Cart;
