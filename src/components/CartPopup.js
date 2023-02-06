const CartPopup = (props) => {
  const [cart, setCart, toggleCartPopup, setToggleCartPopup] = props;

  const updateCartItem = (productId, quantity) => {
    // const targetItem = cart.filter((item) => item.productId === productId)[0];
    // const nonTargetItem = targetItem.filter(
    //   (item) => item.productId !== productId
    // );
    // const newCart = [
    //   {
    //     productId: targetItem.productId,
    //     quantity: targetItem.quantity + quantity,
    //     name: targetItem.name,
    //   },
    //   ...nonTargetItem,
    // ].filter((item) => item.quantity > 0);
    const newCart = [...cart];
    const targetIndex = cart.findIndex((item) => item.productId === productId);
    newCart[targetIndex].quantity += quantity;

    setCart(newCart.filter((item) => item.quantity > 0))
  };

  // ผัดคะน้า 1, แกงส้ม 2

  return (
    <>
      {toggleCartPopup && (
        <div>
          <div>
            <button onClick={() => setToggleCartPopup(!toggleCartPopup)}>
              ปิด
            </button>
          </div>
          <div>รายการสั่งอาหาร</div>
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
    </>
  );
};
