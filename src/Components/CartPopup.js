import React, { useEffect, useState } from "react";

const CartPopup = (props) => {
  console.log(props);
  const {
    cart,
    toggleCartPopup,
    setCart,
    setToggleCartPopup,
    tableId,
    setTableId,
    pushOrder,
  } = props;

  // const updateCartItem = (productId, quantity) => {
  //   // const targetItem = cart.filter((item) => item.productId === productId)[0];
  //   // const nonTargetItem = targetItem.filter(
  //   //   (item) => item.productId !== productId
  //   // );
  //   // const newCart = [
  //   //   {
  //   //     productId: targetItem.productId,
  //   //     quantity: targetItem.quantity + quantity,
  //   //     name: targetItem.name,
  //   //   },
  //   //   ...nonTargetItem,
  //   // ].filter((item) => item.quantity > 0);
  //   const newCart = [...cart];
  //   const targetIndex = cart.findIndex((item) => item.productId === productId);
  //   newCart[targetIndex].quantity += quantity;

  //   setCart(newCart.filter((item) => item.quantity > 0));
  //   console.log("newCart", newCart);
  // };

  const handleUpdateCartItem = (item, updatedQty) => {
    if (updatedQty === 0) {
      return setCart(cart.filter((a) => a.id !== item.id));
      // remove item from cart
    } else {
      const updatedCart = cart.map((orderItem) => {
        if (orderItem.id === item.id) {
          return {
            ...orderItem,
            qty: updatedQty,
          };
        }
        return orderItem;
      });
      setCart(updatedCart);
      console.log("updatedCart", updatedCart);
    }
  };

  return (
    <>
      {toggleCartPopup && (
        <div className="z-10 bg-gray-500/30 backdrop-blur-sm w-full fixed flex items-end h-full">
          <div className="m-4 p-4 border border-gray-300 rounded bg-white z-30 w-full">
            <div className="flex justify-between">
              <div>สั่งอาหาร</div>
              <div>
                <button
                  onClick={() => {
                    setToggleCartPopup(!toggleCartPopup);
                  }}
                >
                  ปิด
                </button>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <div>หมายเลขโต๊ะ</div>
              <input
                type="number"
                id="tableId"
                value={tableId}
                onInput={(e) => setTableId(Number(e.target.value))}
                className="border border-black p-2 text-center w-14"
                min="1"
              />
            </div>
            <div className="mt-4">รายการ</div>
            {props.cart?.map((item) => (
              <div className="mt-2">
                <div className="flex justify-between">
                  <div>{item.name}</div>
                  <div className="flex">
                    <button
                      className="px-2 border border-black"
                      onClick={() => handleUpdateCartItem(item, item.qty - 1)}
                    >
                      -
                    </button>
                    <div className="mx-4 px-4 border border-black w-12 text-center">
                      {item.qty}
                    </div>
                    <button
                      className="px-2 border border-black"
                      onClick={() => handleUpdateCartItem(item, item.qty + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <button
              className="w-full rounded bg-red-200 p-4 mt-4 font-bold"
              onClick={() => {
                pushOrder();
                setToggleCartPopup(!toggleCartPopup);
              }}
            >
              สั่งอาหาร
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CartPopup;
