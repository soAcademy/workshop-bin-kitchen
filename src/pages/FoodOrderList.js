import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import React, { useState, useEffect } from "react";
import axios from "axios";

const FoodOrderList = () => {
  const [tableId, setTableId] = useState(0);
  const [orders, setOrders] = useState([]);
  const tableList = [...Array(15).keys()]; // [0,1,2,3,...,15]
  const [updateOrderStatusFlag, setUpdateOrderStatusFlag] = useState(false);

  const updateOrderStatus = (orderId) => {
    console.log("orderId", orderId);
    axios({
      method: "post",
      url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/update-order-status",
      data: {
        order_id: orderId,
        status: "DONE",
      },
    }).then((response) => {
      console.log("updateOrder: ", response.data);
      setUpdateOrderStatusFlag(!updateOrderStatusFlag);
    });
  };

  useEffect(() => {
    axios({
      method: "post",
      url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/get-orders-by-table",
      data: {
        table_id: tableId,
      },
    })
      .then((response) => {
        console.log("orderTableId:", response.data);
        setOrders(response.data);
      })
      .catch((err) => {
        console.log("error:", err);
      });
  }, [tableId, updateOrderStatusFlag]);

  return (
    <div>
      <div className="px-4 pt-16">
        <h1 className="text-3xl text-center "> รายการสั่งอาหาร</h1>
        โต๊ะที่เลือก:{tableId}
        <div className="grid grid-cols-5 grid-flow-row gap-4 my-4">
          {tableList.map((id, index) => (
            <button
              key={index}
              onClick={() => setTableId(id + 1)}
              className="bg-red-200 active:bg-red-300 text-center py-2 rounded-full"
            >
              {id + 1}
            </button>
          ))}
        </div>
        จำนวนคำสั่งซื้อ: {orders.length}
      </div>
      {/* <div>
        {orders.map((order) => (
          <div className="rounded bg-grey-light">
            <div className="text-black">หมายเลขคำสั่ง#{order.order_id}</div>
            <div className="text-black">โต็ะ:{order.table_id}</div>
            <div className="text-black">สถานะ:{order.status}</div>
            {order.items.map((item) => (
              <div>
                <div className="text-black">{item.name}</div>
                <div className="text-black">{item.price}</div>
              </div>
            ))}
            {order.status === "WAITING" && (
              <button
                className="bg-blue-500"
                onClick={() => updateOrderStatus(order.order_id)}
              >
                ทำเสร็จแล้ว
              </button>
            )}
          </div>
        ))}
      </div> */}
      <div>
        {orders.map((order) => (
          <div className="flex  items-center justify-center bg-blue">
            {/* <!-- Card --> */}
            <card className="w-80 rounded-2xl border shadow py-2 px-8 hover:-translate-y-1 hover:shadow-2xl delay-75 duration-100">
              {/* <!-- Header & Price --> */}
              <p ClassName="text-3xl text-gray-700 font-semibold">
      
                หมายเลขคำสั่ง#{order.order_id}
              </p>
              <p ClassName="text-xl text-gray-700 font-semibold mt-1">
          
                โต็ะ:{order.table_id} สถานะ:{order.status}
              </p>
              

              {/* <!-- Description --> */}
              {order.items.map((item) => (
                <div>
                  <div className="text-sm text-gray-700 font-light  leading-7">
                    {item.name} {item.price}
                  </div>
                </div>
              ))}

              {/* <!-- CTA Button --> */}
              {order.status === "WAITING" && (
                <button
                  className="mt-5 w-full py-3 rounded-xl border border-red-600 text-red-600 hover:bg-red-600 hover:text-gray-50"
                  onClick={() => updateOrderStatus(order.order_id)}
                >
                  ทำเสร็จแล้ว
                </button>
              )}
            </card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodOrderList;
