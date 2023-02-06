import React, { useState, useEffect } from "react";
import axios from "axios";

const CartPopup = (props) => {
  console.log("CartPopup", props);
  const { cart, setCart, updateCart, toggleCartPopup, setToggleCartPopup } =
    props;
  console.log("cart", cart);
  const [tableId, setTableId] = useState(undefined);
  const [receipt, setReceipt] = useState(undefined);

  const submitOrder = () => {
    const data = {
      table_id: tableId,
      items: cart.map((r) => ({
        menu_id: r.id,
        price: r.price,
        quantity: r.quantity,
        total_price: r.totalPrice,
      })),
    };
    console.log("data", data);

    axios({
      method: "post",
      url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/create-order",
      data: data,
    }).then((response) => {
      console.log("response:" + response.data);
    });
  };

  return (
    <>
      {toggleCartPopup && (
        <div>
          <div className="bg-black opacity-50 fixed top-0 left-0 w-full h-full"></div>
          <div className="bottom-0 fixed bg-white w-full px-2 py-4">
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
                <div>
                  <button
                    onClick={() => submitOrder()}
                    className="button bg-red-200 w-full rounded-lg py-2 mt-8"
                  >
                    สั่งอาหาร
                  </button>
                </div>
              </div>
            )}
            {receipt && <div className="mt-4">เลขที่คำสั่ง: {receipt.id}</div>}
          </div>
        </div>
      )}
    </>
  );
};
export default CartPopup;
