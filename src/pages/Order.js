import { useState, useEffect } from "react";
import axios from "axios";

export const Order = () => {
  const [orders, setOrders] = useState([]);
  const [tableId, setTableId] = useState(0);
  const tableNumbers = [...Array(15).keys()];
  const [updateOrderStatusFlag, setUpdateOrderStatusFlag] = useState(false)

  useEffect(() => {
    axios({
      method: "post",
      url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/get-orders-by-table",
      data: {
        table_id: tableId,
      },
    })
      .then((response) => {
        console.log("order by table id : ", response.data);
        setOrders(response.data);
      })
      .catch((error) => console.log("error here", error));
  }, [tableId,updateOrderStatusFlag]);

  const updateOrderStatus = (orderId) => {
    console.log("updateOrderStatus : ", orderId);

    axios({
      method: "post",
      url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/update-order-status",

      data: {
        order_id: orderId,
        status: "DONE",
      },
    }).then((response) => {
      console.log("Res.Data pop : ", response.data);
      setUpdateOrderStatusFlag(!updateOrderStatusFlag)
    }).catch((error) => console.log("error here", error));
  };

  return (
    <div className="mt-4 pt-16">
      <div className="pt-4 text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
        รายการสั่งอาหาร
      </div>
      <div>Current Table : {tableId}</div>
      <div className="pt-4 grid grid-flow-row grid-cols-5 gap-4">
        {tableNumbers.map((tableNumber, index) => (
          <button
            key={index}
            onClick={() => setTableId(tableNumber + 1)}
            className="w-auto h-[60px] 
        bg-yellow-600 
        text-md xl:text-lg 2xl:text-2xl 
        rounded-xl 
        hover:border-2 
        border-black"
          >
            {tableNumber + 1}
          </button>
        ))}
      </div>
      <div className="mt-8 text-md xl:text-lg 2xl:text-2xl text-center">
        จำนวนคำสั่งซื้อ : {orders.length}
      </div>
      {/* show when choose table with no order */}
      <div className="mt-8 text-md xl:text-lg 2xl:text-2xl text-center">
        --- ไม่มีรายการสั่งอาหาร ---
      </div>

      {/* show when choose table with order */}

      {orders.map((order) => {
        return (
          <>
            <div className="mt-8 p-3 border-2 text-md xl:text-lg 2xl:text-2xl">
              <div className="flex items-center justify-between">
                <h1>โต๊ะ {order.table_id}</h1>
                <button className="bg-yellow-600 p-2 rounded-xl hover:bg-yellow-700">
                  เก็บเงิน
                </button>
              </div>
              <h1>หมายเลขคำสั่งซื้อ #{order.order_id}</h1>
              <h1>สถานะ : {order.status} </h1>
              <div>
                {order.items.map((item) => {
                  return (
                    <>
                      <div className="flex items-center justify-between">
                        <h1>{item.name}</h1>
                        <h1>
                          {item.price} x {item.quantity}
                        </h1>
                      </div>
                    </>
                  );
                })}
              </div>
              <div>
                <h1 className="text-right">ยอดรวม : {order.total_price}</h1>
                <button
                  onClick={() => updateOrderStatus(order.order_id)}
                  className="bg-yellow-600 p-2 rounded-xl hover:bg-yellow-700"
                >
                  ทำเสร็จแล้ว
                </button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};
