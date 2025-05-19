import React, { type ComponentProps } from "react";
interface OrangeButtonProp extends ComponentProps<"div"> {
  title: string;
}

const OrangeButton = ({ title, ...prop }: OrangeButtonProp) => {
  return (
    <div
      className=" p-2 border bg-orange-500 text-white font-medium w-fit px-6 rounded-lg hover:bg-orange-600 cursor-pointer"
      {...prop}
    >
      {title}
    </div>
  );
};

export default OrangeButton;
