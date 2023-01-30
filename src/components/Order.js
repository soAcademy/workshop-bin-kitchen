import React, { useState } from "react";

const Order = () => {
  const [counter, setCounter] = useState(14);

  //const [cart, setCart] = useState([]) 
   // [{ProductID:1, quantity:1, name:ผักคะน้า}]
  // const [toggleCartPopup, toggleCartPopup] = useState() เพื่อเช็คว่าเปิด popup ว่าเปิดอยู่รึป่าว

  return (
    <div className="flex flex-col gap-2 bg-white/40 inset-0 top-0 w-1/2">
      <div className="flex justify-between">
        <p>Food order</p>
        <p>X Close</p>
      </div>
      <div className="flex justify-between">
        <p>Table No.</p>
        <label className="box-border h-7 w-20 border-2 text-center">14</label>
      </div>
      <div className="">
        <p>Order list</p>
      </div>
      <div className="flex justify-between">
        <div className="">
          <p>ผักคะน้าเห็ดหอม</p>
        </div>
        <div className="flex text-black font-semibold">
          <div className="px-3 bg-red-200">
            <button className="" onClick={() => setCounter(counter - 1)}>
              -
            </button>
          </div>
          <div className="bg-white px-4 boder-1">
            <p>{counter}</p>
          </div>

          <div className="px-3 bg-red-200">
            <button className="" onClick={() => setCounter(counter + 1)}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
