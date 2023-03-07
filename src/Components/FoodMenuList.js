const FoodMenuList = (props) => {
  //   console.log("prop", props);
  //   const [foodMenus, category, toggleCartPopup, setToggleCartPopup] = props;
  //   console.log("foodMenus", foodMenus);

  // const FoodMenuList = ({ foodMenus, category }) => {
  // console.log(props);
  const { cart, setCart, foodMenus, setToggleCartPopup } = props;

  const checkDupItem = (item) => {
    if (cart.length > 0) {
      if (cart.filter((r) => r.id === item.id).length > 0) {
        const bb = cart.map((r) => {
          if (r.id === item.id) {
            return { ...r, qty: r.qty + 1 };
          } else {
            return r;
          }
        });
        setCart(bb);
      } else {
        setCart([...cart, { ...item, qty: 1 }]);
      }
    } else {
      setCart([{ ...item, qty: 1 }]);
    }
  };

  return (
    foodMenus
      // .filter((item) => item.category === props.category)
      .map((item) => (
        <>
          <div className="flex mt-4 mx-4 justify-between">
            <div className="flex">
              <img
                src={item.image}
                className="object-cover rounded w-32 h-32"
              />
              <div className="ml-10">
                <p className="mt-4">{item.name}</p>
                <p className="mt-8 text-red-600">{`฿${item.price}`}</p>
              </div>
            </div>
            <div>
              <button
                className="bg-red-200 rounded px-6 py-2 mt-10"
                onClick={() => {
                  setToggleCartPopup(true);
                  // console.log("item", item);

                  // props.setCart([...props.cart, { ...item, qty: 1 }]);
                  checkDupItem(item);
                }}
              >
                เพิ่ม
              </button>
            </div>
          </div>
        </>
      ))
  );
};

export default FoodMenuList;
