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

  const totalPrice = tableOrders
    ?.filter((r) => r.status === "DONE")
    // .map((p) => p.total_price)
    .reduce(
      (acc, t) => {
        acc.total_price += t.total_price;
        return acc;
      },
      { total_price: 0 }
    );
  console.log("totalPrice", totalPrice);

  const doneOrder = (id) => {
    const targetOrder = tableOrders.filter((r) => r.order_id === id)[0];
    console.log("targetOrder:", targetOrder);
    // console.log("t:",targetOrder.map((t) => {return (t)}))
    const updateOrder = [
      ...tableOrders.filter((r) => r.order_id !== id),
      {
        ...targetOrder, status:"DONE"
      },
    ];
    console.log("updateOrder:", updateOrder);
    setTableOrders(updateOrder.sort((a,b) => b.order_id - a.order_id));
  };

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
        <div className="flex justify-between items-center">
          <div className="">
            โต๊ะที่ {tableId} ยอดรวม ฿{totalPrice.total_price}
          </div>
          <button className="border-2 border-white py-3 px-7 rounded-lg bg-yellow-500 text-black text-3xl font-semibold">
            BILL
          </button>
        </div>
      </div>
      <div className="bg-white h-full">
        {tableOrders.map((r) => {
          return (
            <div className="text-4xl text-black">
              <p>หมายเลขคำสั่งซื้อ{r.order_id}</p>
              <p>สถานะ{r.status}</p>
              {r.items.map((item) => {
                return (
                  <div className="flex justify-between">
                    <div>{item.name}</div>
                    <div>
                      {item.price} x {item.quantity}
                    </div>
                  </div>
                );
              })}
              <div className="flex justify-end">
                {r.status === "WAITING" && (
                <button
                  onClick={() => doneOrder(r.order_id)}
                  className="bg-yellow-500 rounded-lg px-5 py-3"
                >
                  DONE
                </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
