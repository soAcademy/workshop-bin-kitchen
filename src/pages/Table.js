import { useState, useEffect } from "react";
import axios from "axios";

export const Table = () => {
  const tableList = [...Array(15).keys()];
  const [tableId, setTableId] = useState(0);
  const [tableOrders, setTableOrders] = useState([]);

  console.log("tableOrders:", tableOrders);
  useEffect(() => {
    axios({
      method: "post",
      url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/get-orders-by-table",
      data: {
        table_id: tableId,
      },
    }).then((response) => {
      // console.log("response", response);
      setTableOrders(response.data);
    });
  }, [tableId]);

  // console.log("tableId:",tableOrders.map((r) => r.order_items))
  // const numberOfOrders = tableOrders.map((r) => r.order_items).map((item) => )
  // console.log("numberOfOrders",numberOfOrders);

  return (
    <div className="py-28">
      {/* <Link to="/">Home</Link> */}
      {/* <span className="underline">Table</span> */}
      <div className="p-4 text-2xl">
        <h1 className="text-6xl text-center mt-4">รายการสั่งอาหาร</h1>
        กดเลือกโต๊ะ
        <div className="grid grid-cols-5 gap-4 my-4">
          {tableList.map((id) => (
            <button
              onClick={() => setTableId(id + 1)}
              className="bg-red-200 active:bg-red-300 text-center py-2 rounded-full text-black text-6xl"
            >
              {id + 1}
            </button>
          ))}
        </div>
        โต๊ะที่เลือก: {tableId}
      </div>
      <div className="bg-gray-500 h-full">
        {tableOrders.map((r) => {
          return (
            <div className="text-4xl text-black">
              <p>หมายเลขคำสั่งซื้อ{r.order_id}</p>
              <p>สถานะ{r.status}</p>
              {r.items.map((item) => {
                return (
                  <div className="flex justify-between">
                    <div>{item.name}</div>
                    <div>{item.price} x {item.quantity}</div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
