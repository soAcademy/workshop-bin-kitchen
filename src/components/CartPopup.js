const CartPopup = (props) => {
  console.log(props);
  const { cart, setCart, toggleCartPopup, setToggleCartPopup } = props;

  const updateCartItem = (productId, quantity) => {
    const newCart = [...cart]; //spread operator - include all the added objects
    const targetIndex = cart.findIndex((item) => item.productId === productId); //returns the index of the first element in an array that satisfies a provided testing function.
    newCart[targetIndex].quantity += quantity;

    setCart(newCart.filter((item) => item.quantity > 0));
  };
  return (
    <>
      <div className="bg-neutral-50 opacity-50 fixed top-0 left-0 w-full h-full"></div>
      <div className="bottom-0 fixed bg-white w-full px-2 py-4">
          {toggleCartPopup && (
            <div>
              <div>
                <button onClick={() => setToggleCartPopup(!toggleCartPopup)}>
                  ปิด
                </button>
              </div>
              <div className="text-neutral-50 mt-12">รายการสั่งอาหาร</div>
              {cart?.map((item) => (
            <div>
              {item.name}
              <button onClick={() => updateCartItem(item.productId, -1)}>
                -
              </button>
              {item.quantity}
              <button onClick={() => updateCartItem(item.productId, 1)}>
                +
              </button>
            </div>
              ))}
            </div>
          )}
        </div>
      
    </>
  );
};

export default CartPopup;
