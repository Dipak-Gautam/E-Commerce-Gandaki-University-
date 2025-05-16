import { IoMdStar } from "react-icons/io";

interface StarCalcProps {
  rating: number;
}

const StarCalc = ({ rating }: StarCalcProps) => {
  return (
    <div className="flex items-center justify-center">
      {Array.from({ length: 5 }, (_, index) => (
        <IoMdStar
          key={index}
          className={`text-xl ${
            index < rating ? "text-[#e9b635]" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

export default StarCalc;
