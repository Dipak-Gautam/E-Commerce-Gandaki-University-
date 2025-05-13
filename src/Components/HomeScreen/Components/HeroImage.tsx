import React from "react";

const HeroImage = () => {
  return (
    <div className="flex px-32 my-8">
      <div className="bg-[url('/FoodHeroImage.jpeg')]  w-full h-[630px] border bg-cover rounded-2xl opacity-90 p-5 flex flex-col justify-center gap-8">
        <div className="text-white font-bold mx-16 text-7xl">
          <div>Order Your</div>
          <div>favorite food here</div>
        </div>
        <div className="mx-16 w-[60%] font-medium text-gray-100 text-xl text-glow">
          "Discover fresh, delicious meals and ingredients delivered right to
          your door. From farm-fresh produce to ready-to-eat favorites, we make
          shopping for food easy, fast, and affordable. Enjoy the taste of
          quality with every bite!"
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
