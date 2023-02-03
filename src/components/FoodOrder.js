import React from "react";
import { datakitchenboeing } from "../datakitchen";

const FoodOrder = (props) => {
  const {
    tableId,
    handleSetTableId,
    handleCreateOrder,
    orders,
    handleCloseFoodOrder,
    handleMinusQuantity,
    handlePlusQuantity,
  } = props;
  return (
    <>
      <div className=" p-6 flex flex-col w-full bg-rose-50 fixed bottom-0 z-20 md:px-9">
        <div className="flex justify-between md:pt-4">
          <div className="flex gap-2">
            <h1 className="md:text-3xl">สั่งอาหารครัวกาตุ่ย</h1>
            <img
              className="w-[40px] h-[40px]"
              src={datakitchenboeing.order_icon}
            />
          </div>
          <div
            onClick={handleCloseFoodOrder}
            className="w-[20px] h-[20px] md:w-[40px] md:h-[40px] "
          >
            <img
              className="w-[100%] h-[100%]"
              src={datakitchenboeing.close_icon}
            />
          </div>
        </div>
        <div className="flex justify-between mt-2 md:mt-6">
          <div>
            <p className="md:text-3xl">หมายเลขโต๊ะ</p>
          </div>
          <div>
            <input
              value={tableId}
              onChange={(e) => handleSetTableId(e.target.value)}
              type="number"
              placeholder="0"
              className="bg-pink-100 text-pink-500 border border-gray-400 rounded-[5px] w-[45px] pl-[10px] md:text-3xl md:px-3 lg:w-[80px]"
            />
          </div>
        </div>
        <div className="mt-2 md:mt-7">
          <div>
            <p className="md:text-3xl">รายการอาหาร</p>
          </div>
        </div>
        {/* add .map here */}
        {orders.map((order) => (
          <div className="flex justify-between mt-2 md:mt-7">
            <div className="">
              <p className="text-rose-500 md:text-3xl">{order.name}</p>
            </div>
            <div className="">
              <button
                onClick={() => handleMinusQuantity(order.id)}
                className="bg-pink-400 text-white w-6 rounded-[5px] mr-2 md:text-3xl "
              >
                -
              </button>
              <input
                value={order.amount}
                type="number"
                className="bg-pink-100 text-pink-500  border border-gray-400 rounded-[5px] w-[45px] pl-[10px] md:text-3xl "
              />
              <button
                onClick={() => handlePlusQuantity(order.id)}
                className="bg-pink-400 text-white w-6 rounded-[5px] ml-2 md:text-3xl "
              >
                +
              </button>
            </div>
          </div>
        ))}

        <div className="mt-24 flex justify-center ">
          <button
            onClick={handleCreateOrder}
            className="bg-pink-400 text-white px-6 w-[90%] py-2 rounded-[10px] text-xl md:w-[100%] md:text-3xl md:py-4"
          >
            สั่งอาหาร
          </button>
        </div>
      </div>
    </>
  );
};

export default FoodOrder;
