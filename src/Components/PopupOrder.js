import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import axios from "axios";

const PopupOrder = ({
  modalOrder,
  setModalOrder,
  orderListsState,
  setOrderListsState,
}) => {
  // console.log(dataOrderPopup, modalOrder);
  const [tableNo, setTableNo] = useState(1);

  document.addEventListener("click", function (event) {
    const navId = event.target.id;
    // console.log(modalOrder, navId);
    modalOrder && navId === "nonPopupBlock" && setModalOrder(false);
  });

  const pushOrder = () => {
    const ordesrMap = orderListsState.map((orderList) => {
      return {
        menu_id: orderList.id,
        price: orderList.price,
        quantity: orderList.quantity,
        total_price: orderList.quantity * orderList.price,
      };
    });
    console.log(ordesrMap);

    const datas = JSON.stringify({
      table_id: tableNo,
      items: ordesrMap,
    });
    console.log(datas);

    const config = {
      method: "post",
      url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/create-order",
      headers: {
        "Content-Type": "application/json",
      },
      data: datas,
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setModalOrder(false);
        localStorage.setItem("orders", JSON.stringify([]));
        setOrderListsState([]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const setAmount = (data, sign) => {
    // console.log(data, sign);
    const orderLists = JSON.parse(localStorage.getItem("orders")) ?? [];

    const reOrders = orderLists.map((order) => {
      if (order.id === data.id) {
        return { ...order, quantity: order.quantity + sign };
      } else {
        return order;
      }
    });

    const reReOrder = reOrders.filter((x) => x.quantity > 0);

    localStorage.setItem("orders", JSON.stringify(reReOrder));
    setOrderListsState(reReOrder);

    reReOrder.length > 0 ? setModalOrder(true) : setModalOrder(false);
  };

  return (
    <div className="modalOrder fixed top-0 left-0 w-full h-screen">
      <div id="nonPopupBlock" className="w-full h-screen bg-zinc-800/80"></div>
      <div className="absolute bottom-0 w-full h-4/5 bg-white overflow-y-auto border-t-2 rounded-t-lg">
        <div className="fixed left-0 w-full bg-white border-b-2 p-4">
          <div className="modalOrderHead flex justify-between">
            <p>สั่งอาหาร</p>
            <button onClick={() => setModalOrder(false)}>
              <FaTimes />
            </button>
          </div>
          <div className="flex flex-col gap-y-4 mb-4">
            <div className="modalOrderTbNo flex items-center justify-between mt-8">
              <p>หมายเลขโต๊ะ</p>
              <input
                onChange={(e) => setTableNo(e.target.value)}
                type="number"
                className="w-[50px] h-[50px] border-2 text-center border-gray-400 rounded-md"
                value={tableNo}
              />
            </div>
            <p className="">รายการ</p>
          </div>
        </div>

        <div className="pt-52">
          <div className="flex flex-col gap-y-4 mb-8 p-4">
            {orderListsState.map((order) => {
              return (
                <div
                  key={order.id}
                  className="modalOrderTbNo flex items-center justify-between"
                >
                  <p>{order.name}</p>
                  <div className="flex gap-x-2">
                    <button
                      onClick={() => setAmount(order, -1)}
                      className="w-[50px] h-[50px] flex items-center justify-center bg-red-100 rounded-md text-2xl"
                    >
                      -
                    </button>
                    <div className="w-[50px] h-[50px] flex items-center justify-center border-2 border-gray-400 rounded-md">
                      {order.quantity}
                    </div>
                    <button
                      onClick={() => setAmount(order, 1)}
                      className="w-[50px] h-[50px] flex items-center justify-center bg-red-100 rounded-md text-2xl"
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="fixed bottom-0 w-full bg-white border-t-2 p-4">
            <button
              onClick={() => pushOrder()}
              className="w-full h-14 bg-red-100 rounded-full"
            >
              สั่งอาหาร
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupOrder;
