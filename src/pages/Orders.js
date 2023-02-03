// import FoodMenuList from "../components/FoodMenuList";
import { useEffect, useState } from "react";
import axios from "axios";

export const Orders = () => {
  const [tableId, setTableId] = useState(0);
  const [ordersByTable, setOrdersByTable] = useState([]);

  useEffect(() => {
    axios({
      method: "POST",
      maxBodyLength: Infinity,
      url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/get-orders-by-table",
      headers: {
        "Content-Type": "application/json",
      },
      data: { table_id: tableId },
    })
      .then((response) => {
        console.log(response.data);
        setOrdersByTable(response.data);
      })
      .catch((error) => console.log(error));
  }, [tableId]);

  return (
    <div className="px-4 pt-4 font-nstl text-sm">
      <h1 className="mb-4 font-prompt text-4xl font-bold">รายการสั่งอาหาร</h1>
      <p className="mb-4">รายการสั่งอาหาร</p>
      <ul className="grid grid-cols-5 grid-rows-3 justify-evenly gap-4">
        {[...Array(15).keys()].map((table, idx) => (
          <li key={idx}>
            <button
              className="aspect-square w-full rounded bg-red-300"
              onClick={() => setTableId(idx + 1)}
            >
              {idx + 1}
            </button>
          </li>
        ))}
      </ul>
      <div>Table ID: {tableId}</div>
      <div className="mb-6">Number of Orders: {ordersByTable.length}</div>
      <ul className="mb-6">
        {ordersByTable.map((order) => (
          <>
            <li className="mb-4">
              <div className="mb-2">
                #{order.order_id}; Status: {order.status}
              </div>
              <ul className="mb-2">
                {order.items.map((item) => (
                  <li>
                    {item.name} * {item.quantity} = {item.total_price}
                  </li>
                ))}
              </ul>
              <div className="mb-2">Order total: {order.total_price}</div>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};
