import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const Process = () => {
    localStorage.removeItem("cart");
    navigate("/");
  };

  return (
    <div
      className="flex h-[100vh] w-[100vw] justify-center items-center bg-cover bg-no-repeat "
      style={{
        backgroundImage: "url(tempBack.png)",
      }}
    >
      <div className="  text-2xl border rounded-xl shadow-xl shadow-black/60 overflow-hidden bg-white">
        <img src="PaymentSuccess.png" alt="" className="w-[600px]" />
        <div className="bg-white px-40 my-4">
          <div
            className="text-base p-2 px-3 bg-green-500  text-center font-medium text-white rounded-lg hover:bg-green-600 cursor-pointer"
            onClick={() => Process()}
          >
            Continue
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
