import React, { useState, useEffect } from "react";
// import { datakitchenboeing } from "../datakitchen";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FoodOrder = () => {
  const [tableId, setTableId] = useState(1);
  const [orders, setOrders] = useState([]);
  const [updateOrder, setUpdateOrder] = useState(false);
  // console.log("table_id", tableId);
  const navigate = useNavigate();
  const tableList = [...Array(15).keys()];

  const updateOrderStatus = async (orderId) => {
    const statusUpdate = {
      order_id: orderId,
      status: "DONE",
    };
    try {
      await fireUpdateStatus(statusUpdate);
      setUpdateOrder(true);
    } catch (err) {
      console.log(err);
    }
  };
  const fireUpdateStatus = async (itemUpdate) => {
    return axios.post(
      "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/update-order-status",
      itemUpdate
    );
  };

  useEffect(() => {
    axios({
      method: "post",
      url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/get-orders-by-table",
      data: {
        table_id: tableId,
      },
    })
      .then((res) => {
        console.log("res", res.data);
        setOrders(res.data);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  }, [tableId, updateOrder]);

  // fuction ที่พังได้ เราต้องเขียน  .catch เข้าไปด้วยเสมอ
  // เพื่อดัก error เวลาที่เราทำ production
  return (
    <div className="px-6 py-3 bg-red-200">
      <div className="bg-red-500 p-2">
        <h1 className="text-center text-white">รายการสั่งอาหาร</h1>
      </div>
      <div className="mt-5">
        <p className="mb-3 text-xl bg-rose-300 w-1/3 p-2 text-center text-white rounded-lg">
          กดเลือกโต๊ะ : {tableId}
        </p>
        {/* add map here */}
        <div className="grid grid-cols-5 gap-2">
          {tableList.map((numbertable, idx) => (
            <button
              onClick={() => setTableId(numbertable + 1)}
              key={idx}
              className="bg-rose-500 text-center p-2 rounded-md text-white"
            >
              {numbertable + 1}
            </button>
          ))}
        </div>
      </div>
      {/* component to show detail about order menu and calculate price*/}
      <div className="mt-5">
        <p>จำนวนคำสั่งซื้อ : {orders.length}</p>
      </div>
      <button
        className="mt-6 bg-gray-500 p-2 rounded-[10px] text-white"
        onClick={() => navigate("/")}
      >
        Back To Home Page {"<<"}{" "}
      </button>

      {orders?.map((order) => (
        <div className="px-4 mt-3 bg-rose-100 rounded-xl">
          <button className="bg-rose-400 text-white p-2 rounded-lg my-3 text-xl">
            เช็คบิล
          </button>

          <div className="flex items-center gap-2 justify-between">
            <p>โต๊ะ {tableId} </p>
          </div>
          <div>
            <div>
              <p>หมายเลขคำสั่งซื้อ {order.order_id}</p>
              <p>สถานะ: {order.status}</p>
            </div>
            {/* add .map() here */}
            {order?.items?.map((item) => {
              return (
                <div className="flex justify-between">
                  <div>
                    <p>{item.name}</p>
                  </div>
                  <div className="flex">
                    <p>{item.price}</p>
                    <p>x</p>
                    <p>{item.quantity}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-end">
            <p className="text-rose-500 my-3"> รวม : {order.total_price}</p>
          </div>
          {orders.status === "WAITING" && (
            <button
              onClick={() => updateOrderStatus(order.order_id)}
              className="bg-rose-400 text-white p-2 rounded-lg my-3 text-xl"
            >
              ทำเสร็จแล้ว
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default FoodOrder;
