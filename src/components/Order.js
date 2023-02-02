import React, { useEffect, useState } from "react";
import axios from "axios";

const Order = (props) => {
  const [counter, setCounter] = useState(1);
 

  //const [cart, setCart] = useState([])
  // [{ProductID:1, quantity:1, name:ผักคะน้า}]
  // const [toggleCartPopup, toggleCartPopup] = useState() เพื่อเช็คว่าเปิด popup ว่าเปิดอยู่รึป่าว

  return (
    <div className="fixed inset-x-0 bottom-0 flex flex-col gap-2 bg-white w-1/2 h-60 text-2xl text-black">
      <div className="flex justify-between">
        <p>Food order</p>
        <span className="cursor-pointer" onClick={() => props.setTogglePopup(false)}>
          X Close
        </span>
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
          <p>{props.foodName.name}</p>
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
      <button className="uppercase text-center border-1 bg-slate-200 px-7 py-2 text-2xl text-red-600">Order</button>
    </div>
  );
};

export default Order;
