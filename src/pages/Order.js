import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import Button from "../components/button";

const Order = () => {
  const [getOrdersTableId, setGetOrdersTableId] = useState([]);
  const [updateOrderStatus, setUpdateOrderStatus] = useState([]);
  const [tableId, setTableId] = useState(0);
  // const [loading, setLoading] = useState(false);
  // console.log("testOrderTable", ordersTableId);
  const selectTable = [];
  for (let i = 1; i <= 15; i++) {
    selectTable.push(i);
  }
  // console.log(selectTable);
  useEffect(() => {
    const data = JSON.stringify({
      table_id: tableId,
    });

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/get-orders-by-table",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        // console.log("dataItem", JSON.stringify(response.data));
        setGetOrdersTableId(response.data);
      })
      .catch(function (error) {
        console.log("Error:", error);
      });
  }, [tableId, updateOrderStatus]);

  //   const getTableId = (selectTable) => { //old version
  //   // useEffect
  //   const data = JSON.stringify({
  //     table_id: selectTable,
  //   });

  //   const config = {
  //     method: "post",
  //     maxBodyLength: Infinity,
  //     url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/get-orders-by-table",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     data: data,
  //   };

  //   axios(config)
  //     .then(function (response) {
  //       // console.log("dataItem", JSON.stringify(response.data));
  //       setOrdersTableId(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log("Error:", error);
  //     });
  // };

  const waitingStatus = () => {
    return getOrdersTableId?.filter((r) => r.status === "WAITING");
  };
  const doneStatus = () => {
    return getOrdersTableId?.filter((r) => r.status === "DONE");
  };
  // console.log("Filter status", waitingStatus());
  // console.log("Filter status2", doneStatus());

  const updatedOrderStatus = (order_id) => {
    const data = JSON.stringify({
      order_id: order_id,
      status: "DONE",
    });

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/update-order-status",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    // setLoading(true);
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setUpdateOrderStatus(response.data);
        // setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <div className="mt-20">
        <Link to="/order">
          <p className="font-normal text-3xl text-center">รายการสั่งอาหาร</p>
        </Link>
        <p className="mt-3.5 md:ml-32">โต๊ะที่เลือก: {tableId}</p>
        <div className="mt-5 md:flex justify-center">
          <div className="grid gap-4 grid-cols-5">
            {selectTable.map((r) => {
              return (
                <button
                  onClick={() => {
                    // getTableId(r);
                    setTableId(r);
                  }}
                  className="w-[60px] h-[60px] bg-red-100 rounded-lg border-2 hover:border-red-500"
                >
                  {r}
                </button>
              );
            })}
          </div>
        </div>
        {getOrdersTableId.length === 0 && (
          <div className="text-center mt-5">
            <p className="text-gray-500">--- ไม่มีรายการสั่งอาหาร ---</p>
          </div>
        )}
        <div className="my-8">
          <p>จำนวนการสั่งซื้อ {getOrdersTableId.length}</p>
        </div>
        <div className="border-2">
          {waitingStatus().map((r) => {
            return (
              <div className="border-2 mt-2">
                <p>หมายเลขคำสั่งซื้อ #{r.order_id}</p>
                <p>โต๊ะ: {r.table_id}</p>
                <p>สถานะ: {r.status}</p>
                {r.items.map((i) => {
                  return (
                    <div className="border-2 flex justify-between ml-2 mt-1">
                      <p>{i.name}</p>
                      <p>
                        ฿{i.price} x {i.quantity}
                      </p>
                    </div>
                  );
                })}
                <div className="flex justify-end mr-4 mt-1">
                  <p className="">รวม ฿ {r.total_price}</p>
                </div>
                <div className="border-2 flex justify-end mt-5">
                  <button
                    onClick={() => updatedOrderStatus(r.order_id)}
                    className="bg-red-100 text-center rounded w-[110px] h-[45px]"
                  >
                    ทำเสร็จแล้ว
                    {/* {`${loading ? "กำลังทำรายการ..." : "ทำเสร็จแล้ว"}`} //ใช้งานจริงไม่ได้ */}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="border-2 mt-5 text-center text-lg font-bold bg-green-100 rounded">
        <p>ออเดอร์ที่สำเร็จแล้ว</p>
      </div>
      <div className="border-2 mt-5">
        {doneStatus().map((r) => {
          return (
            <div className="border-2 mt-2">
              <p>หมายเลขคำสั่งซื้อ #{r.order_id}</p>
              <p>โต๊ะ: {r.table_id}</p>
              <p>สถานะ: {r.status}</p>
              {r.items.map((i) => {
                return (
                  <div className="border-2 flex justify-between ml-2 mt-1">
                    <p>{i.name}</p>
                    <p>
                      ฿{i.price} x {i.quantity}
                    </p>
                  </div>
                );
              })}
              <div className="flex justify-end mr-4 mt-1">
                <p className="">รวม ฿ {r.total_price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Order;
