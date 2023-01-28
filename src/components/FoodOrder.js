import React from "react";
import { datakitchenboeing } from "../datakitchen";

const FoodOrder = (props) => {
  const {
    handleCloseFoodOrder,
    handleMinusQuantity,
    handlePlusQuantity,
    quantity,
  } = props;
  return (
    <>
      <div className=" p-6 flex flex-col w-full bg-rose-50 fixed bottom-0 z-20">
        <div className="flex justify-between">
          <div>สั่งอาหาร</div>
          <div onClick={handleCloseFoodOrder} className="w-[20px] h-[20px]">
            <img
              className="w-[100%] h-[100%]"
              src={datakitchenboeing.close_icon}
            />
          </div>
        </div>
        <div className="flex justify-between mt-2">
          <div>
            <p>หมายเลขโต๊ะ</p>
          </div>
          <div>
            <input
              type="number"
              placeholder="0"
              className="bg-pink-100 text-pink-500 border border-gray-400 rounded-[5px] w-[45px] pl-[10px]"
            />
          </div>
        </div>
        <div className="mt-2">
          <p>รายการอาหาร</p>
        </div>
        <div className="flex justify-between mt-2">
          <div>
            <p>คะน้าเห็ดหอม</p>
          </div>
          <div className="">
            <button
              onClick={handleMinusQuantity}
              className="bg-pink-400 w-6 rounded-[5px] mr-2"
            >
              -
            </button>
            <input
              value={quantity}
              type="number"
              className="bg-pink-100 text-pink-500 border border-gray-400 rounded-[5px] w-[45px] pl-[10px]"
            />
            <button
              onClick={handlePlusQuantity}
              className="bg-pink-400 w-6 rounded-[5px] ml-2"
            >
              +
            </button>
          </div>
        </div>
        <div className="mt-24 flex justify-center ">
          <button className="bg-pink-400 text-white px-6 w-[90%] py-2 rounded-[10px] text-xl">
            สั่งอาหาร
          </button>
        </div>
      </div>
    </>
  );
};

export default FoodOrder;
