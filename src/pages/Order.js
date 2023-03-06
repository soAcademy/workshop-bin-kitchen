import { useState, useEffect } from "react";
import axios from "axios";

export const Order = () => {
  const [fetchState, setFetchState] = useState(true);
  const [tableId, setTableId] = useState();
  const [orders, setOrders] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isCheckOut, setIsCheckOut] = useState(false);
  const [finalBill, setFinalBill] = useState();
  const [isBillShowed, setIsBillShowed] = useState(false);
  let arrTables = [...Array(15).keys()];

  const createBill = () => {
    const time = new Date();
    const bill_id = time.getTime();
    const items = orders
      .filter((order) => order.status === "WAITING" || order.status === "DONE")
      .reduce(
        (acc, order) => {
          const menuQuant = order.orderItems.reduce((menuacc, item) => {
            menuacc[item.menu.name] = {
              name: item.menu.name,
              quantity: menuacc[item.menu.name]?.quantity ?? 0 + item.quantity,
              price: item.menu.price,
            };
            return menuacc;
          }, {});
          const tempItems = [
            ...(acc?.items ?? []),
            Object.values(menuQuant),
          ].flat();
          return {
            items: tempItems,
          };
        },
        { items: [] }
      );
    const sumItems = Object.values(
      items?.items?.reduce((acc, item) => {
        acc[item.name] = {
          name: item.name,
          quantity: (acc[item.name]?.quantity ?? 0) + item.quantity,
          price: item.price,
        };
        return acc;
      }, {})
    );
    const finalBill = {
      bill_id: bill_id,
      table_id: tableId,
      date: time.toLocaleString("TH"),
      totalPrice: totalPrice,
      items: sumItems,
    };
    setFinalBill(finalBill);
    setIsBillShowed(true);

    const data = JSON.stringify({
      bill_id: bill_id,
      table_id: tableId,
      bill_price: totalPrice,
    });

    const config = {
      method: "post",
      url: "https://backend-api-amber.vercel.app/foodOrdering/createBill",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        // console.log(error);
      });
  };

  const updateOrder = (order, status) => {
    const _data = JSON.stringify({
      order_id: order.id,
      status: status,
    });
    const _config = {
      method: "post",
      url: "https://backend-api-amber.vercel.app/foodOrdering/updateOrder",
      // url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/update-order-status",
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
        // console.log(error);
      });
  };

  useEffect(() => {
    const _data = JSON.stringify({
      table_id: tableId,
    });
    const _config = {
      method: "post",
      url: "https://backend-api-amber.vercel.app/foodOrdering/getOrders",
      // url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/get-orders-by-table",
      headers: {
        "Content-Type": "application/json",
      },
      data: _data,
    };
    axios(_config)
      .then(function (response) {
        setOrders(
          response.data.filter(
            (order) =>
              order.status !== "PAID" && order.status !== "BILLED_CANCELED"
          )
        );
      })
      .catch(function (error) {
        // console.log(error);
      });
  }, [tableId, fetchState]);

  useEffect(() => {
    const _totalPrice = orders?.reduce((acc, e) => {
      acc +=
        e.status !== "CANCELED" && e.status !== "BILLED_CANCEL"
          ? e.total_price
          : 0;
      return acc;
    }, 0);
    setTotalPrice(_totalPrice);
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
              {tableId && `โต๊ะ ${tableId}`} ยอดรวม ฿{totalPrice ?? 0}{" "}
            </p>
            {tableId && (
              <button
                onClick={() => setIsCheckOut(true)}
                className="h-10 w-24 rounded-lg bg-red-100 px-2 shadow-md hover:bg-red-200"
              >
                เช็คบิล
              </button>
            )}
          </div>
          <div className="mx-auto mt-4 w-2/3 border-b"></div>
          {orders.map((order, idx) => {
            return (
              <div key={idx} className="mx-auto w-11/12 px-5 py-2 md:w-1/2">
                <div className="flex w-full justify-between">
                  <div className="">
                    <p>หมายเลขคำสั่งซื้อ # {order.id}</p>
                    <p>
                      สถานะ:{" "}
                      {order.status === "WAITING"
                        ? "กำลังทำ"
                        : order.status === "DONE"
                        ? "ทำเสร็จแล้ว"
                        : "ยกเลิก"}
                    </p>
                    {order.orderItems?.map((item, jdx) => {
                      return (
                        <div key={jdx} className="flex justify-between">
                          <div>{item.menu.name}</div>
                          <div>
                            ฿{item.menu.price} x {item.quantity}
                          </div>
                        </div>
                      );
                    })}
                    รวม: {order.total_price} บาท
                  </div>
                  {order.status === "WAITING" && (
                    <div className="flex flex-col justify-center space-y-2">
                      <button
                        onClick={() => {
                          updateOrder(order, "DONE");
                          // setFetchState(!fetchState);
                        }}
                        className="h-10 w-24 self-center rounded-lg bg-red-100 px-2 shadow-md hover:bg-red-200"
                      >
                        ทำเสร็จแล้ว
                      </button>
                      <button
                        onClick={() => {
                          updateOrder(order, "CANCELED");
                          // setFetchState(!fetchState);
                        }}
                        className="h-10 w-24 self-center rounded-lg bg-slate-100 px-2 shadow-md hover:bg-slate-200"
                      >
                        ยกเลิก
                      </button>
                    </div>
                  )}
                </div>
                <div className="mx-auto mt-4 w-11/12 border-b"></div>
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
              <p>ยอดรวม</p> <p>฿{totalPrice}</p>
            </p>
          </div>
        </div>
        <div className="flex justify-between md:justify-center md:space-x-10">
          <button
            onClick={() => {
              createBill();
              setIsCheckOut(false);
            }}
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
      <div
        className={`fixed top-14 left-0 h-screen w-screen bg-black duration-500
      ${isBillShowed ? "opacity-[0.15]" : "pointer-events-none opacity-0"}`}
      ></div>

      <div
        className={`fixed bottom-0 z-10 flex min-h-[250px] w-full flex-col justify-between border-2
        bg-white p-5 px-20 shadow-lg duration-500 md:left-1/4
        md:bottom-1/4 md:min-h-[300px] md:w-1/2 md:rounded-xl
        ${isBillShowed ? "" : "translate-y-full md:translate-y-0 md:scale-0"}`}
      >
        <div className="flex w-full flex-col border-b pb-2">
          <p className="mx-auto text-2xl">รายการอาหาร</p>
          <div className="mt-5 flex justify-between border-b md:justify-evenly">
            <p className="flex flex-col items-center">
              <p>โต๊ะ</p> <p>{tableId}</p>
            </p>
            <p className="flex flex-col items-center">
              <p>วันที่ / เวลา</p> <p>{finalBill?.date}</p>
            </p>
          </div>
          <p className="w-full border-b text-center">รายการอาหาร</p>
          <div className="mb-2 flex justify-between border-b pb-2">
            <p>เมนู</p>
            <p>ราคา</p>
          </div>
          {finalBill?.items.map((e, idx) => {
            return (
              <div key={idx} className="flex justify-between">
                <p>
                  {e.quantity}&nbsp; {e.name}
                </p>
                <p>{e.price * e.quantity}</p>
              </div>
            );
          })}
        </div>
        <div className="flex justify-between">
          <p>ยอดชำระสุทธิ</p>
          <p>{totalPrice.toLocaleString("TH")}</p>
        </div>
        <div className="mx-auto mt-10">
          <button
            onClick={() => {
              setFetchState(!fetchState);
              setIsBillShowed(false);
            }}
            type="button"
            className="bg-white-100 rounded-lg p-4 px-10 shadow-md hover:bg-gray-100"
          >
            OK
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
};
