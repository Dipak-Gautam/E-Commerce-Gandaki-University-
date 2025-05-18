import React from "react";

interface CartSliderProp {
  open: boolean;
  setOpen: () => void;
}

const CartSlider = ({ open, setOpen }: CartSliderProp) => {
  return (
    <div
      className={`inset-0 fixed bg-white/70  ${open ? "visible" : "invisible"}`}
    >
      <div className="bg-red-500 p-5">Hello i am cart</div>
    </div>
  );
};

export default CartSlider;
