import React, { useState, useEffect } from "react";
import axios from "axios";

export const CartPopup = ({
  cart,
  setCart,
  updateCart,
  toggleCartPopup,
  setToggleCartPopup,
}) => {
  const [tableId, setTableId] = useState(undefined);
  const [receipt, setReceipt] = useState(undefined);

  const submitOrder = () => {
    const data = {
      table_id: tableId,
      items: cart.map((r) => {
        const object = {
          menu_id: r.id,
          price: r.price,
          quantity: r.quantity,
          total_price: r.totalPrice,
        };
        return object;
      }),
    };
    console.log("data", data);

    axios({
      method: "post",
      url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/create-order",
      data: data,
    }).then((response) => {
      console.log("response:" + JSON.stringify(response.data));
    });
  };
  //   อันนี้เป็นตัวอย่างที่เราใช้ในการอ้างอิงวางโครงสร้าง .map ข้างบนที่มีทั้ง menu_id/ price/ quantity/ total_price
  // {
  //     "table_id": 5,
  //     "items": [
  //         {
  //             "menu_id": 1,
  //             "price": 150,
  //             "quantity": 2,
  //             "total_price": 300
  //         },
  //         {
  //             "menu_id": 5,
  //             "price": 200,
  //             "quantity": 1,
  //             "total_price": 200
  //         }
  //     ]
  // }


  return (
    <>
      <div className="bg-black opacity-50 fixed top-0 left-0 w-full h-full"></div>
      <div className="flex justify-center">
        <div className="flex flex-col justify-between bottom-1/3 fixed bg-white w-2/3 px-4 py-4 rounded-md h-[300px]">
          <div className="flex flex-col justify-between h-full">
            <div>
              <div className="flex">
                <div className="flex-auto">สั่งอาหาร</div>
                <div onClick={() => setToggleCartPopup(!toggleCartPopup)}>
                  {" "}
                  ปิด
                </div>
              </div>
              {!receipt && (
                <div>
                  <div className="flex mt-4">
                    <div className="flex-auto">หมายเลขโต๊ะ</div>
                    <div>
                      <input
                        type="number"
                        id="tableId"
                        value={tableId}
                        onInput={(e) => setTableId(e.target.value)}
                        className="border border-gray-300 p-1 text-right w-12"
                      />
                    </div>
                  </div>
                  {cart.map((item) => (
                    <div className="flex mt-2">
                      <div className="flex-auto">{item.name}</div>
                      <div className="flex-auto">{item.totalPrice}</div>
                      <div>
                        <button
                          onClick={() =>
                            setCart(
                              updateCart({
                                sign: -1,
                                cart,
                                id: item.id,
                                name: item.name,
                                price: item.price,
                                paid: item.paid,
                              })
                            )
                          }
                          className="button bg-red-200 active:bg-red-400 px-2"
                        >
                          -
                        </button>
                        <span className="px-2">{item.quantity}</span>
                        <button
                          onClick={() =>
                            setCart(
                              updateCart({
                                sign: 1,
                                cart,
                                id: item.id,
                                name: item.name,
                                price: item.price,
                                paid: item.paid,
                              })
                            )
                          }
                          className="button bg-red-200 active:bg-red-400 px-2"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                  <div></div>
                </div>
              )}
            </div>
            <button
              onClick={() => submitOrder()}
              className="bg-red-200 w-full rounded-lg py-2 mt-8"
            >
              สั่งอาหาร
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
