import { useState, useEffect } from "react";
import axios from "axios";
import LoadingPage from "../Components/LoadingPage";

const Orders = () => {
  const [tableNumber, setTableNumber] = useState(0);
  const [orders, setOrders] = useState([]);
  const [totalCheck, setTotalCheck] = useState("...");
  const [loadingPage, setLoadingPage] = useState(false);

  const tableNo = [...Array(15).keys()];

  useEffect(() => {
    tableNumber > 0 && setLoadingPage(true);
    loadDetailOrders(tableNumber);
  }, [tableNumber]);

  const loadDetailOrders = (tbNo) => {
    const data = JSON.stringify({
      table_id: tbNo,
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

    tbNo > 0 &&
      axios(config)
        .then(function (response) {
          // console.log(response.data);
          setOrders(response.data);
          // console.log(response.data);
          // console.log([
          //   ...new Set(response.data?.map((order) => order.status)),
          // ]);
          setTotalCheck("...");
          setLoadingPage(false);
        })
        .catch(function (error) {
          console.log(error);
          alert(error);
        });
  };

  const updateStatus = (id) => {
    // console.log(id);
    setLoadingPage(true);
    const data = JSON.stringify({
      order_id: id,
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

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        loadDetailOrders(tableNumber);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="w-full h-screen md:flex justify-center font-prompt pt-20 p-4">
      <div className="w-full md:w-2/3 lg:w-1/2 ">
        <div className="Title mb-6">
          <h1 className="text-3xl text-center">รายการสั่งอาหาร</h1>
        </div>
        <div className="w-full md:flex gap-x-4">
          <div className="tableBlock sticky md:w-1/2 flex flex-col gap-y-4 mb-6">
            <p className="md:text-center">กดเลือกโต๊ะ</p>
            <div className="w-full">
              <div className="w-full grid grid-cols-5 gap-4">
                {tableNo.map((r) => (
                  <button
                    key={`tb-${r + 1}`}
                    onClick={() => setTableNumber(r + 1)}
                    className={
                      "w-full aspect-square bg-red-100 rounded-lg " +
                      (tableNumber === r + 1 ? "ring-2 ring-red-300" : "")
                    }
                  >
                    {r + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {tableNumber !== 0 ? (
            <div className="fetchOrders md:w-1/2 flex flex-col text-sm gap-y-6">
              <div className="flex justify-between">
                <p className="flex items-center">
                  โต๊ะ {tableNumber} ยอดรวม ฿{totalCheck.toLocaleString()}
                </p>
                {orders.filter((r) => r.status === "WAITING").length === 0 && (
                  <button
                    onClick={() =>
                      setTotalCheck(
                        orders?.reduce((acc, r) => acc + r.total_price, 0)
                      )
                    }
                    className="h-14 bg-red-100 rounded-lg px-4"
                  >
                    เช็คบิล
                  </button>
                )}
              </div>
              <div className="flex flex-col gap-y-8 overflow-y-auto">
                {[...new Set(orders?.map((orders) => orders.status))]
                  .sort((a, b) => (a > b ? -1 : b > a ? 1 : 0))
                  .map((state) => {
                    return orders
                      .filter((order) => order.status === state)
                      .sort((a, b) => a.order_id - b.order_id)
                      .map((allItems) => (
                        <div
                          key={`order_id-${allItems.order_id}`}
                          className="flex flex-col gap-y-2 rounded-lg"
                        >
                          <p>หมายเลขคำสั่งซื้อ #{allItems.order_id}</p>
                          <p>
                            สถานะ:{" "}
                            {allItems.status === "WAITING" ? (
                              <span>กำลังทำ</span>
                            ) : (
                              <span className="font-bold">ทำเสร็จแล้ว</span>
                            )}
                          </p>
                          <div className="orderName w-full flex flex-col gap-y-2">
                            {allItems.items.map((item) => (
                              <div
                                key={crypto.randomUUID()}
                                className="menu w-full flex flex-between"
                              >
                                <p className="w-4/6">{item.name}</p>
                                <p className="w-2/6 text-end">
                                  ฿{item.price.toLocaleString()} x{" "}
                                  {item.quantity}
                                </p>
                              </div>
                            ))}
                          </div>
                          <div className="sumEachOrder">
                            <p className="w-full text-end">
                              รวม ฿{allItems.total_price.toLocaleString()}
                            </p>
                          </div>
                          <div className="statusBtn w-full flex justify-end">
                            {state === "WAITING" && (
                              <button
                                onClick={() => updateStatus(allItems.order_id)}
                                className="h-14 bg-red-100 rounded-lg px-4"
                              >
                                ปรุงเสร็จ
                              </button>
                            )}
                          </div>
                        </div>
                      ));
                  })}
              </div>
            </div>
          ) : (
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <p className="text-center">--- ไม่มีรายการสั่งอาหาร ---</p>
            </div>
          )}
        </div>
      </div>

      {loadingPage && <LoadingPage />}
    </div>
  );
};

export default Orders;
