import axios from "axios";
import React, { useEffect, useState } from "react";

const Order = () => {
  const [loading, setLoading] = useState(false);
  const [chooseTableId, setChooseTableId] = useState("-");
  const [orderByTableFromAPI, setOrderByTableFromAPI] = useState([]);
  console.log("orderByTableFromAPI", orderByTableFromAPI);

  const numberOfTable = [];
  for (let i = 1; i <= 15; i++) {
    numberOfTable.push(i);
  }
  console.log("chooseTableId", chooseTableId);

  const checkBill = () => {
    return orderByTableFromAPI.reduce((acc, r) => acc + r.total_price);
  };

  console.log(
    "AAA",
    orderByTableFromAPI.reduce((acc, r) => acc + r.total_price)
  );

  console.log("checkBill", checkBill());

  const sentOrderIdDone = (orderIdDone) => {
    const data = JSON.stringify({
      order_id: orderIdDone,
      status: "DONE",
    });

    const config = {
      method: "post",
      url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/update-order-status",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    setLoading(true);
    axios(config)
      .then(async function (response) {
        console.log("sentOrderIdDoneResp", JSON.stringify(response.data));
        await getOrderByTable(chooseTableId);
        setLoading(false);
      })
      .catch(function (error) {
        console.log("sentOrderIdDoneError", error);
      });
  };

  const getOrderByTable = (chooseTableId) => {
    const data = JSON.stringify({
      table_id: chooseTableId,
    });

    const config = {
      method: "post",
      url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/get-orders-by-table",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    return axios(config)
      .then(function (response) {
        console.log("getOrderByTableResp", JSON.stringify(response.data));
        setOrderByTableFromAPI(response.data);
      })
      .catch(function (error) {
        console.log("getOrderByTableErrorResp", error);
      });
  };

  return (
    <>
      <div className="pt-28 mx-8 mb-4">
        <h1 className="text-3xl mb-4 text-center">รายการสั่งอาหาร</h1>
        <div className="text-bold">กดเลือกโต๊ะ</div>
        <div className="mt-4 grid grid-cols-5 gap-8">
          {numberOfTable.map((r, idx) => (
            <button
              className="bg-red-100 p-4 rounded-lg hover:bg-red-200 focus:border-red-500 focus:border focus:bg-red-200"
              onClick={() => {
                setChooseTableId(Number(r));
                getOrderByTable(r);
              }}
            >
              {r}
            </button>
          ))}
        </div>
        <div className="mt-6">{`โต๊ะ ${chooseTableId}`}</div>

        {/* {if (orderByTableFromAPI === []) {return(<div></div>)}} */}

        <div className="w-full bg-yellow-200 rounded-xl p-2 m-2 text-center">
          กำลังทำ
        </div>
        {orderByTableFromAPI
          .filter((r) => r.status === "WAITING")
          .map((order) => (
            <>
              <div>{`หมายเลขคำสั่งซื้อ # ${order.order_id}`}</div>
              <div className="mt-2">สถานะคำสั่งซื้อ : กำลังทำ</div>
              {order.items.map((j) => (
                <>
                  <div className="flex justify-between">
                    <div>{j.name}</div>
                    <div>{`฿${j.price} x ${j.quantity}`}</div>
                  </div>
                </>
              ))}

              <div className="flex justify-end">
                <div className="mt-2">{`รวม ฿${order.total_price}`}</div>
              </div>
              <div className="flex justify-end">
                <button
                  className={`rounded p-2 my-2 transition-all ${
                    loading ? "bg-blue-500 " : "bg-red-200 "
                  }`}
                  onClick={() => sentOrderIdDone(order.order_id)}
                >
                  {`${loading ? "กำลังทำรายการ..." : "ทำเสร็จแล้ว"}`}
                </button>
              </div>
            </>
          ))}

        <div className="w-full bg-green-200 rounded-xl p-2 m-2 text-center">
          ทำเสร็จแล้ว
        </div>
        {orderByTableFromAPI
          .filter((r) => r.status === "DONE")
          .map((order) => (
            <>
              <div>{`หมายเลขคำสั่งซื้อ # ${order.order_id}`}</div>
              <div>สถานะคำสั่งซื้อ : ทำเสร็จแล้ว</div>
              {order.items.map((j) => (
                <>
                  <div className="flex justify-between">
                    <div>{j.name}</div>
                    <div>{`฿${j.price} x ${j.quantity}`}</div>
                  </div>
                </>
              ))}

              <div className="flex justify-end">
                <div className="mt-2">{`รวม ฿${order.total_price}`}</div>
              </div>
            </>
          ))}
      </div>
    </>
  );
};

export default Order;
