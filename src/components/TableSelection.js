import React from "react";
const TableSelection = (props) => {
  const TableNumber = [...Array(15).keys()]; //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const { tableId, setTableId, orders, setOrders, updateOrderStatus } = props;
  return (
    <div>
      <div className="grid gap-2 grid-cols-5">
        {TableNumber.map((id, index) => (
          <button
            key={index}
            className="py-2 px-2 bg-red-200 rounded-lg button border hover:border-red-800 border-2 active:bg-red-500 mx-6 my-6 md:mx-12 md:my-12 "
            onClick={() => setTableId(id + 1)}
          >
            {id + 1}
          </button>
        ))}
      </div>
      {orders.map((order) => {
        console.log(order.order_id, order)
        return (
          <div>
            <div className="text-neutral-50"> หมายเลขคำสั่ง#{order.order_id}</div>
            <div className="text-neutral-50">โต็ะ:{order.table_id}</div>
            <div className="text-neutral-50">สถานะ:{order.status}</div>
  
            <div>
              {order.items.map((item) => (
                <div>
                  <div className="flex bg-red-300">
                    <div className=" flex-auto">{item.name}</div>
                    <div className="mr-6">{item.price}</div>
                  </div>
                  <div className="text-neutral-50">รวม: {item.total_price}</div>
                </div>
              ))}
            </div>
            {order.status === "WAITING" && (
            <button className="text-neutral-50 bg-red-300 h-12 w-24 button px-2" onClick={(() => updateOrderStatus(order.order_id))}>ทำเสร็จแล้ว</button>
            )}
          </div>
        )
      })}
    </div>

    // {props.orders.map((order) => (
    //   <div> หมายเลขคำสั่ง#{order.orderId}</div>

    // ))}
  );
};

export default TableSelection;
