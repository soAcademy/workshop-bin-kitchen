import axios from "axios";
import { useState } from "react";
const CartPopup = (props) => {
  console.log("cartpopup", props);
  const {
    cart,
    setCart,
    toggleCartPopup,
    setToggleCartPopup,
    onUpdateCartItem,
  } = props;
  const [tableId, setTableId] = useState(undefined);
  const [receipt, setReceipt] = useState(undefined);

  const submitOrder = () => {
    // const data = {
    //   table_id: tableId,
    //   items: cart.map((r) => ({
    //     menu_id: r.id,
    //     price: r.price,
    //     quantity: r.quantity,
    //     total_price: r.quantity*r.price,
    //   })),
    // };
    const data = {
      tableId: Number(tableId),
      status: "PENDING",
      items: cart?.map((r) => ({
        id: Number(r.id),
        quantity: r.quantity,
        totalPrice: Number(r.quantity*r.price),
      })),
    };
    console.log(data);

    axios({
      method: "post",
      // url:"https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/create-order",
      url: "http://localhost:3000/binKitchen/createOrder",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    }).then((response) => {
      console.log("response", response.data);
      setCart([])
    }).catch((error) => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log("error data", error.response.data);
        console.log("error status", error.response.status);
        console.log("error headers", error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log("error Request", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log("error config", error.config);
    });
    
    
    
    
    
    
    
    
  };

  return (
    <>
      <div className="flex">
        <div className="bg-neutral-50 opacity-50 fixed top-0 left-0 w-full h-full"></div>

        <div className="bottom-0 fixed bg-neutral-800 w-full left-1 px-2 py-4 right-2">
          {toggleCartPopup && (
            <div>
              <div className="flex">
                <div className="text-neutral-50 text-left flex-auto font-bold text-2xl">
                  รายการสั่งอาหาร
                </div>
                <div className="text-neutral-50 pr-3 font-bold text-2xl hover:text-sky-500">
                  <button onClick={() => setToggleCartPopup(!toggleCartPopup)}>
                    Close
                  </button>
                </div>
              </div>
              <div className="flex mt-5">
                <div className="text-neutral-50 text-xl flex-auto font-bold">
                  Table No.
                </div>
                <div>
                  <input
                    type="number"
                    onChange={(e) => setTableId(e.target.value)}
                    className="border-2 border-sky-500 w-12 h-8 mr-5 mb-4"
                  />
                </div>
              </div>
              <div>
                {cart?.map((item) => (
                  <div className="flex">
                    <div className="text-neutral-50 flex-auto">
                      <div>{item.name}</div>
                      <div className="text-neutral-50">{item.price}</div>
                    </div>

                    <div>
                      <button
                        className="button bg-red-200 active:bg-red-400 px-2"
                        onClick={() =>
                          setCart(onUpdateCartItem(item, 1, cart, -1))
                        }
                      >
                        -
                      </button>
                    </div>
                    <div className="text-neutral-50 px-2">{item.quantity}</div>
                    <div>
                      <button
                        className="button bg-red-200 active:bg-red-400 px-2"
                        onClick={() =>
                          setCart(onUpdateCartItem(item, 1, cart, 1))
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex">
                <button
                  onClick={() => submitOrder()}
                  type="submit"
                  className="button bg-red-200 active:bg-red-500 w-5/6 px-5 py-2 mx-auto mt-12 font-bold text-xl rounded-lg"
                >
                  Order
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartPopup;
