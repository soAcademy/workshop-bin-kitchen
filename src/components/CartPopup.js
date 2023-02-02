const CartPopup = (props) => {
  console.log("cartpopup",props);
  const { cart, setCart, toggleCartPopup, setToggleCartPopup, onUpdateCartItem } = props;


  // const onUpdateCartItem = (productId, quantity) => {
  //   const newCart = [...cart]; //spread operator - include all the added objects
  //   console.log("newcart", newCart);
  //   const targetIndex = cart.findIndex((item) => item.productId === productId); //returns the index of the first element in an array that satisfies a provided testing function.
  //   newCart[targetIndex].quantity += quantity;

  //   const newOrder = newCart.filter((item) => item.quantity > 0);
  //   console.log("new order", newOrder);
  //   setCart(newOrder);
  // };
  // console.log("update", onUpdateCartItem);
  // console.log("cart", cart)
  // console.log("new cart", setCart)
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
                      <button className="button bg-red-200 active:bg-red-400 px-2"
                        onClick={() =>
                          setCart(
                            onUpdateCartItem(item, 1, cart, -1)
                          )
                        }
                      >
                        -
                      </button>
                    </div>
                    <div className="text-neutral-50 px-2">{item.quantity}</div>
                    <div>
                      <button className="button bg-red-200 active:bg-red-400 px-2"
                        onClick={() =>
                          setCart(
                            onUpdateCartItem(item, 1, cart, 1)
                          )
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex">
                <button className="button bg-red-200 w-5/6 px-5 py-2 mx-auto mt-12 font-bold text-xl rounded-lg">
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
