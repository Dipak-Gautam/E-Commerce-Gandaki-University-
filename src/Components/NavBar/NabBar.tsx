import { IoSearchSharp } from "react-icons/io5";
import { PiShoppingCartSimple } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import getItemForCart from "../../LocalStorage/getItemForCart";

const NabBar = () => {
  const navigate = useNavigate();
  return (
    <div className="  flex justify-between items-center mx-20">
      <div
        className="flex rounded-lg overflow-hidden  cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src="/logo2.jpg" className="h-16  " />
      </div>
      <div className="flex items-center gap-10">
        <div className="bg-white flex items-center rounded-md overflow-hidden border px-4">
          <input
            type="text"
            className="text-xl border-none focus:outline-none p-1"
          />
          <IoSearchSharp className="font-bold text-2xl text-gray-600" />
        </div>
        <div className="flex gap-1 items-center">
          <div
            className="relative  cursor-pointer"
            onClick={() => navigate("/cart")}
          >
            <PiShoppingCartSimple className="text-3xl text-gray-600 font-bold hover:text-gray-700 hover:scale-105" />
            <div className="bg-indigo-600 rounded-full flex justify-center items-center text-[10px] absolute w-4 h-4 text-white -right-2 -top-1">
              {getItemForCart().length}
            </div>
          </div>
          <div className="border  rounded-xl p-2 px-5 text-semibold bg-orange-500 ml-4 cursor-pointer hover:bg-orange-400 text-white font-semibold">
            sign in
          </div>
        </div>
      </div>
    </div>
  );
};

export default NabBar;
