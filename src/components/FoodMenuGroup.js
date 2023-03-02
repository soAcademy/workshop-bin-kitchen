import FoodMenusList from "./FoodMenusList";

const FoodMenuGroup = ({
  menus,
  categoryName,
  setToggleCart,
  cart,
  setCart,
  uniqCart,
}) => {
  // console.log(props.category);
  // console.log(props.foodMenus);
  // const test = props.menus.filter((r) => r.category === props.category);
  // console.log(test);
  return (
    <div className="">
      <p className="mb-3.5 text-lg font-normal">เมนู{categoryName}</p>
      <FoodMenusList
        setToggleCart={setToggleCart}
        cart={cart}
        // setCart={props.setCart}
        uniqCart={uniqCart}
        menus={menus.filter((r) => r.categoryName === categoryName)}
      />
      {/* {test.map((data, idx) => (
        <FoodMenusList key={idx} data={data} setToggleCart={props.setToggleCart} cart={props.cart} setCart={props.setCart} />
      ))} */}
    </div>
  );
};

export default FoodMenuGroup;
