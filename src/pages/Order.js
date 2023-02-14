import { useState, useEffect } from "react";
import axios from "axios";

export const Order = () => {
  const [fetchState, setFetchState] = useState(true);
  const [tableId, setTableId] = useState();
  const [orders, setOrders] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const [isCheckOut, setIsCheckOut] = useState(false);
  let arrTables = [...Array(15).keys()];

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
    <div className="mt-20 font-kanit md:m-20 md:mt-32">
      <p className="text-center text-4xl">รายการสั่งอาหาร</p>
      <div className="mt-5">
        <p className="ml-6 mb-2 md:text-2xl">กดเลือกโต๊ะ</p>
        <div className="grid grid-cols-5 justify-items-center gap-y-2 md:grid-cols-5 md:gap-y-5">
          {arrTables.map((e, idx) => {
            return (
              <div
                key={idx}
                className="m-2 h-12 w-12 md:h-16 md:w-16 lg:mt-10 lg:h-20 lg:w-20"
              >
                <button
                  className="h-full w-full rounded-lg bg-red-100 shadow-md hover:bg-red-200 hover:shadow-lg active:bg-red-300"
                  onClick={() => {
                    setTableId(e + 1);
                  }}
                >
                  {e + 1}
                </button>
              </div>
            );
          })}
        </div>
        <div className="text-md mt-8">
          <div className="flex items-center justify-between px-5 md:mx-auto md:w-1/2">
            <p>
              โต๊ะ {orders[0]?.table_id ?? ""} ยอดรวม ฿{totalValue ?? 0}{" "}
            </p>
            <button
              onClick={() => setIsCheckOut(true)}
              className="h-10 w-24 rounded-lg bg-red-100 px-2 shadow-md hover:bg-red-200"
            >
              เช็คบิล
            </button>
          </div>
          {orders.map((order, idx) => {
            return (
              <div key={idx} className="mx-auto px-5 py-2 md:w-1/2">
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
                <div className="text-end self-end">รวม {order.total_price}</div>
                <div className="mt-4 flex justify-end">
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
                      className="h-10 w-24 self-center rounded-lg bg-red-100 px-2 shadow-md hover:bg-red-200"
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
      <div
        className={`fixed top-14 left-0 h-screen w-screen bg-black duration-500
      ${isCheckOut ? "opacity-[0.15]" : "pointer-events-none opacity-0"}`}
      ></div>
      <div
        className={`fixed bottom-0 z-10 flex h-[250px] w-full flex-col justify-between border-2
        bg-white p-5 px-20 shadow-lg duration-500 md:left-1/4
        md:bottom-1/4 md:h-[300px] md:w-1/2 md:rounded-xl md:px-48
        ${isCheckOut ? "" : "translate-y-full md:translate-y-0 md:scale-0"}`}
      >
        <div className="flex w-full flex-col">
          <p className="mx-auto text-2xl">เช็คบิล</p>
          <div className="mt-5 flex justify-between md:justify-evenly">
            <p className="flex flex-col items-center">
              <p>โต๊ะ</p> <p>{tableId}</p>
            </p>
            <p className="flex flex-col items-center">
              <p>ยอดรวม</p> <p>฿{totalValue}</p>
            </p>
          </div>
        </div>
        <div className="flex justify-between md:justify-center md:space-x-10">
          <button
            type="button"
            className="rounded-lg bg-blue-100 p-4 px-10 shadow-md hover:bg-blue-200"
          >
            ยืนยัน
          </button>
          <button
            onClick={() => setIsCheckOut(false)}
            type="button"
            className="bg-white-100 rounded-lg p-4 px-10 shadow-md hover:bg-gray-100"
          >
            ยกเลิก
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
};
