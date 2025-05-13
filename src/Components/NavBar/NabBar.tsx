import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { PiShoppingCartSimple } from "react-icons/pi";

const NabBar = () => {
  return (
    <div className=" p-1 flex justify-between items-center mx-24">
      <div className="flex rounded-lg overflow-hidden ">
        <img src="/logo2.jpg" className="h-16  " />
      </div>
      <div className="flex items-center gap-10">
        <div className="bg-white flex items-center rounded-md overflow-hidden border px-4">
          <input
            type="text"
            className="text-xl border-none focus:outline-none p-1"
          />
          <IoSearchSharp className="font-bold text-2xl" />
        </div>
        <div className="flex gap-1 items-center">
          <div className="relative">
            <PiShoppingCartSimple className="text-3xl" />
            <div className="bg-indigo-600 rounded-full flex justify-center items-center text-[10px] absolute w-4 h-4 text-white -right-2 -top-1">
              0
            </div>
          </div>
          <div className="border  rounded-xl p-1 px-3 text-semibold bg-orange-500 ml-4 cursor-pointer hover:bg-orange-400 text-white font-semibold">
            sign in
          </div>
        </div>
      </div>
    </div>
  );
};

export default NabBar;
