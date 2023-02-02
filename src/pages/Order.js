import { useState, useEffect } from "react";
import axios from "axios";

const Order = () => {
  const [fetchState, setFetchState] = useState(true);
  const [tableId, setTableId] = useState();
  const [orders, setOrders] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const nTables = 15;
  let arrTables = [];
  for (let i = 1; i <= nTables; i++) {
    arrTables = [...arrTables, i];
  }

  useEffect(() => {
    const _data = JSON.stringify({
      table_id: tableId,
    });
    const _config = {
      method: "post",
      url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/get-orders-by-table",
      headers: {
        "Content-Type": "application/json",
      },
      data: _data,
    };
    axios(_config)
      .then(function (response) {
        setOrders(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [tableId, fetchState]);
  useEffect(() => {
    const _totalValue = orders?.reduce((acc, e) => {
      acc += e.total_price;
      return acc;
    }, 0);
    setTotalValue(_totalValue);
  }, [orders]);
  return (
    <div className="m-4 mt-20 md:m-20 md:mt-32 font-kanit ">
      <p className="text-4xl text-center">รายการสั่งอาหาร</p>
      <div className="mt-5">
        <p className="md:text-2xl ml-6 mb-2">กดเลือกโต๊ะ</p>
        <div className="grid grid-cols-5 gap-y-2 md:grid-cols-5 md:gap-y-5 justify-items-center">
          {arrTables.map((e, idx) => {
            return (
              <div
                key={idx}
                className="w-12 h-12 md:w-16 md:h-16 m-2 lg:w-20 lg:h-20 lg:mt-10"
              >
                <button
                  className="w-full h-full bg-red-100 rounded-lg shadow-md hover:bg-red-200 active:bg-red-300 hover:shadow-lg"
                  onClick={() => {
                    setTableId(e);
                  }}
                >
                  {e}
                </button>
              </div>
            );
          })}
        </div>
        <div className="mt-8 text-md">
          <div className="flex justify-between items-center px-5">
            <p>
              โต๊ะ {orders[0]?.table_id ?? ""} ยอดรวม ฿{totalValue ?? 0}{" "}
            </p>
            <button className="bg-red-100 rounded-lg w-24 px-2 h-10">
              เช็คบิล
            </button>
          </div>
          {orders.map((order, idx) => {
            return (
              <div key={idx} className="px-5 py-2">
                <p>หมายเลขคำสั่งซื้อ # {order.order_id}</p>
                <p>
                  สถานะ:{" "}
                  {order.status === "WAITING" ? "กำลังทำ" : "ทำเสร็จแล้ว"}
                </p>
                {order.items?.map((item, jdx) => {
                  return (
                    <div key={jdx} className="flex justify-between">
                      <div>{item.name}</div>
                      <div>
                        ฿{item.price} x {item.quantity}
                      </div>
                    </div>
                  );
                })}
                <div className="self-end text-end">รวม {order.total_price}</div>
                <div className="flex justify-end mt-4">
                  {order.status === "WAITING" && (
                    <button
                      onClick={() => {
                        const _data = JSON.stringify({
                          order_id: order.order_id,
                          status: "DONE",
                        });
                        const _config = {
                          method: "post",
                          url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/update-order-status",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          data: _data,
                        };
                        axios(_config)
                          .then(function () {
                            setFetchState(!fetchState);
                          })
                          .catch(function (error) {
                            console.log(error);
                          });
                      }}
                      className="bg-red-100 rounded-lg w-24 px-2 h-10 self-center"
                    >
                      ทำเสร็จแล้ว
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Order;
