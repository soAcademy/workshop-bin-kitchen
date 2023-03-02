import React, { useState } from "react";
import axios from "axios";

const CartPop = ({ cart, setCart, setToggleCart }) => {
  const [tableId, setTableId] = useState(1);
  // สร้าง state มาเก็บค่า ไอดี ของโต๊ะ
  // console.log("testAddMenus:", props.cart); // เอาไว้เช็คออเดอร์

  const handleUpdates = (r, updatedQty) => {
    if (updatedQty === 0) {
      setCart(cart.filter((c) => c.id !== r.id));
      // ลบ qty เป็น 0 ให้ออกจาก cart
    } else {
      const updateCart = cart.map((orderItem) => {
        if (orderItem.id === r.id) {
          return {
            ...orderItem,
            qty: updatedQty,
          };
        }
        return orderItem;
      });
      setCart(updateCart);
    }
  };

  // const limitTable = () => (tableId <= 15 ? tableId : "15");

  const addOrder = () => {
    const orderItem = cart.map((order) => {
      return {
        menuId: order.id,
        price: order.price,
        quantity: order.qty,
        totalPrice: order.qty * order.price,
      };
    });
    // ทำแบบฟรอมข้อมูลให้ตรงกับ api ต้องการ
    console.log("mapData", orderItem);
    const dataOutputApi = {
      tableId: Number(tableId),
      orderItem: orderItem,
    };
    // รวมไอดีโต๊ะ + ข้อมูลที่ปรับแล้ว เพื่อส่งไปยัง api
    console.log("data", dataOutputApi);
    const config = {
      method: "post",
      url: "http://localhost:3100/createOrder",
      headers: {
        "Content-Type": "application/json",
      },
      data: dataOutputApi,
    };

    axios(config)
      .then(function (response) {
        setCart([]);
        console.log("api create order", response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="w-full h-screen fixed flex items-end bg-gray-500/30 backdrop-blur-sm bottom-0 left-0">
      <div className="w-full h-3/5 fixed flex flex-col bg-white p-5">
        <div className="flex">
          <h1 className="flex-auto">สั่งอาหาร</h1>
          <span className="cursor-pointer" onClick={() => setToggleCart(false)}>
            ปิด
          </span>
        </div>
        <div className="mt-7 flex justify-between">
          <p>หมายเลขโต๊ะ</p>
          <div className="border-2 border-gray-300 rounded-lg">
            <input
              type="number"
              // max="15"
              // min="1"
              pattern="[0-15]"
              onChange={(e) => setTableId(e.target.value)}
              className="my-1 w-[40px] h-[30px] text-center"
            />
          </div>
        </div>
        <div className="mt-5 pb-5 border-b-4 border-gray-300">
          <p>รายการ</p>
        </div>
        <div className="overflow-y-auto p-5">
          {cart.map((r, idx) => (
            <div key={idx} className="flex flex-cols my-3 justify-between">
              <p className="mt-2">{r.name}</p>
              <div className="flex flex-rows">
                <button
                  onClick={() => handleUpdates(r, r.qty - 1)}
                  className="w-8 bg-red-100 rounded"
                >
                  -
                </button>
                <div className="w-[48px] h-[35px] text-center border-2 border-gray-300 mx-2">
                  <p className="py-1">{r.qty}</p>
                </div>
                <button
                  onClick={() => handleUpdates(r, r.qty + 1)}
                  className="w-8 bg-red-100 rounded"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
        <div>
          <button
            onClick={() => {
              addOrder();
              setToggleCart(false);
            }}
            type="submit"
            className="px-4 py-2 bg-red-100 active:bg-red-300 rounded w-full font-bold"
          >
            สั่งอาหาร
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPop;
