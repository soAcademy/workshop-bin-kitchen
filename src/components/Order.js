import React, { useEffect, useState } from "react";
import axios from "axios";

const Order = (props) => {
  const [counter, setCounter] = useState(1);
  console.log("Order props:", props);

  //const [cart, setCart] = useState([])
  // [{ProductID:1, quantity:1, name:ผักคะน้า}]
  // const [toggleCartPopup, toggleCartPopup] = useState() เพื่อเช็คว่าเปิด popup ว่าเปิดอยู่รึป่าว


  const submitOrder = (e) => {
    e.preventDefault();
    console.log("e:", e);
    console.log("propsCart:", props.cart);
    const data = {
      table_id: e.target['tableId'].value,
      items: props.cart.map((r) => ({
        menu_id: r.id,
        price: r.price,
        quantity: r.quantity,
        total_price: r.price * r.quantity,
      })),
    };
    console.log("data", data);

    axios({
      method: "POST",
      url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/create-order",
      data: data,
    }).then((response) => {
      console.log("responseData:", response.data);
    });
  };

  // const clearAllOrder = () => {
  //   const clearData =[""]
  //   props.setCart(clearData)
  // }

  return (
    <form onSubmit={(e) => submitOrder(e)}>
      <div className="fixed inset-x-0 bottom-0 flex flex-col gap-2 bg-white w-1/2 h-auto text-2xl text-black">
        <div className="flex justify-between">
          <p>Food order</p>
          <span
            className="cursor-pointer"
            onClick={() => props.setTogglePopup(false)}
          >
            X Close
          </span>
        </div>
        <div className="flex justify-between">
          <p>Table No.</p>
          <input
            className="box-border h-7 w-20 border-2 text-center border-black"
            id="tableId"
            defaultValue={1}
          />
        </div>
        <div className="">
          <p>Order list</p>
        </div>

        {props.cart.map((r) => (
          <div className="flex justify-between">
            <div>{r.name}</div>
            <div className="flex text-black font-semibold">
              <div className="px-3 bg-red-200">
                <button className="" onClick={() => props.reduceQty(r.id)}>
                  -
                </button>
              </div>
              <div className="bg-white px-4 boder-1">
                <p>{r.quantity}</p>
              </div>

              <div className="px-3 bg-red-200">
                <button className="" onClick={() => props.addQty(r.id)}>
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-center">
          <div>
            <button
              type="submit"
              className="uppercase text-center border-1 bg-slate-200 px-7 py-2 text-2xl text-red-600"
            >
              Order
            </button>
          </div>
          {/* <div>
        <button
        onClick={() => clearAllOrder()}
        className="uppercase text-center border-1 bg-slate-200 px-7 py-2 text-2xl text-red-600"
      >
        Clear
      </button>
        </div> */}
        </div>
      </div>
    </form>
  );
};

export default Order;
