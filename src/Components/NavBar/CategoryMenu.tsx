import React from "react";

const CategoryMenu = () => {
  return (
    <div className="mx-28 my-16 ">
      <div className="my-10 text-2xl font-bold">Categories</div>
      <div className="flex justify-between items-center w-[80%] mx-auto">
        <div className="flex flex-col items-center">
          <div className="bg-gray-300 rounded-full p-2 h-16 w-16 flex justify-center items-center border border-gray-300 hover:bg-gray-200 hover:shadow-md hover:shadow-gray-400 transition-all duration-300">
            <img src="/Icons/pizza.png" className="h-11  " />
          </div>

          <div className="text-lg my-1 font-sans">All</div>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-gray-300 rounded-full p-2 h-16 w-16 flex justify-center items-center border border-gray-300 hover:bg-gray-200 hover:shadow-md hover:shadow-gray-400 transition-all duration-300">
            <img src="/Icons/hamburger.png" className="h-11  " />
          </div>

          <div className="text-lg my-1 font-sans">Fast-Food</div>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-gray-300 rounded-full p-2 h-16 w-16 flex justify-center items-center border border-gray-300 hover:bg-gray-200 hover:shadow-md hover:shadow-gray-400 transition-all duration-300">
            <img src="/Icons/pizza.png" className="h-11  " />
          </div>

          <div className="text-lg my-1 font-sans">All</div>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-gray-300 rounded-full p-2 h-16 w-16 flex justify-center items-center border border-gray-300 hover:bg-gray-200 hover:shadow-md hover:shadow-gray-400 transition-all duration-300">
            <img src="/Icons/ice-cream.png" className="h-11  " />
          </div>

          <div className="text-lg my-1 font-sans">Sweets</div>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-gray-300 rounded-full p-2 h-16 w-16 flex justify-center items-center border border-gray-300 hover:bg-gray-200 hover:shadow-md hover:shadow-gray-400 transition-all duration-300">
            <img src="/Icons/drink.png" className="h-11  " />
          </div>

          <div className="text-lg my-1 font-sans">Drinks</div>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-gray-300 rounded-full p-2 h-16 w-16 flex justify-center items-center border border-gray-300 hover:bg-gray-200 hover:shadow-md hover:shadow-gray-400 transition-all duration-300">
            <img src="/Icons/noodle.png" className="h-11  " />
          </div>

          <div className="text-lg my-1 font-sans">Spicy</div>
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu;
