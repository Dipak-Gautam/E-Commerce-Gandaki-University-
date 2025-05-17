import type { ProductSchema } from "../../Schema/data.schema";
import AddToCart from "../Button/AddToCart";
import StarCalc from "../ProductPage/Components/ProductCard/StarCalc";
import { IoMdArrowRoundBack } from "react-icons/io";

interface ProductDetailsProps {
  data: ProductSchema;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const ProductDetails = ({ open, setOpen, data }: ProductDetailsProps) => {
  return (
    <div
      className={`fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50 ${
        open ? "block" : "hidden"
      }`}
      onClick={() => setOpen(false)}
    >
      <div
        className="bg-white  border rounded-xl opacity-100 w-[70%] overflow-hidden flex gap-10 shadow-2xl shadow-black/50 border-gray-300 hover:shadow-xl  hover:shadow-black/50 transition-all duration-300 ease-in-out relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="absolute   top-2 left-2 z-10 bg-orange-500 p-1.5 rounded-full"
          onClick={() => setOpen(false)}
        >
          <IoMdArrowRoundBack className="text-xl text-white" />
        </div>
        <div className="relative w-[60%]">
          <img
            src="https://www.nutritionfact.in/wp-content/uploads/2022/07/cocnut-water.jpg"
            alt=""
            className="w-full h-full  object-fill "
          />
          <div className="absolute top-1 right-1 rounded-full p-2 shadow-md">
            <div className="relative ">
              <span className="text-orange-600 text-4xl">🔥</span>
              <div className="absolute bottom-1.5 flex justify-center text-white text-[10px] w-full font-medium">
                230
              </div>
            </div>
          </div>
        </div>
        <div className="w-[40%] p-5 flex-col flex  gap-4">
          <div className="text-xs text-gray-500 font-bold">{data.category}</div>
          <div className="flex justify-between items-center w-full gap-2">
            <div className="text-3xl font-bold">{data.name}</div>
            <StarCalc rating={Number(data.rating)} />
          </div>

          <div className=" text-gray-400 text-justify">{data.description}</div>
          <div className="text-xl font-semibold">ingredient</div>

          <div className="ml-7">
            <ul>
              {data.ingredients.map((ingredient, index) => (
                <li key={index} className="list-disc">
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-5 my-3">
            <AddToCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
