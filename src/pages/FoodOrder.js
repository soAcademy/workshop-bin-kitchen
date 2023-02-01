import React from "react";
import { datakitchenboeing } from "../datakitchen";
import { useNavigate } from "react-router-dom";

const FoodOrder = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-6 mt-5">
      <div className="bg-rose-500 p-2">
        <h1 className="text-center text-white">รายการสั่งอาหาร</h1>
      </div>
      <div className="mt-5">
        <p className="mb-3 text-xl">กดเลือกโต๊ะ</p>
        {/* add map here */}
        <div className="grid grid-cols-5 gap-2">
          {datakitchenboeing.table.map((numbertable) => (
            <div
              key={numbertable}
              className="bg-rose-400 text-center p-2 rounded-md text-white"
            >
              {numbertable}
            </div>
          ))}
        </div>
      </div>
      {/* component to show detail about order menu and calculate price*/}
      <button
        className="mt-6 bg-rose-300 p-2 rounded-[10px] text-white"
        onClick={() => navigate("/")}
      >
        Back To Home Page {"<<"}{" "}
      </button>
    </div>
  );
};

export default FoodOrder;
