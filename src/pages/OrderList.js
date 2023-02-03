import axios from "axios";
import TableSelection from "../components/TableSelection";
import React from "react";
import { useState, useEffect } from "react";

const OrderList = () => {
  const [tableId, setTableId] = useState(0);
  const [orders, setOrders] = useState([]);
  const [toggle, setToggle] = useState(false);
  

  useEffect(() => {
    axios({
      method: "post",
      url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/get-orders-by-table",
      data: { table_id: tableId },
    })
      .then((response) => {
        console.log("orderByTableId", response.data);
        setOrders(response.data);
      })
      .catch((err) => {
        console.log("err here", err);
      });
  }, [tableId, toggle]);

  const updateOrderStatus = (orderId) => {
      // console.log("orderId", orderId);
    axios({
      method: "post",
      url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/update-order-status",
      data: { order_id: orderId, status: "DONE" },
    })
      .then((response) => {
        console.log("https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/update-order-status", response)
        setToggle(!toggle)
      })
      .catch((err) => {
        console.log("err here", err);
      });
  }

  return (
    <div className="bg-neutral-900 w-full mx-2 rounded-lg shadow-lg border border-8 border-lime-200">
      <div className="flex m-1 mt-11">
        <div className="md:text-5xl text-3xl m-5 mx-auto text-neutral-50">
          รายการสั่งอาหาร
        </div>
      </div>
      <div className="text-xl text-neutral-50 p-4">กดเลือกโต๊ะ: {tableId} </div>
      <TableSelection tableId={tableId} setTableId={setTableId} orders={orders} setOrders={setOrders} updateOrderStatus={updateOrderStatus} />
    </div>
    
  );
}
;
export default OrderList;
