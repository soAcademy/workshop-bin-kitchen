// import FoodMenuList from "../components/FoodMenuList";
import { useEffect, useState } from "react";
import axios from "axios";

export const Orders = () => {
  const [tableId, setTableId] = useState(0);
  const [ordersByTable, setOrdersByTable] = useState([]);
  const [orderStatusFlag, toggleOrderStatusFlag] = useState(false);
  const [grandTotal, setGrandTotal] = useState(0);

  const statusTH = {
    DONE: "ทำเสร็จแล้ว",
    WAITING: "กำลังทำ",
  };

  useEffect(() => {
    axios({
      method: "POST",
      maxBodyLength: Infinity,
      // url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/get-orders-by-table",
      url: `${process.env.REACT_APP_BASE_API_URL}/get-orders-by-table`,
      headers: {
        "Content-Type": "application/json",
      },
      data: { table_id: tableId },
    })
      .then((response) => {
        // console.log(response.data);
        setOrdersByTable(response.data);
      })
      .catch((error) => console.log(error));
  }, [tableId, orderStatusFlag]);

  const handleCalculateGrandTotal = (ordersByTable) => {
    const grandTotal = ordersByTable
      .reduce((acc, order) => acc + order.total_price, 0)
      .toLocaleString("TH");

    setGrandTotal(grandTotal);
  };

  const handleMarkStatus = (order_id, status) => {
    const data = {
      order_id: order_id,
      status: status,
    };

    axios({
      method: "POST",
      maxBodyLength: Infinity,
      // url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/update-order-status",
      url: `${process.env.REACT_APP_BASE_API_URL}/update-order-status`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    })
      .then((response) => {
        console.log(response.data);
        toggleOrderStatusFlag(!orderStatusFlag);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="px-4 pt-4 font-nstl text-sm">
      <h1 className="mb-4 font-prompt text-4xl font-bold">รายการสั่งอาหาร</h1>
      <p className="mb-4">กดเลือกโต๊ะ</p>
      <ul className="mb-4 grid grid-cols-5 grid-rows-3 justify-evenly gap-4">
        {[...Array(15).keys()].map((_table, idx) => (
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
      <div className="mb-4">
        โต๊ะ {tableId}
        {ordersByTable.length > 0 &&
          ` ยอดรวม ฿${ordersByTable
            .reduce((acc, order) => acc + order.total_price, 0)
            .toLocaleString("TH")}`}
        <button
          onClick={() => handleCalculateGrandTotal(ordersByTable)}
          className="self-center rounded-[10px] bg-red-400 px-6 py-3 hover:bg-red-500"
        >
          เช็กบิล
        </button>
        {grandTotal}
      </div>
      {/* <div className="mb-6">Number of Orders: {ordersByTable.length}</div> */}
      <ul className="mb-6">
        {ordersByTable.length > 0 ? (
          ordersByTable.map((order) => (
            <>
              <li key={order.order_id} className="mb-4">
                <div className="mb-2">หมายเลขคำสั่งซื้อ #{order.order_id}</div>
                <div className="mb-2">สถานะ: {statusTH[order.status]}</div>
                <ul className="mb-2">
                  {order.items.map((item) => (
                    <li key={item.id}>
                      {item.name} @{item.price} &times; {item.quantity} = ฿
                      {item.total_price.toLocaleString("TH")}
                    </li>
                  ))}
                </ul>
                <div className="mb-2">
                  รวม ฿{order.total_price.toLocaleString("TH")}
                </div>
                {order.status === "WAITING" && (
                  <button
                    onClick={() => handleMarkStatus(order.order_id, "DONE")}
                    className="self-center rounded-[10px] bg-red-200 px-6 py-3 hover:bg-red-300"
                  >
                    ทำเสร็จแล้ว
                  </button>
                )}
                {order.status === "DONE" && (
                  <button
                    onClick={() => handleMarkStatus(order.order_id, "WAITING")}
                    className="self-center rounded-[10px] bg-red-400 px-6 py-3 hover:bg-red-500"
                  >
                    กำลังทำ
                  </button>
                )}
              </li>
            </>
          ))
        ) : (
          <div>--- ไม่มีรายการสั่งอาหาร ---</div>
        )}
      </ul>
    </div>
  );
};
