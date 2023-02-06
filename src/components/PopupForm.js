import React from "react";
import { BsX } from "react-icons/bs";
import axios from "axios";

const PopupForm = ({
  orders,
  setOrders,
  setOpenPop,
}) => {

  console.log("popuporder", orders);

  const [tableId, setTableId] = React.useState(0);

  const updateCart = (menuId, amount) => {
    console.log("menuId : " + menuId);
    const index = orders.findIndex((order) => order.id === menuId);
    const newOrders = [...orders];
    newOrders[index].quantity += amount;
    console.log("orders pop : ", newOrders);
    setOrders(newOrders);
  };

  const submitOrder = () => {
    console.log("tableId : ", tableId);
    console.log("submitOrder : ", orders);

    const orderData = {
      table_id: Number(tableId),
      items: orders.map((order) => ({
        menu_id: order.id,
        price: order.price,
        quantity: order.quantity,
        total_price: order.price * order.quantity,
      })),
    };
    console.log("orderData : ", orderData);
    axios({
      method: "post",
      url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/create-order",
      headers: {
        "Content-Type": "application/json",
      },
      data: orderData,
    }).then((response) => {
      console.log("Res.Data pop : ", response.data);
    });
  };

  return (
    <>
      {/* modal here */}
      <div className="shadow-md w-full z-[50] fixed top-0 left-0">
        <div className="fixed inset-x-0 top-15  h-full bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center">
          <div className=""></div>
        </div>
      </div>
      {/* pop here */}
      <div className="shadow-md w-full fixed left-0 bg-gray-100 bottom-0 z-[100]">
        <div className="flex justify-between px-4 bg-yellow-600  text-white align-center h-[50px]">
          <div className="flex w-1/3 items-center justify-start">สั่งอาหาร</div>
          <button
            onClick={() => setOpenPop(false)}
            className="flex items-center justify-end text-xl"
          >
            <BsX />
          </button>
        </div>
        <div className="p-4">
          <div className="flex justify-between align-center h-[50px]">
            <div className="flex w-1/3 items-center align-center">
              หมายเลขโต๊ะ
            </div>

            <div className="flex bg-white w-1/3 h-[40px] items-center my-auto rounded-xl">
              <input
                id="table"
                type="number"
                placeholder="0"
                className="mx-5 w-full text-center text-md"
                onChange={(e) => setTableId(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="flex w-1/3 items-center py-4">รายการ</div>
          {orders?.map((order) => {
            return (
              <>
                <div className="flex justify-between align-center  h-[50px]">
                  <div className="flex w-1/3 items-center align-center">
                    {order.name}
                  </div>
                  <div className="flex bg-white w-1/3 h-[40px] items-center my-auto rounded-xl">
                    <button
                      onClick={() => updateCart(order.id, -1)}
                      className="w-1/3 text-center text-md"
                    >
                      -
                    </button>
                    <span className="w-1/3 text-center text-md">
                      {order.quantity}
                    </span>
                    <button
                      onClick={() => updateCart(order.id, 1)}
                      className="w-1/3 text-center text-md"
                    >
                      +
                    </button>
                  </div>
                </div>
              </>
            );
          })}

          <div className="py-4">
            <button
              className="w-full bg-yellow-600  text-white p-4 rounded-xl hover:bg-yellow-700"
              type="submit"
              onClick={submitOrder}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopupForm;
