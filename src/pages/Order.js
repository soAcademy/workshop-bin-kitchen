import { useState, useEffect } from "react";
import axios from "axios";

const Order = () => {
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
    <div className="mt-20 md:m-20 md:mt-32 font-kanit">
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
                    setTableId(e + 1);
                  }}
                >
                  {e + 1}
                </button>
              </div>
            );
          })}
        </div>
        <div className="mt-8 text-md">
          <div className="flex justify-between items-center px-5 md:w-1/2 md:mx-auto">
            <p>
              โต๊ะ {orders[0]?.table_id ?? ""} ยอดรวม ฿{totalValue ?? 0}{" "}
            </p>
            <button
              onClick={() => setIsCheckOut(true)}
              className="bg-red-100 hover:bg-red-200 shadow-md rounded-lg w-24 px-2 h-10"
            >
              เช็คบิล
            </button>
          </div>
          {orders.map((order, idx) => {
            return (
              <div key={idx} className="px-5 py-2 md:w-1/2 mx-auto">
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
                      className="bg-red-100 hover:bg-red-200 shadow-md rounded-lg w-24 px-2 h-10 self-center"
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
      <div className={`bg-black w-screen h-screen fixed top-14 left-0 duration-500
      ${isCheckOut ? 'opacity-[0.15]' : 'opacity-0 pointer-events-none'}`}></div>
      <div
        className={`flex flex-col fixed bottom-0 px-20 md:px-48 p-5 h-[250px] w-full
        bg-white shadow-lg border-2 justify-between duration-500 z-10
        md:w-1/2 md:left-1/4 md:bottom-1/4 md:rounded-xl md:h-[300px]
        ${isCheckOut ? "" : "translate-y-full md:scale-0 md:translate-y-0"}`}
      >
        <div className="w-full flex flex-col">
          <p className="mx-auto text-2xl">เช็คบิล</p>
          <div className="flex justify-between mt-5 md:justify-evenly">
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
            className="bg-blue-100 shadow-md hover:bg-blue-200 p-4 px-10 rounded-lg"
          >
            ยืนยัน
          </button>
          <button
            onClick={() => setIsCheckOut(false)}
            type="button"
            className="bg-white-100 shadow-md hover:bg-gray-100 p-4 px-10 rounded-lg"
          >
            ยกเลิก
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Order;
