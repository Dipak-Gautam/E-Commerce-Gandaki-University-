import React from "react";
import NabBar from "../NavBar/NabBar";
import CartItem from "./Components/CartItem";

const Cart = () => {
  return (
    <div>
      <NabBar />
      <div className="mx-24">
        <div className="text-2xl font-medium  mt-6 mb-3">Your Cart</div>
        <hr />
      </div>
      <div className="mx-24 my-5 ">
        <div className="flex flex-col gap-5">
          <CartItem />
        </div>
      </div>
    </div>
  );
};

export default Cart;
