import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CryptoJS from "crypto-js";

interface CheckoutProp {
  open: boolean;
  onClose: () => void;
  amount: string;
}

const Checkout = ({ open, onClose, amount }: CheckoutProp) => {
  const [formData, setFormData] = useState({
    amount: `${amount}`,
    tax_amount: "0",
    total_amount: `${amount}`,
    transaction_uuid: uuidv4(),
    product_service_charge: "0",
    product_delivery_charge: "0",
    product_code: "EPAYTEST",
    success_url: "http://localhost:5173/payment-success",
    failure_url: "http://localhost:5173/payment-fail",
    signed_field_names: "total_amount,transaction_uuid,product_code",
    signature: "",
    secret: "8gBm/:&EnhH.1/q",
  });

  const generateSignature = (
    total_amount: any,
    transaction_uuid: any,
    product_code: any,
    secret: any
  ) => {
    const hashString = `total_amount=${total_amount},transaction_uuid=${transaction_uuid},product_code=${product_code}`;
    const hash = CryptoJS.HmacSHA256(hashString, secret);
    const hashedSignature = CryptoJS.enc.Base64.stringify(hash);
    return hashedSignature;
  };

  useEffect(() => {
    const { total_amount, transaction_uuid, product_code, secret } = formData;
    const hashedSignature = generateSignature(
      total_amount,
      transaction_uuid,
      product_code,
      secret
    );

    setFormData({ ...formData, signature: hashedSignature });
  }, [formData.amount]);
  return (
    <div
      className={`inset-0 fixed bg-gray-400/50 flex justify-center items-center ${
        open ? "visible" : "invisible"
      }`}
      onClick={() => onClose()}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className=" border-gray-200 bg-white rounded-lg flex justify-center items-center p-5"
      >
        <form
          action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
          method="POST"
        >
          <div>
            <input
              type="hidden"
              id="tax_amount"
              name="tax_amount"
              value={formData.tax_amount}
              required
            />
            <input
              type="hidden"
              id="total_amount"
              name="total_amount"
              value={formData.total_amount}
              required
            />
            <input
              type="hidden"
              id="transaction_uuid"
              name="transaction_uuid"
              value={formData.transaction_uuid}
              required
            />
            <input
              type="hidden"
              id="product_code"
              name="product_code"
              value={formData.product_code}
              required
            />
            <input
              type="hidden"
              id="product_service_charge"
              name="product_service_charge"
              value={formData.product_service_charge}
              required
            />
            <input
              type="hidden"
              id="product_delivery_charge"
              name="product_delivery_charge"
              value={formData.product_delivery_charge}
              required
            />
            <input
              type="hidden"
              id="success_url"
              name="success_url"
              value={formData.success_url}
              required
            />
            <input
              type="hidden"
              id="failure_url"
              name="failure_url"
              value={formData.failure_url}
              required
            />
            <input
              type="hidden"
              id="signed_field_names"
              name="signed_field_names"
              value={formData.signed_field_names}
              required
            />
            <input
              type="hidden"
              id="signature"
              name="signature"
              value={formData.signature}
              required
            />
          </div>
          <div className="flex flex-col gap-2 font-medium text-lg text-slate-700">
            <h1 className="text-orange-500 text-2xl font-semibold text-center">
              Check Out
            </h1>
            <div className="flex  gap-2">
              <label> Total Amount :</label>
              <div className="flex">
                <div className="mr-2">Rs. </div>
                <input
                  type="text"
                  id="amount"
                  name="amount"
                  autoComplete="off"
                  value={formData.amount}
                  onChange={({ target }) =>
                    setFormData({
                      ...formData,
                      amount: target.value,
                      total_amount: target.value,
                    })
                  }
                  required
                  className="focus:outline-none font-bold"
                />
              </div>
            </div>

            <div className="">
              <div>Name :</div>
              <input
                type="text"
                className="border border-green-100 bg-green-300  p-1 px-2 w-full rounded-md focus:outline-none"
              />
            </div>

            <div className="">
              <div>Remark:</div>
              <input
                type="text"
                className="border border-green-100 bg-green-300  p-1 px-2 w-full rounded-md focus:outline-none"
              />
            </div>

            <input
              className="p-1 px-2 bg-orange-500 text-white rounded-lg mt-6 hover:bg-orange-400 cursor-pointer"
              value="Proceed"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
