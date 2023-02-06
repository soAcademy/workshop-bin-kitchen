import React, { useState, useEffect } from "react";
import axios from "axios";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [tableId, setTableId] = useState(0);
  const order = JSON.parse(localStorage.getItem("orders")) ?? [];
  const [totalPrice, setTotalPrice] = useState(undefined);

  useEffect(() => {
    axios({
      method: "post",
      url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/get-orders-by-table",
      data: {table_id: tableId },
    }).then((response) => {
      console.log("orderByTableID:", response.data);
      setOrders(response.data);
    });
  }, [tableId]);

  const calculateTotalPrice = () => {
    // orders.reduce((r))
    setTotalPrice();
  };

  const tableList = [...Array(15).keys()];
  return (
    <div className="px-4">
      <h1 className="text-3xl text-center mt-4">รายการสั่งอาหาร</h1>
      โต๊ะที่เลือก: {tableId}
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
        <div className="h-full w-screen center py-5 px-8 text-sm border border-green-800">
          จำนวนคำสั่งซื้อ: {orders?.length}
          <div>มูลค่าคำสั่งซื้อรวม {totalPrice} </div>
          <button
            className="bg-green-800 text-white px-4 py-2 rounded-lg mt-2"
            onClick={() => calculateTotalPrice()}
          >
            คิดเงิน
          </button>
          {orders?.map((order) => (
            <div className="py-2 text-sm">
              <div>หมายเลขคำสั่งซื้อ #{order.order_id}</div>
              <div>โต๊ะ: {order.table_id}</div>
              <div>สถานะ: {order.status}</div>
              {order.items.map((item) => (
                <div className="flex justify-between my-2">
                  <div className="flex-auto">{item.name}</div>
                  <div>
                    ฿{item.price.toLocaleString()} x {item.quantity}
                  </div>
                </div>
              ))}
              {/* <button onClick ={() => updateOrderStatus}></button> */}
              <div className="text-right my-2">
                รวม ฿{order.total_price.toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Order;
